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
    <div
      class="fixed bottom-0 right-0 z-[1000] max-w-[500px] hidden bg-gray-100 p-5 my-4 mx-4"
      :class="{ 'is-open': isOpen }"
    >
      Ich setze Cookies ein, um dein Erlebnis auf der Website zu verbessern.
      <div class="flex justify-center gap-2 py-2">
        <div>
          <u-button @click="acceptCookies">Okay</u-button>
        </div>
        <div>
          <u-button @click="rejectCookie" color="red">Nein</u-button>
        </div>
      </div>
    </div>
  </teleport>
</template>

<style scoped>
.is-open {
  display: block;
}
</style>
