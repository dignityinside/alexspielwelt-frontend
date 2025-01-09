<script setup lang="ts">
import type { Game } from '~/types';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
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

const isVisible = ref(true);

const toggleVisibility = () => {
  isVisible.value = !isVisible.value;
};
</script>

<template>
  <div>
    <div v-if="status === 'pending'">Lädt...</div>

    <div v-if="status === 'error' && games">Fehler beim Laden: {{ error.message }}</div>

    <div>
      <template v-if="games && games.length > 0">
        <section class="section is-medium has-text-centered">
          <h1 class="title">#Spieltipps</h1>
          <h2 class="subtitle">Ich helfe dir, das perfekte Brettspiel zu finden!</h2>
        </section>

        <section class="hero is-light">
          <button @click="toggleVisibility" class="button is-light">
            Filter {{ isVisible ? 'Verbergen' : 'Anzeigen' }}
          </button>

          <div v-show="isVisible" class="hero-body">
            <div class="columns is-multiline is-centered has-text-centered">
              <div class="column is-3">
                Bewertung:
                <span v-if="filters.rating > 0">
                  {{ filters.rating }} <ui-stars :stars="Number(filters.rating)" />
                </span>
                <span v-else>Alle</span>
                <ui-range name="rating" v-model="filters.rating" @input="updateSliderValue" />
              </div>

              <div class="column is-3">
                Empfohlenes Alter:
                <span v-if="filters.recommendedAge > 0">
                  ab {{ filters.recommendedAge }} <font-awesome-icon icon="fa-circle-user" />
                </span>
                <span v-else>Alle</span>
                <ui-range
                  name="difficulty"
                  :max="18"
                  v-model="filters.recommendedAge"
                  @input="updateSliderValue"
                />
              </div>
            </div>

            <div class="columns is-multiline is-centered has-text-centered">
              <div class="column is-3">
                Spieleranzahl:
                <span v-if="filters.players > 0">
                  ab {{ filters.players }} Spieler <font-awesome-icon icon="fa-users" />
                </span>
                <span v-else>Alle</span>
                <ui-range
                  name="players"
                  :max="12"
                  v-model="filters.players"
                  @input="updateSliderValue"
                />
              </div>

              <div class="column is-3">
                Dauer:
                <span v-if="filters.playTime > 0">
                  bis {{ filters.playTime }} Stunde <font-awesome-icon icon="fa fa-clock" />
                </span>
                <span v-else>Alle</span>
                <ui-range
                  name="playTime"
                  :max="12"
                  v-model="filters.playTime"
                  @input="updateSliderValue"
                />
              </div>

              <div class="column is-3">
                Komplexität:
                <span v-if="filters.difficulty > 0">
                  <span v-if="filters.difficulty <= 9">ab</span>
                  {{ filters.difficulty }} <font-awesome-icon icon="fa-chess-rook" />
                </span>
                <span v-else>Alle</span>
                <ui-range
                  name="difficulty"
                  :max="10"
                  v-model="filters.difficulty"
                  @input="updateSliderValue"
                />
              </div>

              <div class="column is-12">
                <ui-button @click="clearFilters" text="Filter löschen" class="is-light is-danger" />
              </div>
            </div>

            <div class="columns is-multiline is-centered">
              <div class="column is-6">
                <ui-input
                  v-model="filters.searchQuery"
                  @clear="clearSearch"
                  :clear-icon="true"
                  name="search"
                  label="Suche"
                  icon-left="fa-search"
                />
              </div>
            </div>
          </div>
        </section>

        <hr />

        <div v-if="filteredGames.length" class="columns is-multiline has-text-centered">
          <div
            v-for="game in filteredGames"
            :key="game.slug"
            @click="openGame(game.slug)"
            class="game column is-one-fifth mx-2 my-2"
          >
            <img :src="game.img" :alt="game.title" :title="game.title" class="image" />
            <p class="content mt-2">{{ game.title }}</p>
          </div>
        </div>
        <div v-else>Keine Ergebnisse gefunden.</div>
      </template>
      <template v-else>Keine Spieltipps gefunden.</template>
      <hr />
    </div>

    <p v-if="status === 'success' && (!games || gamesStore.gamesCount === 0)">
      Keine Spiele verfügbar.
    </p>
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
