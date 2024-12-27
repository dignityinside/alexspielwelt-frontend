<script setup lang="ts">
definePageMeta({
  name: 'login',
  path: '/login',
});

useSeoMeta({
  title: 'Anmelden',
});

// Import package which are not autoloaded
import * as yup from 'yup';
import { useField, useForm } from 'vee-validate';

// Init router, storage and store
const { $storage } = useNuxtApp();
const usersStore = useUsersStore();

// Redirect when user already logged in
if ($storage && $storage.getItem('token')) {
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

// Init values
const loadingStatus = ref('');
const response = ref([]);

// Login user
const onSubmit = handleSubmit(async (values) => {
  // Make request to server api
  const { data, status } = await useAsyncData('login', () =>
    $fetch('/api/login', {
      method: 'POST',
      body: values,
    }),
  );

  // Update the values
  loadingStatus.value = status.value;
  response.value = data.value;

  // Login was successfully
  if (status.value === 'success' && data.value) {
    const { token, ...userData } = data.value;

    // Save user and token to store
    usersStore.setUser(userData);
    usersStore.setToken(token);

    // Save user and token to LocalStorage
    if ($storage) {
      $storage.setItem('user', userData, true);
      $storage.setItem('token', token);
    }

    // Redirect user to profile page
    navigateTo({ name: 'profile' });
  }
});
</script>

<template>
  <div>
    <h1 class="title has-text-centered">Anmelden</h1>

    <div v-if="loadingStatus === 'panding'">Lädt...</div>

    <layout-notification
      v-if="loadingStatus === 'error'"
      message="Login oder Passwort sind falsch."
    />

    <div class="columns is-centered">
      <div class="column is-4">
        <form @submit="onSubmit">
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
