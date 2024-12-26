<script setup lang="ts">
defineProps<{
  items: [];
}>()
</script>

<template>
    <section class="logo">
      <div class="container hero hero-body is-large has-text-centered">
        <nuxt-link to="/">
          <p class="title">Alex Spielwelt</p>
        </nuxt-link>
        <p class="subtitle">@alexspielwelt</p>
        <layout-level :items="items" />
      </div>
    </section>
</template>

<style scoped>
.logo {
  background: linear-gradient(90deg, #ACCDD2 35%, #C0DCDF 50%, #BCD8DB 100%);
}
</style>
