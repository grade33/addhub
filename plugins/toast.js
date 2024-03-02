import { createApp } from 'vue';
import ToastComponent from '~/components/UI/VToast.vue';

export default defineNuxtPlugin((nuxtApp) => {
  const toast = ({ message, type = 'info', timeout = 3000 }) => {
    const toastApp = createApp(ToastComponent, {
      message,
      type,
      timeout,
      onClose: () => {
        toastApp.unmount();
        document.body.removeChild(mountPoint);
      },
    });
    const mountPoint = document.createElement('div');
    document.body.appendChild(mountPoint);
    toastApp.mount(mountPoint);
  };

  nuxtApp.provide('toast', toast);
});
