import { defineRule, configure } from 'vee-validate';
import {
  required,
  min,
  email,
  alpha,
  alpha_dash,
  confirmed,
} from '@vee-validate/rules';
import { localize, setLocale } from '@vee-validate/i18n';
import ru from '@vee-validate/i18n/dist/locale/ru.json';

export function useValidation() {
  // Регистрация правил
  defineRule('required', required);
  defineRule('min', min);
  defineRule('email', email);
  defineRule('alpha', alpha);
  defineRule('alpha_dash', alpha_dash);
  defineRule('confirmed', confirmed);

  // Настройка локализации
  configure({
    generateMessage: localize({
      ru,
    }),
  });

  setLocale('ru');
}
