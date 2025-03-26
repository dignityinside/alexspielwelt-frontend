<script setup>
const slots = useSlots();
</script>

<template>
  <section>
    <div class="hero">
      <h1 class="hero__title">
        <slot name="title" />
      </h1>
      <h2 class="hero__subtitle">
        <slot name="subtitle" />
      </h2>
      <div v-if="slots.default" class="hero__slot">
        <slot />
      </div>
    </div>
  </section>
</template>

<style scoped lang="css">
.hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: var(--size-32);
  margin-top: var(--size-24);
  margin-bottom: var(--size-24);
  border-top: 2px solid var(--color-white);
  border-bottom: 2px solid var(--color-white);
  border-radius: 10px;
}

@media (min-width: 640px) {
  .hero {
    margin-top: var(--size-48);
    margin-bottom: var(--size-48);
    padding: var(--size-96);
  }
}

.hero__title {
  font-size: var(--font-size-30);
  line-height: var(--size-36);
  font-weight: var(--font-bold);
  color: var(--color-white);
  padding-bottom: var(--size-8);
}

.hero__subtitle {
  font-size: var(--font-size-20);
  line-height: var(--size-28);
  text-align: center;
  color: var(--color-white);
  padding-bottom: var(--size-16);
}

.hero__slot {
  padding-top: var(--size-16);
  padding-bottom: var(--size-16);
}
</style>
