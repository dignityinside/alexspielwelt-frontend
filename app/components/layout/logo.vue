<script setup lang="ts">
import { ApiEndpoint } from '~/enums/api-endpoint';

const { data } = await useAPI(ApiEndpoint.STATS);

interface stats {
  own: number;
  addons: number;
  hours: number;
  games: number;
}

const stats = data.value as stats;

const items = ref([
  {
    heading: 'Brettspiele in Besitz',
    title: stats.own ? stats.own + '+' : 0,
    icon: 'fa6-solid:layer-group',
  },
  {
    heading: 'Erweiterungen in Besitz',
    title: stats.addons ? stats.addons + '+' : 0,
    icon: 'fa6-solid:angles-up',
  },
  {
    heading: 'Gespielte Stunden',
    title: stats.hours ? stats.hours + '+' : 0,
    icon: 'fa6-solid:users',
  },
  {
    heading: 'Rezensionen',
    title: stats.games ?? 0,
    icon: 'material-symbols:tips-and-updates',
  },
]);

const runtimeConfig = useRuntimeConfig();
</script>

<template>
  <section class="py-8 bg-primary">
    <u-container>
      <nuxt-link to="/">
        <p class="text-center text-3xl sm:text-4xl text-white font-bold tracking-tight pb-2">
          {{ runtimeConfig.public.name }}
        </p>
      </nuxt-link>
      <p class="text-center text-xl sm:text-xl text-black tracking-tight">
        {{ runtimeConfig.public.slogan }}
      </p>
      <u-divider class="py-8" />
      <layout-level :items="items" />
    </u-container>
  </section>
</template>
