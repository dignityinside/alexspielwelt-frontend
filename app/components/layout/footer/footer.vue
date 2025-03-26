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
  <footer class="footer">
    <div>
      <div class="item">© 2024 {{ runtimeConfig.public.name }}</div>

      <span>Folge mir gerne auf </span>
      <span> <u-icon name="simple-icons:instagram" /> Instagram </span>
      <span class="pr-1">oder</span>
      <span> <u-icon name="simple-icons:threads" /> Threads </span>
      <span>{{ runtimeConfig.public.instagram }} – ich freue mich auf dich!</span>

      <div class="item">
        <span v-for="(link, index) in links" :key="'footer-link' + index">
          <nuxt-link :to="link.to" class="link">
            {{ link.name }}
          </nuxt-link>
          <span v-if="index < links.length - 1"> | </span>
        </span>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="css">
.footer {
  padding: var(--size-64);
  text-align: center;
  color: var(--color-white);
}

.item {
  padding-top: var(--size-16);
  padding-bottom: var(--size-16);
}

.link {
  text-decoration-line: underline;

  &:hover {
    text-decoration-line: none;
  }
}
</style>
