<script setup lang="ts">
// Init user session
const { loggedIn, user: userData, session } = useUserSession();

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
  <u-container>
    <div class="grid place-items-center">
      <u-card v-if="loggedIn" class="prose">
        <h1>Hallo, {{ user.name }}!</h1>
        <p>{{ $formatDate(session.loggedInAt.toString()) }}</p>
        <u-button type="button" icon="material-symbols:lock" @click="onLogoutUser">Logout</u-button>
      </u-card>
    </div>
  </u-container>
</template>
