<template>
  <div class="content">
    <slot name="title"></slot>

    <div class="content">
      <slot />
    </div>
  </div>
</template>

<style scoped lang="css">
.content {
  background: var(--color-white);
  padding: var(--size-12);
  word-break: break-word;
}

::v-deep(h1) {
  padding-top: var(--size-12);
  padding-bottom: var(--size-12);
  font-size: var(--font-size-20);
  line-height: var(--size-28);
  font-weight: var(--font-bold);
}

::v-deep(h3) {
  padding-top: var(--size-12);
  padding-bottom: var(--size-12);
  font-size: var(--font-size-18);
  line-height: var(--size-28);
}

.content {
  ::v-deep(p) {
    padding-top: var(--size-12);
    padding-bottom: var(--size-12);
  }

  ::v-deep(ul) {
    list-style-type: disc;
    padding-left: var(--size-32);
    padding-right: var(--size-32);

    li {
      padding-top: var(--size-8);
      padding-bottom: var(--size-8);
    }
  }
}
</style>
