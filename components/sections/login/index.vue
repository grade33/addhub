<template>
  <div class="auth">
    <div class="container">
      <div class="auth__top">
        <div class="text32 medium-text">Вход в личный кабинет</div>
        <div class="text15 text14-tablet light-text">
          Обеспечьте посетителю удобство работы в Интернете с помощью надежного
          UX-дизайна.
        </div>
      </div>
      <Form v-slot="{ meta }" class="auth-form" @submit="handleSubmit">
        <div class="auth-form__top">
          <div class="auth-form__title text20 medium-text">
            Добро пожаловать!
          </div>
          <div class="auth-form__desc text15">
            Еще не зарегистрированы?
            <NuxtLink to="/reg">Создать аккаунт</NuxtLink>
          </div>
        </div>
        <div class="auth-form__fields">
          <fieldset class="fg _small">
            <label>Email адрес</label>
            <Field
              v-model="email"
              rules="required|email"
              name="email"
              type="email"
              placeholder="hello@mail.com"
            />
            <ErrorMessage name="email" class="error-message" />
          </fieldset>
          <fieldset class="fg _small">
            <label>Пароль</label>
            <Field
              v-model="password"
              :rules="{ required: true, min: 8 }"
              name="password"
              type="password"
              placeholder="•••••••"
            />
            <ErrorMessage name="password" class="error-message" />
          </fieldset>
          <div class="auth-form__wrap">
            <div class="m-check">
              <input v-model="rememberMe" type="checkbox" />
              <label><span>Запомнить меня</span></label>
            </div>
            <a href="" class="auth-form__link">Забыли пароль?</a>
          </div>
          <UIVButton
            :disabled="!meta.valid"
            color="blue"
            :is-shadow="true"
            type="submit"
          >
            Войти
          </UIVButton>
        </div>
        <ModulesSignSocial />
      </Form>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'pinia';
import { useAuthStore } from '~/stores/auth.js';
import { useValidation } from '~/composables/useValidation.js';

export default {
  data() {
    return {
      email: '',
      password: '',
      rememberMe: true,
    };
  },
  created() {
    useValidation();
  },
  methods: {
    ...mapActions(useAuthStore, { authLogin: 'login' }),
    async login() {
      try {
        await this.authLogin(this.email, this.password, this.rememberMe);
        useNuxtApp().$router.push('/');
      } catch (error) {
        const errorData = await error.response._data;
        this.$nuxt.$toast({ message: errorData.message, type: 'error' });
      }
    },
    handleSubmit() {
      this.login();
    },
  },
};
</script>
