<script setup lang="ts">
import * as yup from 'yup';
import { useField, useForm } from 'vee-validate';
import type { Game } from '~/types';

// Init route, store
const route = useRoute();

const slugId = route.params.slug;

// Select mode (add/edit)
const isEdit = ref(route.params.slug !== undefined);

const initialValues = {
  title: '',
  description: '',
  slug: '',
  slogan: '',
  statusId: 0,
  img: '',
  link: '',
  publisher: '',
  releaseYear: '',
  players: '',
  playTime: '',
  genre: '',
  rating: '',
  difficulty: '',
  recommendedAge: '',
  award: '',
  gameDesigner: '',
  metaTitle: '',
  metaDescription: '',
};

const validationSchema = yup.object({
  title: yup.string().required('Der Titel ist erforderlich'),
  slug: yup.string().nullable(),
  description: yup.string().nullable(),
  slogan: yup.string().nullable(),
  statusId: yup.string().nullable(),
  img: yup.string().nullable().required('Das Bild ist erforderlich'),
  link: yup.string().nullable(),
  publisher: yup.string().nullable(),
  releaseYear: yup.string().nullable(),
  players: yup.string().nullable(),
  playTime: yup.string().nullable(),
  genre: yup.string().nullable(),
  rating: yup.string().nullable(),
  difficulty: yup.string().nullable(),
  recommendedAge: yup.string().nullable(),
  award: yup.string().nullable(),
  gameDesigner: yup.string().nullable(),
  metaTitle: yup.string().nullable(),
  metaDescription: yup.string().nullable(),
});

const { handleSubmit, errors, resetForm } = useForm({ validationSchema });

// Get data from api
const { data } = await useAPI(`/games/admin/edit/${slugId}`);
const game = computed(() => data.value as Game);

// Prefill the form
onMounted(async () => {
  if (isEdit.value) {
    const filteredValues = Object.fromEntries(
      Object.entries(game.value).filter(([key]) => key in initialValues),
    );

    resetForm({ values: filteredValues });
  }
});

// Send data to backend
const onSubmit = handleSubmit(async (values) => {
  if (isEdit.value) {
    // edit game
    await useAPI(`/games/${slugId}`, {
      method: 'PATCH',
      body: values,
    })
      .then(async () => {
        navigateTo({ name: 'games.admin' });
      })
      .catch((e) => {});
  } else {
    // new game
    await useAPI('games', {
      method: 'POST',
      body: values,
    })
      .then(async () => {
        navigateTo({ name: 'games.admin' });
      })
      .catch((e) => {});
  }
});

const { value: title } = useField<string>('title');
const { value: slug } = useField<string>('slug');
const { value: description } = useField<string>('description');
const { value: slogan } = useField<string>('slogan');
const { value: statusId } = useField<number>('statusId');
const { value: img } = useField<string>('img');
const { value: link } = useField<string>('link');
const { value: publisher } = useField<string>('publisher');
const { value: releaseYear } = useField<number>('releaseYear');
const { value: players } = useField<string>('players');
const { value: playTime } = useField<string>('playTime');
const { value: genre } = useField<string>('genre');
const { value: rating } = useField<number>('rating');
const { value: difficulty } = useField<number>('difficulty');
const { value: recommendedAge } = useField<string>('recommendedAge');
const { value: award } = useField<string>('award');
const { value: gameDesigner } = useField<string>('gameDesigner');
const { value: metaTitle } = useField<string>('metaTitle');
const { value: metaDescription } = useField<string>('metaDescription');

const statusOptions = ref([
  { id: 0, name: 'Entwurf' },
  { id: 1, name: 'Veröffentlicht' },
]);
</script>

<template>
  <div>
    <div class="section">
      <h1 class="title has-text-centered">Spieltipp {{ isEdit ? 'bearbeiten' : 'hinzufügen' }}</h1>
    </div>
    <form novalidate @submit.prevent="onSubmit">
      <div class="columns is-multiline">
        <div class="column is-6">
          <ui-input name="title" label="Titel" v-model="title" :error-message="errors.title" />
        </div>

        <div class="column is-2">
          <ui-input name="slug" label="Slug" v-model="slug" :error-message="errors.slug" />
        </div>

        <div class="column is-2">
          <ui-input
            name="publisher"
            label="Verlag"
            v-model="publisher"
            :error-message="errors.publisher"
          />
        </div>

        <div class="column is-2">
          <ui-input name="genre" label="Genre" v-model="genre" :error-message="errors.genre" />
        </div>

        <div class="column is-12">
          <ui-input name="slogan" label="Slogan" v-model="slogan" :error-message="errors.slogan" />
        </div>

        <div class="column is-6">
          <ui-input name="img" label="Bild URL" v-model="img" :error-message="errors.img" />
        </div>

        <div class="column is-3">
          <ui-input
            name="gameDesigner"
            label="Entworfen von"
            v-model="gameDesigner"
            :error-message="errors.gameDesigner"
          />
        </div>

        <div class="column is-3">
          <ui-input
            name="releaseYear"
            label="Erstmals veröffentlicht"
            v-model="releaseYear"
            :error-message="errors.releaseYear"
          />
        </div>

        <div class="column is-2">
          <ui-input
            name="recommendedAge"
            label="Empfohlenes Alter"
            v-model="recommendedAge"
            :error-message="errors.recommendedAge"
          />
        </div>

        <div class="column is-2">
          <ui-input
            name="players"
            label="Spieler"
            v-model="players"
            :error-message="errors.players"
          />
        </div>

        <div class="column is-2">
          <ui-input
            name="playTime"
            label="Dauer"
            v-model="playTime"
            :error-message="errors.playTime"
          />
        </div>

        <div class="column is-2">
          <ui-input
            name="difficulty"
            label="Komplexität"
            v-model="difficulty"
            :error-message="errors.difficulty"
          />
        </div>

        <div class="column is-12">
          <ui-textarea
            name="description"
            label="Beschreibung"
            v-model="description"
            :rows="10"
            :error-message="errors.description"
          />
        </div>

        <div class="column is-6">
          <ui-input
            name="award"
            label="Auszeichnungen"
            v-model="award"
            :error-message="errors.award"
          />
        </div>

        <div class="column is-6">
          <ui-input
            name="rating"
            label="Bewertung"
            v-model="rating"
            :error-message="errors.rating"
          />
        </div>

        <div class="column is-12">
          <ui-input name="link" label="Amazon URL" v-model="link" :error-message="errors.link" />
        </div>

        <div class="column is-6">
          <ui-input
            name="metaTitle"
            label="Meta Title"
            v-model="metaTitle"
            :error-message="errors.metaTitle"
          />
        </div>

        <div class="column is-6">
          <ui-input
            name="metaDescription"
            label="Meta Description"
            v-model="metaDescription"
            :error-message="errors.metaDescription"
          />
        </div>

        <div class="column is-12">
          <ui-select
            name="statusId"
            label="Status"
            v-model="statusId"
            :options="statusOptions"
            :error-message="errors.statusId"
          />
        </div>

        <div class="column is-12">
          <div class="field is-grouped pt-3">
            <ui-button layout="is-primary"> Speichern </ui-button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>
