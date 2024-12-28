<script setup lang="ts">
const { loggedIn } = useUserSession();
import type { Game } from '~/types';

useSeoMeta({
  title: 'Spieltipps',
  description: 'Ich helfe dir, das perfekte Brettspiel zu finden!',
});

// Init config, store and router
const gamesStore = useGamesStore();

// Get data from api
const { data: items, status, error } = await useAPI('/games');

// Save data in store
const games = computed(() => items.value as Game[]);

if (games.value) {
  gamesStore.setGames(games.value);
}

const openGame = (slug: string) => {
  navigateTo({ name: 'game', params: { slug } });
};
</script>

<template>
  <div>
    <div v-if="status === 'pending'">Lädt...</div>

    <div v-if="status === 'error'">Fehler beim Laden: {{ error.message }}</div>

    <div>
      <p class="has-text-centered" v-if="loggedIn">
        <nuxt-link :to="{ name: 'game.add' }">
          <font-awesome-icon icon="fa fa-plus-circle" />
          Hinzufügen
        </nuxt-link>
      </p>

      <template v-if="games && games.length > 0">
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
