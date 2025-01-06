<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

defineProps({
  stars: {
    required: true,
    type: Number,
    default: 0,
  },
});
</script>

<template>
  <font-awesome-icon v-for="n in stars" :key="n" icon="fa-star" class="has-text-warning" />
</template>
