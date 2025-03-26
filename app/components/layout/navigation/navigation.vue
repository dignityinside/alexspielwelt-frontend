<script setup lang="ts">
const { loggedIn } = useUserSession();
const { isAdmin } = useUserRoles();
import { useRouter } from 'vue-router';

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
const router = useRouter();

function goTo(name: { name: string }) {
  router.push(name);

  isOpen.value = false;
}
</script>

<template>
  <button class="navigation__button" @click="isOpen = !isOpen" aria-label="Menu">
    <u-icon name="fa6-solid:bars" />
  </button>

  <nav class="navigation" :class="{ 'navigation--hidden': !isOpen }">
    <ul>
      <li v-for="(item, index) in filteredItems" :key="index">
        <a @click.prevent="goTo(item.to)">{{ item.label }}</a>
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="css">
.navigation {
  margin-bottom: var(--size-24);
}

.navigation ul {
  display: flex;
  flex-direction: column;
  justify-content: center;
  list-style: none;
  gap: 10px;
}

.navigation__button {
  border-radius: var(--size-4);
  color: var(--color-aqua);
  border: solid 2px var(--color-aqua);
  margin-bottom: var(--size-16);
  width: 100%;
  padding: var(--size-16);
}

.navigation--hidden {
  display: none;
}

@media (min-width: 640px) {
  .navigation ul {
    flex-direction: row;
  }

  .navigation__button {
    display: none;
  }

  .navigation--hidden {
    display: flex;
    justify-content: center;
  }
}

.navigation ul li {
  background: var(--color-deep-purple);
  color: var(--color-white);
  cursor: pointer;
}

@media (min-width: 640px) {
  .navigation ul li {
    position: relative;
    animation: glitchAquaHotPinkBg 5s infinite alternate;
    transform: skew(-25deg);
  }
}

.navigation ul li a {
  display: block;
  padding: var(--size-16) var(--size-32);
  text-decoration: none;
  font-size: var(--font-size-18);
  font-weight: var(--font-bold);
  text-transform: uppercase;
  text-align: center;
}

@media (min-width: 640px) {
  .navigation ul li a {
    transform: skew(25deg);
    transition: 0.3s;
  }
}
</style>
