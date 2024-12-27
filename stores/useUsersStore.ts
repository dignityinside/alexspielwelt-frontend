import { defineStore } from 'pinia';

interface User {
  id: number;
  name: string;
  username: string;
  password: string;
}

interface UsersStore {
  item: User | null;
  token: string | null;
}

export const useUsersStore = defineStore('users', {
  state: (): UsersStore => ({
    item: null,
    token: null,
  }),
  actions: {
    async setUser(user: User | null) {
      this.item = user;
    },
    async setToken(token: string | null) {
      this.token = token;
    },
    async logoutUser() {
      this.item = null;
      this.token = null;
    },
  },
  getters: {
    getUser: (state): User | null => state.item,
    getToken: (state): string | null => state.token,
    isLoggedIn: (state): boolean => !!state.token,
  },
});
