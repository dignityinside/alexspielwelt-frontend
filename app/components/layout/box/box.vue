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

<style scoped lang="css">
.box {
  background: var(--color-deep-purple);
  color: var(--color-white);
  font-size: var(--font-size-20);
  line-height: var(--size-28);
  margin-top: var(--size-16);
  margin-bottom: var(--size-16);
  padding: var(--size-32);
  border: 2px solid var(--color-hot-pink);
}

@media (min-width: 640px) {
  .box {
    padding: var(--size-96);
    margin-top: var(--size-32);
    margin-bottom: var(--size-32);
  }
}

.title {
  font-size: var(--font-size-30);
  line-height: var(--size-36);
  font-weight: var(--font-bold);
}

.content {
  padding: var(--size-16) 0;

  ::v-deep(p) {
    padding: var(--size-12) 0;
  }
}
</style>
