import { defineStore } from 'pinia';
import authService from '~/services/auth';
import { useNuxtApp } from '#app';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    error: null,
  }),
  getters: {
    isAuthenticated: (state) => !!state.user,
  },
  actions: {
    async login(email, password) {
      try {
        const data = await authService.login(useNuxtApp().$fetch, {
          email,
          password,
        });
        this.user = data.user;
        this.error = null;
      } catch (error) {
        this.error = error.message;
        this.user = null;
      }
    },
    async register(userData) {
      try {
        const data = await authService.register(useNuxtApp().$fetch, userData);
        this.user = data.user;
        this.error = null;
      } catch (error) {
        this.error = error.message;
        this.user = null;
      }
    },
    logout() {
      this.user = null;
    },
  },
});
