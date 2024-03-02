import { useAuthStore } from '~/stores/auth.js';
import { defineNuxtRouteMiddleware, navigateTo } from '#app';

export default defineNuxtRouteMiddleware(() => {
  const authStore = useAuthStore();
  if (!authStore.isAuthenticated) {
    return navigateTo('/login');
  }
});
