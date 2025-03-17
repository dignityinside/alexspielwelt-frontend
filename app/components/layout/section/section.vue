<template>
  <section class="section">
    <h3 class="title">
      <slot name="title" />
    </h3>
    <div class="icons">
      <slot name="icons" />
    </div>
    <div class="content">
      <slot />
    </div>
  </section>
</template>

<style scoped>
.section {
  @apply text-center py-8;
}

.title {
  @apply text-3xl font-bold pb-4;
}

.icons {
  @apply text-5xl text-gray-500 font-bold py-4;
}

.content {
  ::v-deep(p) {
    @apply py-3;
  }
}
</style>
