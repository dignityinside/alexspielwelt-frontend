<template>
  <div>
    <slot name="title"></slot>

    <div class="content">
      <slot />
    </div>
  </div>
</template>

<style scoped>
::v-deep(h1) {
  @apply py-3 text-xl font-bold;
}

::v-deep(h3) {
  @apply py-3 text-lg;
}

.content {
  ::v-deep(p) {
    @apply py-3;
  }

  ::v-deep(ul) {
    @apply list-disc px-8;

    li {
      @apply py-2;
    }
  }
}
</style>
