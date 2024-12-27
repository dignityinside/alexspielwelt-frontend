<script setup lang="ts">
definePageMeta({
  name: 'profile',
  path: '/profile',
  middleware: ['authenticated'],
});

useSeoMeta({
  title: 'Profil',
});
</script>

<template>
  <div>Profile</div>
</template>
