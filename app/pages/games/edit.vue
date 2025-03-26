<script setup lang="ts">
import { object, string, number, array, type InferType } from 'yup';
import type { Game, GameGenre } from '~/types';
import { GameStatus, GameStatusLabels } from '~/enums/game-status';
import { ApiEndpoint } from '~/enums/api-endpoint';
import type { FormSubmitEvent } from '#ui/types';

// Init route, store
const route = useRoute();

const slugId = route.params.slug;

// Select mode (add/edit)
const isEdit = ref(route.params.slug !== undefined);

// Form validation rules
const schema = object({
  title: string().required('Der Titel ist erforderlich'),
  slug: string().nullable(),
  intro: string().nullable(),
  description: string().nullable(),
  slogan: string().nullable(),
  status: string().nullable(),
  img: string().nullable().required('Das Bild ist erforderlich'),
  link: string().nullable(),
  publisher: string().nullable(),
  releaseYear: number().nullable(),
  players: string().nullable(),
  playTime: string().nullable(),
  genres: array().of(number()).nullable(),
  rating: string().nullable(),
  difficulty: string().nullable(),
  recommendedAge: string().nullable(),
  award: string().nullable(),
  gameDesigner: string().nullable(),
  metaTitle: string().nullable(),
  metaDescription: string().nullable(),
});

type Schema = InferType<typeof schema>;

// Set initial state
const state = reactive(
  Object.fromEntries(Object.keys(schema.fields).map((key) => [key, undefined])),
);

// Get data from api
const { data } = await useAPI(ApiEndpoint.GAMES_ADMIN_EDIT_FORM + slugId);
const game = computed(() => data.value as Game);

// Prefill the form
onMounted(async () => {
  if (isEdit.value) {
    const filteredValues = Object.fromEntries(
      Object.entries(game.value).filter(([key]) => key in state),
    );

    // Map genres to ids
    if (filteredValues.genres && Array.isArray(filteredValues.genres)) {
      filteredValues.genres = filteredValues.genres.map((genre) => genre.id);
    }

    Object.assign(state, filteredValues);
  }
});

// Send data to backend
async function onSubmit(event: FormSubmitEvent<Schema>) {
  const endpoint = isEdit.value
    ? ApiEndpoint.GAMES_ADMIN_EDIT + slugId
    : ApiEndpoint.GAMES_ADMIN_ADD;

  const method = isEdit.value ? 'PATCH' : 'POST';

  try {
    await useAPI(endpoint, { method, body: event.data });
    navigateTo({ name: 'games.admin' });
  } catch (error) {
    // Uncomment for debugging
    // console.error('Submit failed', error);
  }
}

// Map status
const statusOptions = computed(() => {
  return Object.entries(GameStatus).map(([key, value]) => ({
    value: value,
    name: GameStatusLabels[value],
  }));
});

// Fetch game genres from API
const { data: gameGenreItems } = await useAPI<GameGenre[]>(ApiEndpoint.GAMES_GENRES);

const genresOptions = computed(() => {
  return gameGenreItems.value?.map((genre) => ({ id: genre.id, name: genre.name })) || [];
});

// Define field type
type Field = {
  name: string;
  label: string;
  grid: string;
  type: 'input' | 'textarea' | 'multi-select' | 'select';
  rows?: number;
  selectOption?: { name: string; value: string }[];
  multiSelectOptions?: { id: string; name: string }[];
};

// Define form fields
const fields = ref<Field[]>([
  { name: 'title', label: 'Titel', grid: 'col-span-4', type: 'input' },
  { name: 'slug', label: 'Slug', grid: 'col-span-2', type: 'input' },
  { name: 'publisher', label: 'Verlag', grid: 'col-span-2', type: 'input' },
  {
    name: 'genres',
    label: 'Genres',
    grid: 'col-span-4',
    type: 'multi-select',
    multiSelectOptions: genresOptions.value,
  },
  { name: 'slogan', label: 'Slogan', grid: 'col-span-12', type: 'input' },
  { name: 'img', label: 'Bild URL', grid: 'col-span-6', type: 'input' },
  { name: 'gameDesigner', label: 'Entworfen von', grid: 'col-span-3', type: 'input' },
  { name: 'releaseYear', label: 'Erstmals veröffentlicht', grid: 'col-span-3', type: 'input' },
  { name: 'recommendedAge', label: 'Empfohlenes Alter', grid: 'col-span-2', type: 'input' },
  { name: 'players', label: 'Spieler', grid: 'col-span-2', type: 'input' },
  { name: 'playTime', label: 'Dauer', grid: 'col-span-2', type: 'input' },
  { name: 'difficulty', label: 'Komplexität', grid: 'col-span-2', type: 'input' },
  { name: 'intro', label: 'Intro Text', grid: 'col-span-12', type: 'textarea', rows: 2 },
  { name: 'description', label: 'Beschreibung', grid: 'col-span-12', type: 'textarea', rows: 5 },
  { name: 'link', label: 'Amazon Link', grid: 'col-span-6', type: 'input' },
  { name: 'award', label: 'Auszeichnungen', grid: 'col-span-3', type: 'input' },
  { name: 'rating', label: 'Bewertung', grid: 'col-span-3', type: 'input' },
  { name: 'metaTitle', label: 'MetaTitle', grid: 'col-span-6', type: 'input' },
  { name: 'metaDescription', label: 'MetaDescription', grid: 'col-span-6', type: 'input' },
  {
    name: 'status',
    label: 'Status',
    grid: 'sm:col-span-2',
    type: 'select',
    selectOption: statusOptions.value,
  },
]);
</script>

<template>
  <layout-content>
    <h1>Spieltipp {{ isEdit ? 'bearbeiten' : 'hinzufügen' }}</h1>

    <u-form :schema="schema" :state="state" @submit="onSubmit">
      <div class="grid">
        <div v-for="field in fields" :key="field.name" :class="field.grid" class="col-span-12">
          <u-form-group :label="field.label" :name="field.name">
            <template v-if="field.type === 'input'">
              <u-input v-model="state[field.name]" />
            </template>

            <template v-if="field.type === 'textarea'">
              <u-textarea v-model="state[field.name]" size="xl" :rows="field.rows" autoresize />
            </template>

            <template v-if="field.type === 'multi-select'">
              <select v-model="state[field.name]" multiple>
                <option
                  v-for="option in field.multiSelectOptions"
                  :key="option.id"
                  :value="option.id"
                >
                  {{ option.name }}
                </option>
              </select>
            </template>

            <template v-if="field.type === 'select'">
              <u-select
                v-model="state[field.name]"
                :options="field.selectOption"
                option-attribute="name"
              />
            </template>
          </u-form-group>
        </div>

        <div class="col-span-12">
          <u-button type="submit" size="lg">Speichern</u-button>
        </div>
      </div>
    </u-form>
  </layout-content>
</template>

<style lang="css" scoped>
.grid {
  grid-template-columns: repeat(12, minmax(0, 1fr));
}

.col-span-12 {
  grid-column: span 12 / span 12;
}

@media (min-width: 640px) {
  .grid {
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    gap: var(--size-24);
  }

  .col-span-1 {
    grid-column: span 1 / span 1;
  }

  .col-span-2 {
    grid-column: span 2 / span 2;
  }

  .col-span-3 {
    grid-column: span 3 / span 3;
  }

  .col-span-4 {
    grid-column: span 4 / span 4;
  }

  .col-span-5 {
    grid-column: span 5 / span 5;
  }

  .col-span-6 {
    grid-column: span 6 / span 6;
  }

  .col-span-7 {
    grid-column: span 7 / span 7;
  }

  .col-span-8 {
    grid-column: span 8 / span 8;
  }

  .col-span-9 {
    grid-column: span 9 / span 9;
  }

  .col-span-10 {
    grid-column: span 10 / span 10;
  }

  .col-span-11 {
    grid-column: span 11 / span 11;
  }
}
</style>
