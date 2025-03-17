<script setup lang="ts">
defineProps({
  stars: {
    required: true,
    type: Number,
    default: 0,
  },
});
</script>

<template>
  <u-icon v-if="stars" v-for="n in stars" :key="n" name="fa6-solid:star" class="text-yellow-400" />
</template>
