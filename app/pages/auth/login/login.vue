<script setup lang="ts">
// Import package which are not autoloaded
import { object, string, type InferType } from 'yup';
import type { FormSubmitEvent } from '#ui/types';
import { ApiEndpoint } from '~/enums/api-endpoint';
const { loggedIn, fetch: refreshSession } = useUserSession();

useSeoMeta({
  title: 'Anmelden',
});

// Redirect when user already logged in
if (loggedIn.value) {
  navigateTo({ name: 'profile' });
}

// Form validation rules
const schema = object({
  username: string()
    .min(4, 'Benutername muss mindestens 4 Zeichen lang sein')
    .required('Benutzername ist erforderlich'),
  password: string()
    .min(5, 'Passwort muss mindestens 5 Zeichen lang sein')
    .required('Passwort ist erforderlich'),
});

type Schema = InferType<typeof schema>;

const state = reactive({
  username: undefined,
  password: undefined,
});

// Login user
async function onSubmit(event: FormSubmitEvent<Schema>) {
  $fetch(ApiEndpoint.LOGIN, {
    method: 'POST',
    body: event.data,
  })
    .then(async () => {
      // Refresh the session on client-side
      await refreshSession();

      // Redirect to profile page
      await navigateTo({ name: 'profile' });
    })
    .catch((e) => {
      const toast = useToast();

      toast.add({
        id: 'wrong-username-password',
        title: 'Login oder Passwort sind falsch.',
        timeout: 3000,
      });
    });
}

// Toggle show/hide password

const isPasswordVisible = ref(false);

const togglePasswordVisibility = () => {
  isPasswordVisible.value = !isPasswordVisible.value;
};
</script>

<template>
  <u-container>
    <div class="login">
      <h1>Anmelden</h1>

      <u-notifications />

      <u-form :schema="schema" :state="state" class="login__form" @submit="onSubmit">
        <u-form-group label="Benutzername" name="username">
          <u-input v-model="state.username" icon="material-symbols:account-box" />
        </u-form-group>

        <u-form-group label="Password" name="password">
          <u-input
            :type="isPasswordVisible ? 'text' : 'password'"
            v-model="state.password"
            icon="material-symbols:key"
          >
            <template #trailing>
              <u-icon
                :name="isPasswordVisible ? 'i-heroicons-eye-slash' : 'i-heroicons-eye'"
                @click="togglePasswordVisibility"
                class="is-clickable"
              />
            </template>
          </u-input>
        </u-form-group>

        <div>
          <u-button type="submit" icon="material-symbols:lock-open">Anmelden</u-button>
        </div>
      </u-form>
    </div>
  </u-container>
</template>

<style lang="css" scoped>
.login {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--color-white);
  padding: var(--size-32);
  text-align: center;

  h1 {
    font-size: var(--font-size-20);
    line-height: var(--size-28);
    text-align: center;
    font-weight: var(--font-bold);
    padding-bottom: var(--size-32);
  }
}

.login__form {
  display: flex;
  flex-direction: column;
  gap: var(--size-16);
}
</style>
