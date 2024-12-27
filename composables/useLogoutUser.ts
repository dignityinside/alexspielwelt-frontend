export const useLogoutUser = () => {
  const usersStore = useUsersStore();
  const { $storage } = useNuxtApp();

  async function logoutUser() {
    // Delete user and token from LocalStorage
    if ($storage) {
      $storage.removeItem('user');
      $storage.removeItem('token');
    }

    // Unset user and token in Store
    await usersStore.logoutUser();

    navigateTo({ name: 'login' });
  }

  return {
    logoutUser,
  };
};
