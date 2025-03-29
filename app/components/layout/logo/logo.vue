<script setup lang="ts">
import { ApiEndpoint } from '~/enums/api-endpoint';
import type { StatsType } from '~/components/layout/logo/logo.types';

const { data } = await useAPI(ApiEndpoint.STATS);

const stats = data.value as StatsType;

const items = ref([
  {
    heading: 'Brettspiele in Besitz',
    title: stats?.own ? stats.own + '+' : 0,
    icon: 'fa6-solid:layer-group',
  },
  {
    heading: 'Erweiterungen in Besitz',
    title: stats?.addons ? stats.addons + '+' : 0,
    icon: 'fa6-solid:angles-up',
  },
  {
    heading: 'Gespielte Stunden',
    title: stats?.hours ? stats.hours + '+' : 0,
    icon: 'fa6-solid:users',
  },
  {
    heading: 'Rezensionen',
    title: stats?.games ?? 0,
    icon: 'material-symbols:tips-and-updates',
  },
]);

const runtimeConfig = useRuntimeConfig();
</script>

<template>
  <section>
    <u-container>
      <div class="logo">
        <nuxt-link :to="{ name: 'home' }">
          <p class="logo__text">
            {{ runtimeConfig.public.name }}
          </p>
        </nuxt-link>
        <p class="logo_slogan">
          {{ runtimeConfig.public.slogan }}
        </p>
      </div>
      <layout-level v-if="items" :items="items" />
    </u-container>
  </section>
</template>

<style lang="css">
.logo {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: var(--size-32);
  padding-bottom: var(--size-32);
}

.logo__text {
  font-size: var(--font-size-30);
  font-weight: bold;
  text-transform: uppercase;
  color: transparent;
  background: linear-gradient(90deg, #ff00ff, #00ffff);
  background-clip: text;
  position: relative;
  display: inline-block;
  text-align: center;
}

@media (min-width: 640px) {
  .logo__text {
    font-size: var(--font-size-48);
  }
}

.logo_slogan {
  color: var(--color-white);
}
</style>
