import { Role } from '@/enums/role';

export const useUserRoles = () => {
  const { session } = useUserSession();

  /**
   * Returns user roles
   */
  function userRoles(): string[] {
    if (!session) {
      return [];
    }

    return JSON.parse(<string>session.value.roles);
  }

  /**
   * Check user is admin
   */
  function isAdmin(): boolean {
    const roles = userRoles();

    return roles.includes(Role.Admin);
  }

  return {
    userRoles,
    isAdmin,
  };
};
