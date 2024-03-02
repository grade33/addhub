import { defineStore } from 'pinia';
import { jwtDecode } from 'jwt-decode';
import authService from '~/services/auth';
import { useNuxtApp } from '#app';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: null,
    isLoading: true,
  }),
  getters: {
    isAuthenticated(state) {
      return !!state.token;
    },
  },
  actions: {
    async login(email, password, rememberMe) {
      try {
        const data = await authService.login(useNuxtApp().$fetch, {
          email,
          password,
        });
        console.log(data);

        this.saveToken(data.result, rememberMe);
        console.log('Вход прошёл успешно');
      } catch (error) {
        console.error('Ошибка при входе в систему');
        throw error;
      }
    },
    async register(userData) {
      try {
        await authService.register(useNuxtApp().$fetch, userData);
        console.log('Регистрация прошла успешно');
      } catch (error) {
        console.error('Ошибка при регистрации');
      }
    },
    logout() {
      this.token = null;
      localStorage.removeItem('authToken');
      sessionStorage.removeItem('authToken');
    },
    saveToken(token, rememberMe) {
      this.token = token;
      if (rememberMe) {
        localStorage.setItem('authToken', token);
      } else {
        sessionStorage.setItem('authToken', token);
      }
    },
    loadToken() {
      if (process.client) {
        const token =
          localStorage.getItem('authToken') ||
          sessionStorage.getItem('authToken');
        this.token = token;
        this.isLoading = false;
      }
    },

    // isTokenValid() {
    //   if (!this.token) return false;
    //
    //   try {
    //     const decoded = jwtDecode(this.authTo ken);
    //     // Проверяем, не истек ли срок действия токена
    //     const now = Date.now().valueOf() / 1000;
    //     if (typeof decoded.exp === 'undefined' || decoded.exp < now) {
    //       console.log(`Токен истек`);
    //       this.clearToken(); // Очистка токена, так как он истек
    //       return false;
    //     }
    //
    //     if (typeof decoded.nbf !== 'undefined' && decoded.nbf > now) {
    //       console.log(`Токен еще не активен`);
    //       this.clearToken(); // Очистка токена, так как он еще не активен
    //       return false;
    //     }
    //   } catch (error) {
    //     console.error(`Ошибка при декодировании токена: ${error}`);
    //     this.clearToken(); // Очистка токена в случае ошибки декодирования
    //     return false;
    //   }
    //
    //   return true;
    // },
  },
});
