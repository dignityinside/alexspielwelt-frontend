<script setup lang="ts">
defineProps({
  name: {
    required: false,
    type: String,
  },
  label: {
    type: String,
    default: '',
  },
  modelValue: {
    type: [String, Number],
    default: '',
  },
  min: {
    type: Number,
    default: 0,
  },
  max: {
    type: Number,
    default: 5,
  },
  step: {
    type: Number,
    default: 1,
  },
  errorMessage: {
    type: String,
    default: '',
  },
});

defineEmits(['update:modelValue']);
</script>

<template>
  <div class="field">
    <div class="label">
      <label v-if="label" :for="name">{{ label }}</label>
    </div>
    <div class="control">
      <input
        type="range"
        v-bind="$attrs"
        :min="min"
        :max="max"
        :step="step"
        :name="name"
        :value="modelValue"
        :class="{ 'is-danger': errorMessage }"
        class="slider custom-slider"
        @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      />
      <p v-if="errorMessage" class="help is-danger">
        {{ errorMessage }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.custom-slider {
  height: 30px;
  transform: scale(1.5);
}
</style>
