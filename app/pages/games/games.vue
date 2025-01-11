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
        <section class="bg-gray-100 p-8">
          <h3 class="text-xl text-center font-bold pb-4">Filter</h3>

          <div>
            <div class="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-24">
              <div>
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
                  class="py-6"
                />
              </div>

              <div>
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
                  class="py-6"
                />
              </div>

              <div>
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
                  class="py-6"
                />
              </div>

              <div>
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
                  class="py-6"
                />
              </div>

              <div>
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
                  class="py-6"
                />
              </div>
            </div>

            <div class="flex justify-center my-4">
              <div>
                <u-button @click="clearFilters"> Filter löschen </u-button>
              </div>
            </div>

            <div class="flex justify-center">
              <div class="w-full sm:w-1/3">
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

        <div
          v-if="filteredGames.length"
          class="grid grid-col sm:grid-cols-2 md:grid-cols-4 gap-2 my-8"
        >
          <div
            v-for="game in filteredGames"
            :key="game.slug"
            @click="openGame(game.slug)"
            class="game mx-2 my-2"
          >
            <img :src="game.img" :alt="game.title" :title="game.title" class="image" />
            <p>{{ game.title }}</p>
          </div>
        </div>
        <div v-else class="py-8 text-center">Keine Ergebnisse gefunden.</div>
      </template>
      <div v-else class="py-8 text-center">Keine Spieltipps gefunden.</div>
    </div>
  </div>
</template>

<style scoped>
.image {
  border-radius: 8px;
  filter: grayscale(0);

  transition:
    filter 0.2s,
    opacity 0.2s;
}

.image:hover {
  filter: grayscale(100%);
}

.game {
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
}
</style>
