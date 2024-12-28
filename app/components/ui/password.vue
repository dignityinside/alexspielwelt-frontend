<script setup lang="ts">
defineProps({
  name: {
    required: true,
    type: String,
  },
  label: {
    type: String,
    default: '',
  },
  modelValue: {
    type: String,
    default: '',
  },
  icon: {
    type: String,
    default: '',
  },
  errorMessage: {
    type: String,
    default: '',
  },
});

defineEmits(['update:modelValue']);

const isPasswordVisible = ref(false);

function togglePasswordVisibility() {
  isPasswordVisible.value = !isPasswordVisible.value;
}
</script>

<template>
  <div class="field">
    <div class="label">
      <label v-if="label" :for="name">{{ label }}</label>
    </div>
    <div class="control has-icons-left has-icons-right">
      <input
        v-bind="$attrs"
        :name="name"
        :type="isPasswordVisible ? 'text' : 'password'"
        :value="modelValue"
        :class="{ 'is-danger': errorMessage }"
        autocomplete="current-password"
        class="input"
        @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      />
      <p v-if="errorMessage" class="help is-danger">
        {{ errorMessage }}
      </p>
      <span v-if="icon" class="icon is-small is-left">
        <font-awesome-icon :icon="icon" />
      </span>
      <span class="icon is-small is-right is-clickable" @click="togglePasswordVisibility">
        <font-awesome-icon :icon="isPasswordVisible ? 'fa-eye-slash' : 'fa-eye'" />
      </span>
    </div>
  </div>
</template>
