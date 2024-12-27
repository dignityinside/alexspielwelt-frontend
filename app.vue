<script setup lang="ts">
const usersStore = useUsersStore();
const { $storage } = useNuxtApp();

// When token exists in LocalStorage, login user
if ($storage && $storage.getItem('token')) {
  usersStore.setToken($storage.getItem('token'));
}
</script>

<template>
  <div>
    <layout-header />
    <main class="container mt-5 mb-5">
      <NuxtPage />
    </main>
    <layout-footer />
    <layout-cookie-banner />
  </div>
</template>
