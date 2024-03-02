import { useAuthStore } from '~/stores/auth.js';
import { defineNuxtRouteMiddleware, navigateTo } from '#app';

export default defineNuxtRouteMiddleware(() => {
  const authStore = useAuthStore();
  console.log(authStore.isAuthenticated);
  if (authStore.isAuthenticated) {
    return navigateTo('/');
  }
});
