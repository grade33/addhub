import { useAuthStore } from '~/stores//auth.js';

export default defineNuxtPlugin(() => {
  const authStore = useAuthStore();
  authStore.loadToken();
});
