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
    <div v-if="loggedIn" class="profile">
      <h1 class="profile__name">Hallo, {{ user.name }}!</h1>
      <div class="profile__text">
        {{ $formatDate(session.loggedInAt.toString()) }}
      </div>
      <u-button type="button" icon="material-symbols:lock" @click="onLogoutUser"> Logout </u-button>
    </div>
  </u-container>
</template>

<style lang="css" scoped>
.profile {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--color-white);
  padding: var(--size-32);
  text-align: center;
}

.profile__name {
  font-size: var(--font-size-20);
  line-height: var(--size-28);
  text-align: center;
  font-weight: var(--font-bold);
  padding-bottom: var(--size-32);
}

.profile__text {
  padding-bottom: var(--size-32);
}
</style>
