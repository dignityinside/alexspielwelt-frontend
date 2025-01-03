import type { User } from '~/types';

export default defineEventHandler(async (event) => {
  const runtimeConfig = useRuntimeConfig();

  // Get username, password from body
  const body = await readBody(event);

  // Make a request to backend api
  const data = await $fetch<User>('/auth/login', {
    baseURL: runtimeConfig.public.baseURL,
    method: 'POST',
    body,
  });

  // Save data to encrypted session storage
  if (data) {
    await setUserSession(event, {
      user: {
        id: data.id,
        name: data.name,
      },
      token: data.access_token,
      loggedInAt: new Date(),
    });
  }

  return {};
});
