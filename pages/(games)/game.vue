<script setup lang="ts">
definePageMeta({
  name: 'game',
  path: '/spieltipps/:slug',
});

import { useFetch } from '#app';
import { useGamesStore } from '~/store/useGamesStore';

const runtimeConfig = useRuntimeConfig();
const gamesStore = useGamesStore();
const route = useRoute();

const slug = route.params.slug;

// Get data from api

const {
  data: item,
  status,
  error,
} = useFetch(`/games/${slug}`, {
  baseURL: runtimeConfig.public.baseURL,
});

// Save data in store

const { setGame } = useGamesStore();
setGame(item);

const game = computed(() => {
  return gamesStore.game;
});

// Set meta title & description

onMounted(() => {
  if (game && game.value?.metaTitle && game.value?.metaDescription) {
    useSeoMeta({
      title: game.value.metaTitle,
      description: game.value.metaDescription,
    });
  }
});

function onLinkClick(link: string) {
  window.open(link, '_blank');
}
</script>

<template>
  <div>
    <div v-if="status === 'pending'">Lädt...</div>

    <div v-if="status === 'error'">Fehler beim Laden: {{ error.message }}</div>

    <div v-if="status === 'success' && item">
      <div>
        <section class="section is-small has-text-centered">
          <h1 v-if="game?.title" class="title">#{{ game.title }}</h1>

          <h2 v-if="game?.publisher" class="subtitle">von {{ game.publisher }}</h2>
        </section>

        <section v-if="game?.slogan" class="section is-small has-text-centered">
          <blockquote class="quote">
            <h3 class="subtitle">&#8222;{{ game.slogan }}&#8221;</h3>
          </blockquote>
        </section>

        <div v-if="game?.img" class="columns is-centered is-vcentered">
          <div class="column is-narrow">
            <img :src="game.img" :alt="game.title" class="image img" />
          </div>
        </div>

        <div class="content has-text-centered">
          <p v-if="game?.gameDesigner">Entworfen von {{ game.gameDesigner }}</p>

          <p v-if="game?.releaseYear">Erstmals veröffentlicht im Jahr {{ game.releaseYear }}</p>
        </div>

        <hr />

        <nav class="level">
          <div v-if="game?.recommendedAge" class="level-item has-text-centered">
            <div>
              <p class="title">
                <font-awesome-icon icon="fa-circle-user" />
              </p>
              <p class="heading">Empfohlenes Alter</p>
              <p class="title">{{ game.recommendedAge }}</p>
            </div>
          </div>
          <div v-if="game?.players" class="level-item has-text-centered">
            <div>
              <p class="title">
                <font-awesome-icon icon="fa fa-users" />
              </p>
              <p class="heading">Spieler</p>
              <p class="title">{{ game.players }}</p>
            </div>
          </div>
          <div v-if="game?.playTime" class="level-item has-text-centered">
            <div>
              <p class="title">
                <font-awesome-icon icon="fa fa-clock" />
              </p>
              <p class="heading">Dauer</p>
              <p class="title">{{ game.playTime }}</p>
            </div>
          </div>
          <div v-if="game?.difficulty" class="level-item has-text-centered">
            <div>
              <p class="title">
                <font-awesome-icon icon="fa-chess-rook" />
              </p>
              <p class="heading">Komplexität</p>
              <p class="title">{{ game.difficulty }}</p>
            </div>
          </div>
        </nav>

        <hr />

        <div class="content">
          <div class="mx-4" v-if="game?.description" v-dompurify-html="game.description"></div>

          <div v-if="game?.link" class="has-text-centered">
            <ui-button
              text="Hier kommst du zum Brettspiel*"
              iconLeft="fa-brands fa-amazon"
              @click="onLinkClick(game.link)"
            />

            <p class="content mt-2">*Affiliate Link</p>
          </div>
        </div>

        <hr />

        <p class="content has-text-centered mt-2">
          Veröffentlicht am {{ $formatDate(game.createdAt) }}
        </p>
      </div>
    </div>

    <p v-if="status === 'success' && (!item || item.length === 0)">Keine Posts verfügbar.</p>
  </div>
</template>
