export default defineNuxtRouteMiddleware((to) => {
  const { loggedIn, session } = useUserSession();
  const { userRoles } = useUserRoles();

  // Redirect the user to the login screen if they're not authenticated
  if (!loggedIn.value) {
    return navigateTo({ name: 'login' });
  }

  // Check if the page requires specific roles
  const requiredRoles = (to.meta.roles as []) || [];

  // Get user roles
  const roles = userRoles();

  // User has not the required role
  if (!session.value || (roles && !requiredRoles.some((role: string) => roles.includes(role)))) {
    throw createError({ statusCode: 404, statusMessage: 'Seite nicht gefunden.' });
  }
});
