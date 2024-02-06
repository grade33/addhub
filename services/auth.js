export default {
  async login($fetch, { email, password }) {
    try {
      const response = await $fetch('/api/auth/login', {
        method: 'POST',
        body: { email, password },
      });
      return response;
    } catch (error) {
      throw new Error('Ошибка входа');
    }
  },
  async register($fetch, userData) {
    console.log(userData);
    try {
      const response = await $fetch('/api/auth/register', {
        method: 'POST',
        body: {
          user_name: userData.username,
          surname: userData.surname,
          name: userData.name,
          email: userData.email,
          password: userData.password,
          repeat_password: userData.repeatPassword,
          role: userData.role,
        },
      });
      return response;
    } catch (error) {
      throw new Error('Ошибка регистрации');
    }
  },
};
