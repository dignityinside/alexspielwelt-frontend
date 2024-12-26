<script setup lang="ts">
const router = useRouter()

interface Item {
  name: string
  to: string
}

defineProps<{
  items: Item[]
}>()

async function logoutUser() {
  // TODO add logout
  router.push({ name: 'login' })
}

const isOpen = ref(false)
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

        <div class="navbar-end">
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
