<script setup lang="ts">
import type { Game } from '~/types';
import { GameStatus, GameStatusLabels } from '~/enums/game-status';

const { data } = await useAPI('/games/admin');
const games = computed(() => data.value as Game[]);
</script>

<template>
  <div>
    <h1 class="title has-text-centered">Admin Spieltipps</h1>
    <div class="content has-text-centered">
      <nuxt-link :to="{ name: 'game.add' }">
        <font-awesome-icon icon="fa fa-plus-circle" />
        Hinzufügen
      </nuxt-link>
    </div>
    <div v-if="games && games.length" class="table-container">
      <table class="table is-hoverable is-fullwidth">
        <thead>
          <tr>
            <th><abbr title="Id">#</abbr></th>
            <th><abbr title="Title">Titel</abbr></th>
            <th><abbr title="Status">Status</abbr></th>
            <th><abbr title="Date">Datum</abbr></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="game in games" :key="game.id">
            <th>{{ game.id }}</th>
            <td>
              <nuxt-link
                v-if="game.status === GameStatus.PUBLIC"
                :to="{ name: 'game', params: { slug: game.slug } }"
              >
                {{ game.title }}
              </nuxt-link>
              <span v-else>{{ game.title }}</span>
            </td>
            <td>{{ GameStatusLabels[game.status] }}</td>
            <td>{{ $formatDate(game.createdAt, true) }}</td>
            <td>
              <nuxt-link :to="{ name: 'game.edit', params: { slug: game.slug } }">
                Bearbeiten
              </nuxt-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-else>Keine Spieltipps gefunden.</div>
  </div>
</template>
