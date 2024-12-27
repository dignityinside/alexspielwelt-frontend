<script setup lang="ts">
const router = useRouter();
const usersStore = useUsersStore();

interface Item {
  name: string;
  to: { name: string };
}

defineProps<{
  items: Item[];
}>();

// Logout user
async function logoutUser() {
  const { $storage } = useNuxtApp();

  // Delete user and token from LocalStorage
  if ($storage) {
    $storage.removeItem('user');
    $storage.removeItem('token');
  }

  // Unset user and token in Store
  await usersStore.logoutUser();

  // Redirect user to login page
  await router.push({ name: 'login' });
}

// Initial value for navigation (relevant only mobile)
const isOpen = ref(false);
</script>

<template>
  <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <a
          role="button"
          class="navbar-burger"
          aria-label="menu"
          data-target="burgerNavigation"
          :aria-expanded="false"
          @click="isOpen = !isOpen"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="burgerNavigation" class="navbar-menu" :class="{ 'is-active': isOpen }">
        <div class="navbar-start">
          <template v-for="item in items" :key="item.name">
            <nuxt-link :to="item.to" active-class="is-active" class="navbar-item">
              <span>{{ item.name }}</span>
            </nuxt-link>
          </template>
        </div>

        <div v-if="usersStore.isLoggedIn" class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <nuxt-link :to="{ name: 'profile' }" class="navbar-item">
                <span>Profile</span>
              </nuxt-link>
              <a class="navbar-item" @click="logoutUser()">
                <span>Logout</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
