<script setup lang="ts">
const { $storage } = useNuxtApp();

const isOpen = ref(false);

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
    <div class="cookie-banner" :class="{ 'is-open': isOpen }">
      Ich setze Cookies ein, um dein Erlebnis auf der Website zu verbessern.
      <div class="cookie-banner__buttons">
        <div>
          <u-button @click="acceptCookies">Ok</u-button>
        </div>
        <div>
          <u-button @click="rejectCookie" color="red">Nein</u-button>
        </div>
      </div>
    </div>
  </teleport>
</template>

<style scoped lang="css">
.cookie-banner {
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 1000;
  max-width: 500px;
  display: none;
  background: var(--color-white);
  padding: var(--size-20);
  margin: var(--size-16);
}

.cookie-banner__buttons {
  display: flex;
  justify-content: center;
  gap: var(--size-8);
  padding-top: var(--size-8);
  padding-bottom: var(--size-8);
}

.is-open {
  display: block;
}
</style>
