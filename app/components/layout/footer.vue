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
  },
]);

const runtimeConfig = useRuntimeConfig();
</script>

<template>
  <footer class="bg-gray-50 p-16 text-center text-gray-600">
    <div>
      <p class="py-4">© 2024 {{ runtimeConfig.public.name }}</p>

      <span>Folge mir gerne auf </span>
      <span> <u-icon name="simple-icons:instagram" /> Instagram </span>
      <span class="pr-1">oder</span>
      <span> <u-icon name="simple-icons:threads" /> Threads </span>
      <span>{{ runtimeConfig.public.instagram }} – ich freue mich auf dich!</span>

      <div class="py-4">
        <span v-for="(link, index) in links" :key="'footer-link' + index">
          <nuxt-link :to="link.to" class="hover:text-gray-400 hover:underline">{{
            link.name
          }}</nuxt-link>
          <span v-if="index < links.length - 1"> | </span>
        </span>
      </div>
    </div>
  </footer>
</template>
