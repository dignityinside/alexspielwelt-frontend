<template>
  <section>
    <div class="flex flex-col items-center my-36">
      <h1 class="text-3xl font-bold">
        <slot name="title" />
      </h1>
      <h2 class="text-xl text-center text-gray-600">
        <slot name="subtitle" />
      </h2>
      <div class="py-4">
        <slot />
      </div>
    </div>
  </section>
</template>
<script setup lang="ts"></script>
