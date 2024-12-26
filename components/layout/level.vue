<script setup lang="ts">
interface Item {
  heading: string
  title: string
  icon?: string
}

const props = defineProps<{
  items: Item[]
}>()

function filteredItems() {
  return props.items.filter((item) => item.heading && item.title)
}
</script>

<template>
  <nav class="level">
    <div v-for="(item, index) in filteredItems()" :key="index" class="level-item has-text-centered">
      <div>
        <p v-if="item.icon" class="title">
          <font-awesome-icon :icon="item.icon" />
        </p>
        <p class="heading">{{ item.heading }}</p>
        <p class="title">{{ item.title }}</p>
      </div>
    </div>
  </nav>
</template>