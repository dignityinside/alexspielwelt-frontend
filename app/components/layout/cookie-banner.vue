<script setup lang="ts">
const { $storage } = useNuxtApp()

const isOpen = ref(false)

const updateCookies = (value: string) => {
  if (import.meta.client) {
    $storage.setItem('cookies-accepted', value);
  }
  isOpen.value = false;
};

const acceptCookies = () => updateCookies('true');
const rejectCookie = () => updateCookies('false');

onMounted(() => {
  if (import.meta.client && !$storage.getItem('cookies-accepted')) {
    isOpen.value = true;
  }
});
</script>

<template>
  <teleport to="body">
    <div class="cookie-banner notification" :class="{ 'is-open': isOpen }">
      <button class="delete" @click="rejectCookie"></button>
      Ich setze Cookies ein, um dein Erlebnis auf der Website zu verbessern. Mehr dazu in
      <nuxt-link :to="{ name: 'privacy' }">Datenschutzerklärung</nuxt-link>
      <div class="buttons">
        <button @click="acceptCookies" class="button is-success">Okay</button>
        <button @click="rejectCookie" class="button is-danger">Nein</button>
      </div>
    </div>
  </teleport>
</template>

<style scoped>
.cookie-banner {
  position: fixed;
  bottom: 0;
  right: 0;
  text-align: center;
  z-index: 1000;
  margin: 20px;
  max-width: 500px;
  display: none;

  a {
    color: white;
    text-decoration: underline;
  }
}

.is-open {
  display: block;
}

.buttons {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}
</style>
