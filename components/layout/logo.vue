<script setup lang="ts">
defineProps<{
  items: [];
}>();

const runtimeConfig = useRuntimeConfig();
</script>

<template>
  <section class="logo">
    <div class="container hero hero-body is-large has-text-centered">
      <nuxt-link to="/">
        <p class="title">{{ runtimeConfig.public.name }}</p>
      </nuxt-link>
      <p class="subtitle">{{ runtimeConfig.public.slogan }}</p>
      <layout-level :items="items" />
    </div>
  </section>
</template>

<style scoped>
.logo {
  background: linear-gradient(90deg, #accdd2 35%, #c0dcdf 50%, #bcd8db 100%);
}
</style>
