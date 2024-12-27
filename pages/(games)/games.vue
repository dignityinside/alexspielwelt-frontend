<script setup lang="ts">
definePageMeta({
  name: 'games',
  path: '/spieltipps',
});

useSeoMeta({
  title: 'Spieltipps',
  description: 'Ich helfe dir, das perfekte Brettspiel zu finden!',
});

import { useFetch } from '#app';
import { useGamesStore } from '~/store/useGamesStore';

const runtimeConfig = useRuntimeConfig();
const gamesStore = useGamesStore();
const router = useRouter();

// Get data from api

const {
  data: items,
  pending,
  error,
} = useFetch('/games', {
  baseURL: runtimeConfig.public.baseURL,
});

// Save data in store

gamesStore.setGames(items);

const openGame = (slug: string) => {
  router.push({ name: 'game', params: { slug: slug } });
};
</script>

<template>
  <div>
    <div v-if="pending">Lädt...</div>

    <div v-else-if="error">Fehler: {{ error.message }}</div>

    <div v-else>
      <template v-if="gamesStore.gamesCount">
        <section class="section is-medium has-text-centered">
          <h1 class="title">#Spieltipps</h1>
          <h2 class="subtitle">Ich helfe dir, das perfekte Brettspiel zu finden!</h2>
        </section>

        <div class="columns is-multiline has-text-centered">
          <div
            v-for="game in gamesStore.games"
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
