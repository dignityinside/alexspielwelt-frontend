<script setup lang="ts">
interface Item {
  heading: string | number;
  title: string | number;
  icon?: string;
}

const props = defineProps<{
  items: Item[];
}>();

function filteredItems() {
  return props.items.filter((item) => item.heading && item.title);
}
</script>

<template>
  <div class="grid grid-col-2 sm:grid-cols-4 gap-6 text-center text-white">
    <div v-for="(item, index) in filteredItems()" :key="index">
      <p v-if="item.icon" class="text-5xl text-black">
        <u-icon :name="item.icon" />
      </p>
      <p class="text-lg text-black">{{ item.heading }}</p>
      <p class="text-2xl font-bold">{{ item.title }}</p>
    </div>
  </div>
</template>
