<script setup lang="ts">
import type { Game } from '~/types';
import { GameStatus, GameStatusLabels } from '~/enums/game-status';
import { ApiEndpoint } from '~/enums/api-endpoint';
const { $formatDate } = useNuxtApp();

const { data: games } = await useAPI<Game[]>(ApiEndpoint.GAMES_ADMIN);

const columns = [
  {
    key: 'id',
    label: '#',
    sortable: true,
  },
  {
    key: 'title',
    label: 'Titel',
    sortable: true,
  },
  {
    key: 'status',
    label: 'Status',
    sortable: true,
  },
  {
    key: 'date',
    label: 'Datum',
    sortable: true,
  },
  { key: 'actions', label: 'Aktionen' },
];

const rows = computed(() => {
  return (
    games.value?.map((game) => ({
      id: game.id,
      title: game.title,
      status: game.status,
      date: $formatDate(game.createdAt, true),
      slug: game.slug,
    })) || []
  );
});

const q = ref('');

const filteredRows = computed(() => {
  if (!q.value) {
    return rows.value;
  }

  // Filter the rows based on the search term
  return rows.value.filter((row) => {
    return Object.values(row).some((value) => {
      return String(value).toLowerCase().includes(q.value.toLowerCase());
    });
  });
});
</script>

<template>
  <layout-content>
    <div class="admin">
      <h1>Admin Spieltipps</h1>

      <u-link :to="{ name: 'game.add' }">
        <u-button icon="material-symbols:add-circle" class="is-clickable">Hinzufügen</u-button>
      </u-link>
    </div>

    <div class="admin__filter">
      <u-input v-model="q" placeholder="Filter game..." />
    </div>

    <u-table :columns="columns" :rows="filteredRows">
      <template #title-data="{ row }">
        <nuxt-link
          v-if="row.status === GameStatus.PUBLIC"
          :to="{ name: 'game', params: { slug: row.slug } }"
        >
          {{ row.title }}
        </nuxt-link>
      </template>

      <template #status-data="{ row }">
        {{ GameStatusLabels[row.status] }}
      </template>

      <template #actions-data="{ row }">
        <nuxt-link :to="{ name: 'game.edit', params: { slug: row.slug } }"> Bearbeiten </nuxt-link>
      </template>
    </u-table>
  </layout-content>
</template>

<style scoped lang="css">
.admin {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.admin__filter {
  padding: var(--size-32) 0;
}
</style>
