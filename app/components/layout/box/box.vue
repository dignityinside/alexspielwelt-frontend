<template>
  <section class="box">
    <div class="title">
      <slot name="title" />
    </div>
    <div class="content">
      <slot />
    </div>
  </section>
</template>

<style scoped>
.box {
  @apply my-8 py-24 px-12 bg-gray-100;
}

.title {
  @apply text-3xl font-bold;
}

.content {
  @apply py-4;

  ::v-deep(p) {
    @apply py-3;
  }
}
</style>
