<script setup lang="ts">
defineProps({
  name: {
    required: true,
    type: String,
  },
  type: {
    type: String,
    default: 'text',
    validator: (value: string) => ['text', 'password', 'email', 'color', 'hidden'].includes(value),
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
    type: [String, Number],
    default: '',
  },
  autocomplete: {
    type: String,
    default: 'off',
    validator: (value: string) =>
      ['off', 'email', 'new-password', 'current-password', 'username'].includes(value),
  },
  iconLeft: {
    type: String,
    default: '',
  },
  iconRight: {
    type: String,
    default: '',
  },
  clearIcon: {
    type: Boolean,
    default: false,
  },
  errorMessage: {
    type: String,
    default: '',
  },
});

defineEmits(['update:modelValue', 'clear']);
</script>

<template>
  <div class="field">
    <div class="label">
      <label v-if="label" :for="name">{{ label }}</label>
    </div>
    <div class="control" :class="{ 'has-icons-left': iconLeft, 'has-icons-right': iconRight }">
      <input
        v-bind="$attrs"
        :name="name"
        :type="type"
        :value="modelValue"
        :placeholder="placeholder"
        :autocomplete="autocomplete"
        :class="{ 'is-danger': errorMessage }"
        class="input"
        @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      />
      <p v-if="errorMessage" class="help is-danger">
        {{ errorMessage }}
      </p>
      <span v-if="iconLeft" class="icon is-small is-left">
        <font-awesome-icon :icon="iconLeft" />
      </span>
      <span v-if="iconRight" class="icon is-small is-right">
        <font-awesome-icon :icon="iconRight" />
      </span>
      <span
        v-if="!iconRight && clearIcon"
        class="icon is-small is-right is-clickable"
        @click="$emit('clear')"
      >
        <font-awesome-icon icon="fa-times" />
      </span>
    </div>
  </div>
</template>
