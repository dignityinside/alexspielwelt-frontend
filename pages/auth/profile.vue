<script setup lang="ts">
// Init user session
const { loggedIn, user: userData, session } = useUserSession();

definePageMeta({
  name: 'profile',
  path: '/profile',
  middleware: ['authenticated'],
});

useSeoMeta({
  title: 'Profil',
});

interface User {
  id: number;
  name: string;
  token: string;
}

const user = computed(() => {
  return userData.value as User;
});

// Logout user
const { logoutUser } = useLogoutUser();
const onLogoutUser = () => logoutUser();
</script>

<template>
  <div>
    <section v-if="loggedIn" class="section is-medium has-text-centered">
      <h1 class="title">Hallo, {{ user.name }}!</h1>
      <p class="content">{{ $formatDate(session.loggedInAt.toString()) }}</p>
      <ui-button type="button" text="Logout" @click="onLogoutUser" />
    </section>
  </div>
</template>
