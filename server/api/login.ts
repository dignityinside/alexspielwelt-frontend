export default defineEventHandler(async (event) => {
  const runtimeConfig = useRuntimeConfig();

  // Get username, password from body
  const body = await readBody(event);

  // Make a request to backend api
  return await $fetch('/auth', {
    baseURL: runtimeConfig.public.baseURL,
    method: 'POST',
    body,
    headers: {
      'Content-Type': 'application/json',
    },
  });
});
