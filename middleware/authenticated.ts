export default defineNuxtRouteMiddleware(() => {
  const usersStore = useUsersStore();

  if (!usersStore.isLoggedIn) {
    return navigateTo('/login');
  }
});
