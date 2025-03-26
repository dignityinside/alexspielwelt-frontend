<script setup lang="ts">
import type { LevelItemType } from '~/components/layout/level/level.types';

const props = defineProps<{
  items: LevelItemType[];
}>();

function filteredItems() {
  return props.items.filter((item) => item.heading && item.title);
}
</script>

<template>
  <div class="level">
    <div v-for="(item, index) in filteredItems()" :key="index">
      <p v-if="item.icon" class="level__text">
        <u-icon :name="item.icon" />
      </p>
      <p class="level__heading">
        {{ item.heading }}
      </p>
      <p class="level__title">
        {{ item.title }}
      </p>
    </div>
  </div>
</template>

<style scoped lang="css">
.level {
  display: none;
}

@media (min-width: 640px) {
  .level {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: var(--size-24);
    text-align: center;
    color: var(--color-white);
    padding-top: var(--size-64);
    padding-bottom: var(--size-64);
  }
}

.level__text {
  font-size: var(--font-size-48);
  line-height: var(--size-48);
  color: var(--color-aqua);
}

.level__heading {
  font-size: var(--font-size-18);
  line-height: var(--size-28);
}

.level__title {
  font-size: var(--font-size-24);
  line-height: var(--size-32);
  font-weight: var(--font-bold);
}
</style>
