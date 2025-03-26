<script setup lang="ts">
import type { Game } from '~/types';
import { ApiEndpoint } from '~/enums/api-endpoint';

useSeoMeta({
  title: 'Spieltipps',
  description: 'Ich helfe dir, das perfekte Brettspiel zu finden!',
});

// Init store
const gamesStore = useGamesStore();

// Get data from api
const { data: items, status, error } = await useAPI(ApiEndpoint.GAMES_LIST);
const games = computed(() => items.value as Game[]);

// Save data to store
if (games.value) {
  gamesStore.setGames(games.value);
}

const openGame = (slug: string) => {
  navigateTo({ name: 'game', params: { slug } });
};

// Initial state
const filters = reactive({
  rating: 0,
  difficulty: 0,
  recommendedAge: 0,
  players: 0,
  playTime: 0,
  searchQuery: '',
});

const updateSliderValue = () => {
  filters.rating = Number(filters.rating);
  filters.difficulty = Number(filters.difficulty);
  filters.recommendedAge = Number(filters.recommendedAge);
  filters.players = Number(filters.players);
  filters.playTime = Number(filters.playTime);
};

const clearFilters = () => {
  Object.assign(filters, { rating: 0, difficulty: 0, recommendedAge: 0, players: 0, playTime: 0 });
};

const clearSearch = () => {
  filters.searchQuery = '';
};

// Filter result
const filteredGames = computed(() => {
  let result = games.value;

  const parseRange = (value: string | null): [number, number] => {
    if (!value) return [0, 0];
    const [min, max] = value.split('-').map(Number);
    return [min || 0, max || 0];
  };

  if (filters.rating) {
    result = result.filter((game) => game.rating === Number(filters.rating));
  }

  if (filters.difficulty) {
    result = result.filter((game) => game.difficulty <= Number(filters.difficulty));
  }

  if (filters.recommendedAge) {
    const parseRecommendedAge = (age: string | null) => (age ? parseInt(age, 10) : 0);

    result = result.filter(
      (game) => parseRecommendedAge(game.recommendedAge) <= filters.recommendedAge,
    );
  }

  if (filters.players) {
    result = result.filter((game) => {
      const [minPlayers, maxPlayers] = parseRange(game.players);
      return filters.players >= minPlayers && filters.players <= maxPlayers;
    });
  }

  if (filters.playTime) {
    result = result.filter((game) => {
      const [minPlayTime, maxPlayTime] = parseRange(game.playTime);
      return filters.playTime >= minPlayTime && filters.playTime <= maxPlayTime;
    });
  }

  // Search by title, ean, or publisher
  if (filters.searchQuery) {
    const query = filters.searchQuery.toLowerCase();
    result = result.filter((game) => {
      return (
        game.title.toLowerCase().includes(query) ||
        game.ean?.toLowerCase().includes(query) ||
        game.publisher?.toLowerCase().includes(query)
      );
    });
  }

  return result;
});
</script>

<template>
  <div>
    <div v-if="status === 'pending'">Lädt...</div>

    <div v-if="status === 'error' && games">Fehler beim Laden: {{ error.message }}</div>

    <div>
      <layout-hero>
        <template #title> #Spieltipps </template>
        <template #subtitle> Ich helfe dir, das perfekte Brettspiel zu finden! </template>
      </layout-hero>

      <template v-if="games && games.length > 0">
        <section class="filter">
          <div class="filter__header">
            <h3 class="filter__title">Filter</h3>
          </div>

          <div>
            <div class="filter__settings">
              <div class="filter__item">
                Bewertung:
                <span v-if="filters.rating > 0">
                  {{ filters.rating }} <ui-stars :stars="Number(filters.rating)" />
                </span>
                <span v-else>Alle</span>
                <u-range
                  name="rating"
                  :max="5"
                  v-model="filters.rating"
                  @input="updateSliderValue"
                />
              </div>

              <div class="filter__item">
                Empfohlenes Alter:
                <span v-if="filters.recommendedAge > 0">
                  ab {{ filters.recommendedAge }} <u-icon name="fa6-solid:circle-user" />
                </span>
                <span v-else>Alle</span>
                <u-range
                  name="recommendedAge"
                  :max="18"
                  v-model="filters.recommendedAge"
                  @input="updateSliderValue"
                />
              </div>

              <div class="filter__item">
                Spieleranzahl:
                <span v-if="filters.players > 0">
                  ab {{ filters.players }} Spieler <u-icon name="fa6-solid:users" />
                </span>
                <span v-else>Alle</span>
                <u-range
                  name="players"
                  :max="12"
                  v-model="filters.players"
                  @input="updateSliderValue"
                />
              </div>

              <div class="filter__item">
                Dauer:
                <span v-if="filters.playTime > 0">
                  bis {{ filters.playTime }} Stunde <u-icon name="fa6-solid:clock" />
                </span>
                <span v-else>Alle</span>
                <u-range
                  name="playTime"
                  :max="12"
                  v-model="filters.playTime"
                  @input="updateSliderValue"
                />
              </div>

              <div class="filter__item">
                Komplexität:
                <span v-if="filters.difficulty > 0">
                  <span v-if="filters.difficulty <= 9">ab</span>
                  {{ filters.difficulty }} <u-icon name="fa6-solid:chess-rook" />
                </span>
                <span v-else>Alle</span>
                <u-range
                  name="difficulty"
                  :max="10"
                  v-model="filters.difficulty"
                  @input="updateSliderValue"
                />
              </div>
            </div>

            <div class="filter__clear">
              <div class="filter__clear-button" @click="clearFilters">Filter löschen</div>
            </div>

            <div class="filter__search">
              <div class="filter__search-input">
                <u-input
                  v-model="filters.searchQuery"
                  name="search"
                  icon="material-symbols:search-rounded"
                  size="lg"
                >
                  <template #trailing>
                    <u-icon
                      name="material-symbols:cancel-outline-rounded"
                      @click="clearSearch"
                      class="cursor-pointer"
                      style="pointer-events: all"
                    />
                  </template>
                </u-input>
              </div>
            </div>
          </div>
        </section>

        <div v-if="filteredGames.length" class="games">
          <div
            v-for="game in filteredGames"
            :key="game.slug"
            @click="openGame(game.slug)"
            class="game"
          >
            <div>
              <img :src="game.img" :alt="game.title" :title="game.title" class="image" />
            </div>
            <div class="game__title">{{ game.title }}</div>
          </div>
        </div>
        <div v-else class="game__text">Keine Ergebnisse gefunden.</div>
      </template>
      <div v-else class="game__text">Keine Spieltipps gefunden.</div>
    </div>
  </div>
</template>

<style scoped lang="css">
.filter {
  background: var(--color-deep-purple);
  border: 2px solid var(--color-hot-pink);
  padding: var(--size-32);
  color: var(--color-white);
}

.filter__header {
  font-size: var(--font-size-20);
  line-height: var(--size-28);
  text-align: center;
  font-weight: var(--font-bold);
  text-transform: uppercase;
  transform: skew(-25deg);
  background: var(--color-hot-pink);
  margin-bottom: var(--size-32);
}

.filter__title {
  transform: skew(25deg);
}

.filter__settings {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: var(--size-12);
}

.filter__item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

@media (min-width: 640px) {
  .filter__settings {
    flex-direction: row;
  }

  .filter__item {
    width: 15%;
  }
}

.filter__clear {
  display: flex;
  justify-content: center;
  margin-top: var(--size-32);
  margin-bottom: var(--size-32);
}

.filter__clear-button {
  color: var(--color-hot-pink);
  border-radius: 10px;
  border: solid 2px var(--color-hot-pink);
  padding: var(--size-8) var(--size-32);
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    color: var(--color-white);
    border: solid 2px var(--color-white);
  }
}

.filter__search {
  display: flex;
  justify-content: center;
}

@media (min-width: 640px) {
  .filter__search-input {
    width: 33.3%;
  }
}

.games {
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: var(--size-32);
  margin-top: var(--size-32);
  margin-bottom: var(--size-32);
}

@media (min-width: 640px) {
  .games {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: var(--size-24);
  }
}

.game {
  background: var(--color-deep-purple);
  border: 2px solid var(--color-hot-pink);
  color: var(--color-white);
  cursor: pointer;
  border-bottom-left-radius: 20px;
  border-top-right-radius: 20px;
  overflow: hidden;
  transition: 0.3s;

  &:hover {
    border: 2px solid var(--color-white);
    color: var(--color-white);
    text-decoration: underline;
  }
}

.game__title {
  padding: var(--size-16) var(--size-32);
  text-align: center;
}

.game__text {
  padding-top: 2rem /* 32px */;
  padding-bottom: 2rem /* 32px */;
  color: var(--color-white);
}

.image {
  filter: grayscale(0);
  padding: var(--size-16);
  overflow: hidden;

  transition:
    filter 0.2s,
    opacity 0.2s;
}

.image:hover {
  filter: grayscale(100%);
}
</style>
