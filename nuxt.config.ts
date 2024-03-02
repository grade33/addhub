// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  devtools: {
    enabled: true,
  },
  app: {
    head: {
      script: [{ src: '/scripts/01_main.js', type: 'text/javascript' }], // убрать
    },
  },
  modules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
    '@pinia/nuxt',
    '@vee-validate/nuxt',
    'nuxt-swiper',
  ],
  css: ['~/assets/styles/style.scss'],
  runtimeConfig: {
    public: {
      apiBase: process.env.BASE_URL,
    },
  },
  plugins: [
    '~/plugins/fetch.js',
    '~/plugins/toast.js',
    '~/plugins/auth-init.js',
  ],
});
