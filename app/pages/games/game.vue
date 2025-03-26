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

    <div v-if="game" class="game">
      <div v-if="loggedIn && isAdmin()" class="game__edit">
        <nuxt-link :to="{ name: 'game.edit', params: { slug } }">
          <u-icon name="fa6-solid:pen-to-square" />
          Bearbeiten
        </nuxt-link>
      </div>

      <section>
        <div class="hero">
          <h1 class="hero__title">#{{ game.title }}</h1>
          <h2 v-if="game?.publisher" class="hero__subtitle">von {{ game.publisher }}</h2>
          <blockquote v-if="game?.slogan">
            <h3 class="blockquote">&#8222;{{ game.slogan }}&#8221;</h3>
          </blockquote>
        </div>
      </section>

      <div v-if="game?.img" class="game__image">
        <img :src="game.img" :alt="game.title" />
      </div>

      <div v-if="game?.gameDesigner" class="game__text">Entworfen von {{ game.gameDesigner }}</div>

      <div v-if="game?.releaseYear" class="game__text">
        Erstmals veröffentlicht im Jahr {{ game.releaseYear }}
      </div>

      <div class="game__content" v-dompurify-html="game.intro"></div>

      <u-divider />

      <div class="game__details">
        <template v-for="detail in gameDetails" :key="detail.key">
          <div v-if="game[detail.key]">
            <div>
              <div class="game__detail_icon">
                <u-icon :name="detail.icon" />
              </div>
              <div>{{ detail.label }}</div>
              <div class="game__detail_text">
                {{ game[detail.key] }}
              </div>
            </div>
          </div>
        </template>
      </div>

      <hr />

      <div class="game__content">
        <div v-if="game?.description" v-dompurify-html="game.description"></div>

        <div v-if="game?.link" class="game__link">
          <div @click="onLinkClick(game.link)" class="game__buy-button">
            <u-icon name="fa6-brands:amazon" />
            Hier kommst du zum Brettspiel*
          </div>

          <div>*Affiliate Link</div>
        </div>
      </div>

      <hr />

      <div class="game__created">Veröffentlicht am {{ $formatDate(game.createdAt) }}</div>
    </div>

    <div v-else class="game__error-text">Spiel nicht verfügbar.</div>
  </div>
</template>

<style lang="css" scoped>
.game {
  background: var(--color-white);
  padding: var(--size-32);
}

.game__edit {
  text-align: center;
  color: var(--color-deep-purple);
}

.game__image {
  display: flex;
  justify-content: center;
  padding-top: var(--size-32);
  padding-bottom: var(--size-32);
}

.game__text {
  text-align: center;
  padding-top: var(--size-16);
  padding-bottom: var(--size-16);
}

.game__details {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: var(--size-32);
  text-align: center;
  margin-top: var(--size-48);
  margin-bottom: var(--size-48);
}

@media (min-width: 640px) {
  .game__details {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: var(--size-8);
  }
}

.game__detail_icon {
  font-size: var(--font-size-48);
  padding-bottom: var(--size-8);
  color: var(--color-deep-indigo);
}

.game__detail_text {
  font-size: var(--font-size-20);
  line-height: var(--size-28);
  font-weight: var(--font-bold);
}

.blockquote {
  font-size: var(--font-size-18);
  line-height: var(--size-28);
  padding-top: var(--size-32);
  padding-bottom: var(--size-32);
}

.game__content {
  padding-top: var(--size-32);
  padding-bottom: var(--size-32);

  ::v-deep(p) {
    padding-top: var(--size-16);
    padding-bottom: var(--size-16);
  }

  ::v-deep(h3) {
    padding-top: var(--size-16);
    padding-bottom: var(--size-16);
    font-size: var(--font-size-24);
    line-height: var(--size-32);
    font-weight: var(--font-bold);
    color: var(--color-deep-indigo);
  }

  ::v-deep(ul) {
    list-style-type: disc;
    padding-left: var(--size-32);
    padding-right: var(--size-32);

    li {
      padding-top: var(--size-8);
      padding-bottom: var(--size-8);
    }
  }
}

.game__link {
  margin-top: var(--size-48);
  margin-bottom: var(--size-48);
  text-align: center;
}

.game__buy-button {
  margin: 0 auto;
  width: max-content;
  background: var(--color-deep-indigo);
  color: var(--color-white);
  border-radius: 10px;
  border: solid 2px var(--color-deep-indigo);
  padding: var(--size-8) var(--size-32);
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    color: var(--color-deep-indigo);
    border: solid 2px var(--color-deep-indigo);
    background: none;
  }
}

.game__created {
  text-align: center;
  margin-top: var(--size-16);
  margin-bottom: var(--size-16);
}

.game__error-text {
  text-align: center;
  color: var(--color-white);
}

@media (min-width: 640px) {
  .hero {
    margin-top: var(--size-48);
    margin-bottom: var(--size-48);
    padding: var(--size-96);
  }
}

.hero {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.hero__title {
  font-size: var(--font-size-30);
  line-height: var(--size-36);
  font-weight: var(--font-bold);
  padding-bottom: var(--size-8);
  color: var(--color-deep-indigo);
}

.hero__subtitle {
  font-size: var(--font-size-20);
  line-height: var(--size-28);
  text-align: center;
  padding-bottom: var(--size-16);
}
</style>
