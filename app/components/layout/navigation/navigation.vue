<script setup lang="ts">
const { loggedIn } = useUserSession();
const { isAdmin } = useUserRoles();

const items = [
  {
    label: 'Startseite',
    icon: 'i-heroicons-home',
    to: { name: 'home' },
  },
  {
    label: 'Über mich',
    icon: 'material-symbols:account-circle',
    to: { name: 'about' },
  },
  {
    label: 'Spieltipps',
    icon: 'material-symbols:tips-and-updates',
    to: { name: 'games' },
  },
  {
    label: 'Admin-Spieltipps',
    icon: 'material-symbols:edit-square-outline',
    to: { name: 'games.admin' },
    auth: true,
    admin: true,
  },
  {
    label: 'Profil',
    icon: 'material-symbols:settings-account-box-outline-rounded',
    to: { name: 'profile' },
    auth: true,
  },
];

const filteredItems = computed(() =>
  items.filter((item) => {
    if (item.auth && !loggedIn.value) {
      return false;
    }

    return !(item.admin && !isAdmin());
  }),
);

const isOpen = ref(false);
</script>

<template>
  <u-horizontal-navigation class="hidden sm:flex" :links="filteredItems" :space="4" />

  <div class="sm:hidden">
    <button class="p-4 bg-gray-100 rounded" @click="isOpen = !isOpen" aria-label="Menu">
      <u-icon name="fa6-solid:bars"></u-icon>
    </button>
    <span v-show="isOpen">
      <u-vertical-navigation :links="filteredItems" class="py-4" />
    </span>
  </div>
</template>
