<script setup lang="ts">
defineProps({
  type: {
    type: String,
    default: 'submit',
    validator: (value: string) => ['button', 'submit', 'reset'].includes(value),
  },
  text: {
    type: String,
  },
  iconLeft: {
    type: String,
    default: '',
  },
  iconRight: {
    type: String,
    default: '',
  },
  layout: {
    type: String,
    default: 'is-warning',
  },
})

defineEmits(['click'])
</script>

<template>
  <button :type="type" class="button" :class="layout" @click="$emit('click')">
    <span v-if="iconLeft" class="icon">
      <font-awesome-icon :icon="iconLeft" />
    </span>

    <span v-if="text">{{ text }}</span>

    <slot />

    <span v-if="iconRight" class="icon">
      <font-awesome-icon :icon="iconRight" />
    </span>
  </button>
</template>
