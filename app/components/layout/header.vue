<script setup lang="ts">
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
])

const logoLevelItems = ref([
  {
    heading: 'Brettspiele in Besitz',
    title: '15+',
  },
  {
    heading: 'Erweiterungen in Besitz',
    title: '1+',
  },
  {
    heading: 'Gespielte Stunden',
    title: '500+',
  },
  {
    heading: 'Rezensionen',
    // TODO add results from games count store
    title: 0 // gamesCount,
  },
])
</script>

<template>
  <header>
    <layout-logo :items="logoLevelItems" />
    <layout-navigation :items="navigationItems" />
  </header>
</template>