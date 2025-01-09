<script setup lang="ts">
import { ApiEndpoint } from '~/enums/api-endpoint';

const { data } = await useAPI(ApiEndpoint.STATS);

interface stats {
  own: number;
  addons: number;
  hours: number;
  games: number;
}

const stats = data.value as stats;

const navigationItems = ref([
  {
    name: 'Startseite',
    to: { name: 'home' },
  },
  {
    name: 'Über mich',
    to: { name: 'about' },
  },
  {
    name: 'Spieltipps',
    to: { name: 'games' },
  },
]);

const logoLevelItems = ref([
  {
    heading: 'Brettspiele in Besitz',
    title: stats.own ? stats.own + '+' : 0,
  },
  {
    heading: 'Erweiterungen in Besitz',
    title: stats.addons ? stats.addons + '+' : 0,
  },
  {
    heading: 'Gespielte Stunden',
    title: stats.hours ? stats.hours + '+' : 0,
  },
  {
    heading: 'Rezensionen',
    title: stats.games ?? 0,
  },
]);
</script>

<template>
  <header>
    <layout-logo :items="logoLevelItems" />
    <layout-navigation :items="navigationItems" />
  </header>
</template>
