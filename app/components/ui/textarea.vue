<script setup lang="ts">
defineProps({
  name: {
    required: true,
    type: String,
  },
  rows: {
    type: Number,
    default: 2,
  },
  cols: {
    type: Number,
    default: 50,
  },
  label: {
    type: String,
    default: '',
  },
  placeholder: {
    type: String,
    default: '',
  },
  modelValue: {
    type: String,
    default: '',
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
      <textarea
        v-bind="$attrs"
        :name="name"
        :rows="rows"
        :cols="cols"
        :value="modelValue"
        :placeholder="placeholder"
        :class="{ 'is-danger': errorMessage }"
        class="textarea"
        @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      />
      <p v-if="errorMessage" class="help is-danger">
        {{ errorMessage }}
      </p>
    </div>
  </div>
</template>
