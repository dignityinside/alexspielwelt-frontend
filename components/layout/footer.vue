<script setup lang="ts">
const links = ref([
  {
    name: 'Startseite',
    to: { name: 'home' },
  },
  {
    name: 'Über mich',
    to: { name: 'about' },
  },
  {
    name: 'Impressum',
    to: { name: 'imprint' },
  },
  {
    name: 'Datenschutz',
    to: { name: 'privacy' },
  }
]);
</script>

<template>
  <footer class="footer">
    <div class="has-text-centered">
      <p class="content">© 2024 Alex Spielwelt</p>
      <span>Folge mir gerne auf </span>
      <span class="mr-2">
        <font-awesome-icon icon="fa-brands fa-instagram" /> Instagram
      </span>
      <span class="mr-1">oder</span>
      <span class="mr-1">
        <font-awesome-icon icon="fa-brands fa-threads" /> Threads
      </span>
      <span>@alexspielwelt – ich freue mich auf dich!</span>
      <p class="content">
        <span v-for="(link, index) in links" :key="'footer-link' + index">
          <nuxt-link :to="link.to">{{ link.name }}</nuxt-link>
          <span v-if="index < links.length - 1"> | </span>
        </span>
      </p>
    </div>
  </footer>
</template>
