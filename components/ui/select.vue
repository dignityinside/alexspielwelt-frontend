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
  options: Array<{ id: string | number; name: string }>,
  modelValue: {
    type: [String, Number],
    default: '',
  },
  iconLeft: {
    type: String,
    default: '',
  },
  iconRight: {
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
    <div class="control" :class="{ 'has-icons-left': iconLeft, 'has-icons-right': iconRight }">
      <div class="select">
        <select
          v-bind="$attrs"
          :name="name"
          :value="modelValue"
          :class="{ 'is-danger': errorMessage }"
          @change="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
        >
          <option v-for="(option, index) in options" :key="`option-${index}`" :value="option.id">
            {{ option.name }}
          </option>
        </select>
      </div>
      <p v-if="errorMessage" class="help is-danger">
        {{ errorMessage }}
      </p>
      <span v-if="iconLeft" class="icon is-small is-left">
        <font-awesome-icon :icon="iconLeft" />
      </span>
      <span v-if="iconRight" class="icon is-small is-right">
        <font-awesome-icon :icon="iconRight" />
      </span>
    </div>
  </div>
</template>
