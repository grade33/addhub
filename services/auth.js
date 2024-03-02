export default {
  async login($fetch, { email, password }) {
    const data = await $fetch('/api/auth/login', {
      method: 'POST',
      body: { email, password },
    });
    return data;
  },
  async register($fetch, userData) {
    return await $fetch('/api/auth/register', {
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
  },
};
