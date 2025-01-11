<script setup lang="ts">
import { ApiEndpoint } from '~/enums/api-endpoint';

const { loggedIn } = useUserSession();
const { isAdmin } = useUserRoles();

import type { Game } from '~/types';

// Init config, store and route
const gamesStore = useGamesStore();
const route = useRoute();

const slug = route.params.slug;

// Get data from api
const { data: item, status, error } = await useAPI(ApiEndpoint.GAMES_GAME + slug);

// Save data in store
const game = computed(() => item.value as Game);

if (game.value) {
  gamesStore.setGame(game.value);
}

// Watch for changes in the game and update meta tags dynamically
watch(
  game,
  (newGame) => {
    if (newGame?.metaTitle && newGame?.metaDescription) {
      useSeoMeta({
        title: newGame.metaTitle,
        description: newGame.metaDescription,
      });
    }
  },
  { immediate: true },
);

// Function to handle external link clicks
function onLinkClick(link: string) {
  window.open(link, '_blank');
}

const gameDetails = [
  {
    key: 'recommendedAge',
    icon: 'fa6-solid:circle-user',
    label: 'Empfohlenes Alter',
  },
  {
    key: 'players',
    icon: 'fa6-solid:users',
    label: 'Spieler',
  },
  {
    key: 'playTime',
    icon: 'fa6-solid:clock',
    label: 'Dauer',
  },
  {
    key: 'difficulty',
    icon: 'fa6-solid:chess-rook',
    label: 'Komplexität',
  },
];
</script>

<template>
  <div>
    <div v-if="status === 'pending'">Lädt...</div>

    <div v-if="game">
      <p class="text-center text-primary" v-if="loggedIn && isAdmin()">
        <nuxt-link :to="{ name: 'game.edit', params: { slug } }">
          <u-icon name="fa6-solid:pen-to-square" />
          Bearbeiten
        </nuxt-link>
      </p>

      <layout-hero>
        <template #title> #{{ game.title }} </template>
        <template #subtitle v-if="game?.publisher"> von {{ game.publisher }} </template>
        <template #default v-if="game?.slogan">
          <blockquote>
            <h3 class="text-lg py-8">&#8222;{{ game.slogan }}&#8221;</h3>
          </blockquote>
        </template>
      </layout-hero>

      <div v-if="game?.img" class="flex justify-center py-8">
        <img :src="game.img" :alt="game.title" />
      </div>

      <p v-if="game?.gameDesigner" class="text-center py-4">
        Entworfen von {{ game.gameDesigner }}
      </p>

      <p v-if="game?.releaseYear" class="text-center py-4">
        Erstmals veröffentlicht im Jahr {{ game.releaseYear }}
      </p>

      <div class="content my-4" v-dompurify-html="game.intro"></div>

      <u-divider />

      <div class="grid grid-cols-4 sm:grid-cols-4 gap-2 text-center my-12">
        <template v-for="detail in gameDetails" :key="detail.key">
          <div v-if="game[detail.key]">
            <div>
              <div class="text-2xl sm:text-5xl pb-2">
                <u-icon :name="detail.icon" />
              </div>
              <p>{{ detail.label }}</p>
              <p class="text-xl sm:text-3xl font-bold">{{ game[detail.key] }}</p>
            </div>
          </div>
        </template>
      </div>

      <hr />

      <div class="content py-8">
        <div v-if="game?.description" v-dompurify-html="game.description"></div>

        <div class="text-center" v-if="game?.link">
          <u-button @click="onLinkClick(game.link)" size="lg">
            <u-icon name="fa6-brands:amazon" />
            Hier kommst du zum Brettspiel*
          </u-button>

          <p>*Affiliate Link</p>
        </div>
      </div>

      <hr />

      <p class="text-center my-4">Veröffentlicht am {{ $formatDate(game.createdAt) }}</p>
    </div>

    <div v-else>Spiel nicht verfügbar.</div>
  </div>
</template>

<style scoped>
.content {
  ::v-deep(p) {
    @apply py-4;
  }

  ::v-deep(h3) {
    @apply py-4 text-2xl font-bold;
  }

  ::v-deep(ul) {
    @apply list-disc px-8;

    li {
      @apply py-2;
    }
  }
}
</style>
