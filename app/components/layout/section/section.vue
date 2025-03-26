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

<style scoped lang="css">
.section {
  text-align: center;
  padding-top: var(--size-16);
  padding-bottom: var(--size-16);
  color: var(--color-white);
}

@media (min-width: 640px) {
  .section {
    padding-top: var(--size-32);
    padding-bottom: var(--size-32);
  }
}

.title {
  font-size: var(--font-size-30);
  line-height: var(--size-36);
  font-weight: var(--font-bold);
  padding-bottom: var(--size-16);
}

.icons {
  font-size: var(--font-size-48);
  line-height: var(--size-48);
  font-weight: var(--font-bold);
  padding-top: var(--size-16);
  padding-bottom: var(--size-16);
}

.content {
  ::v-deep(p) {
    padding-top: var(--size-12);
    padding-bottom: var(--size-12);
  }
}
</style>
