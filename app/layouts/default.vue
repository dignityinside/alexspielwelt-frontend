<template>
  <div>
    <header>
      <layout-logo />
      <u-container>
        <layout-navigation />
      </u-container>
    </header>
    <main class="main">
      <u-container>
        <slot />
      </u-container>
    </main>
    <layout-footer />
    <layout-cookie-banner />
  </div>
</template>

<style scoped lang="css">
@media (min-width: 640px) {
  .main {
    padding: var(--size-32) var(--size-16);
  }
}

.main {
  padding-left: var(--size-16);
  padding-right: var(--size-16);
}
</style>
