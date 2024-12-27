<script setup lang="ts">
import { useFetch } from '#app';
import type { Game } from '~/types';

definePageMeta({
  name: 'games',
  path: '/spieltipps',
});

useSeoMeta({
  title: 'Spieltipps',
  description: 'Ich helfe dir, das perfekte Brettspiel zu finden!',
});

// Init config, store and router

const runtimeConfig = useRuntimeConfig();
const gamesStore = useGamesStore();
const router = useRouter();

// Get data from api

const {
  data: items,
  status,
  error,
} = useFetch<Game[]>('/games', {
  baseURL: runtimeConfig.public.baseURL,
  immediate: true,
});

// Save data in store

const games = computed(() => items.value);

if (games.value) {
  gamesStore.setGames(games.value);
}

const openGame = (slug: string) => {
  router.push({ name: 'game', params: { slug } });
};
</script>

<template>
  <div>
    <div v-if="status === 'pending'">Lädt...</div>

    <div v-if="status === 'error'">Fehler beim Laden: {{ error.message }}</div>

    <div v-if="status === 'success' && games">
      <template v-if="gamesStore.gamesCount">
        <section class="section is-medium has-text-centered">
          <h1 class="title">#Spieltipps</h1>
          <h2 class="subtitle">Ich helfe dir, das perfekte Brettspiel zu finden!</h2>
        </section>

        <div class="columns is-multiline has-text-centered">
          <div
            v-for="game in games"
            :key="game.slug"
            @click="openGame(game.slug)"
            class="game column is-one-fifth"
          >
            <img :src="game.img" :alt="game.title" :title="game.title" class="image" />
            <p class="content mt-2">{{ game.title }}</p>
          </div>
        </div>
      </template>
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
