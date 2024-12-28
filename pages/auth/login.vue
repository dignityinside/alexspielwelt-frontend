<script setup lang="ts">
// Import package which are not autoloaded
import * as yup from 'yup';
import { useField, useForm } from 'vee-validate';
const { loggedIn, fetch: refreshSession } = useUserSession();

definePageMeta({
  name: 'login',
  path: '/login',
});

useSeoMeta({
  title: 'Anmelden',
});

// Redirect when user already logged in
if (loggedIn.value) {
  navigateTo({ name: 'profile' });
}

// Form validation rules
const validationSchema = yup.object({
  username: yup
    .string()
    .min(4, 'Benutername muss mindestens 4 Zeichen lang sein')
    .required('Benutzername ist erforderlich'),
  password: yup
    .string()
    .min(5, 'Passwort muss mindestens 5 Zeichen lang sein')
    .required('Passwort ist erforderlich'),
});

// Vee-Validate Setup
const { handleSubmit, errors } = useForm({ validationSchema });
const { value: username } = useField<string>('username');
const { value: password } = useField<string>('password');

const apiError = ref(false);

// Login user
const onSubmit = handleSubmit(async (values) => {
  $fetch('/api/login', {
    method: 'POST',
    body: values,
  })
    .then(async () => {
      // Refresh the session on client-side
      await refreshSession();

      // Redirect to profile page
      await navigateTo({ name: 'profile' });
    })
    .catch((e) => {
      apiError.value = true;
    });
});
</script>

<template>
  <div>
    <h1 class="title has-text-centered">Anmelden</h1>

    <layout-notification v-if="apiError" message="Login oder Passwort sind falsch." />

    <div class="columns is-centered">
      <div class="column is-4">
        <form @submit.prevent="onSubmit">
          <ui-input
            type="text"
            name="username"
            label="Benutzername"
            autocomplete="username"
            icon-left="fa-solid fa-user"
            v-model="username"
            :error-message="errors.username"
          />

          <ui-password
            name="password"
            label="Password"
            icon="fa-solid fa-key"
            v-model="password"
            :error-message="errors.password"
          />

          <div class="field is-grouped is-grouped-centered pt-3">
            <ui-button type="submit" layout="is-primary">Anmelden</ui-button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
