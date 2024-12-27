<script setup lang="ts">
import { useFetch } from '#app';
import type { Game } from '~/types';

// Init config, store
const runtimeConfig = useRuntimeConfig();
const usersStore = useUsersStore();

definePageMeta({
  name: 'profile',
  path: '/profile',
  middleware: ['authenticated'],
});

useSeoMeta({
  title: 'Profil',
});

// Logout user
const { logoutUser } = useLogoutUser();
const onLogoutUser = () => logoutUser();

const user = computed(() => usersStore.getUser);
</script>

<template>
  <div>
    <section class="section is-medium has-text-centered">
      <h1 class="title">Hallo, {{ user.name }}!</h1>
      <ui-button type="button" text="Logout" @click="onLogoutUser" />
    </section>
  </div>
</template>
