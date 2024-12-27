<script setup lang="ts">
const props = defineProps({
  message: {
    type: String,
  },
  layout: {
    type: String,
    default: 'danger',
  },
});

const classes = computed(() => [
  {
    'is-danger': props.layout === 'danger',
    'is-warning': props.layout === 'warning',
    'is-success': props.layout === 'success',
  },
]);
</script>

<template>
  <div v-if="message" class="notification is-light" :class="classes">
    {{ message }}
  </div>
</template>
