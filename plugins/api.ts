export default defineNuxtPlugin((nuxtApp) => {
  const { session } = useUserSession();
  const runtimeConfig = useRuntimeConfig();

  const api = $fetch.create({
    baseURL: runtimeConfig.public.baseURL,
    onRequest({ request, options, error }) {
      // Append token to header
      if (session.value?.token) {
        options.headers.set('Authorization', `Bearer ${session.value?.token}`);
      }
    },
    async onResponseError({ response }) {
      if (response.status === 401) {
        await nuxtApp.runWithContext(() => navigateTo('/login'));
      }
    },
  });

  return {
    provide: {
      api,
    },
  };
});
