<template>
  <div>
    <header>
      <layout-logo />
      <u-container>
        <layout-navigation />
      </u-container>
    </header>
    <main class="py-8 px-4">
      <u-container>
        <slot />
      </u-container>
    </main>
    <layout-footer />
    <layout-cookie-banner />
  </div>
</template>
