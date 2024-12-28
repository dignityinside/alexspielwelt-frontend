export const useLogoutUser = () => {
  const { clear: clearSession } = useUserSession();

  async function logoutUser() {
    await clearSession();
    await navigateTo('/login');
  }

  return {
    logoutUser,
  };
};
