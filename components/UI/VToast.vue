<template>
  <Transition name="toast">
    <div
      v-if="visible"
      :class="['toast', `toast_${type}`]"
      @mouseenter="pauseTimer"
      @mouseleave="resumeTimer"
    >
      <div class="toast__content">
        <p>{{ message }}</p>
        <button class="toast__close" type="button" @click="hide">
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.6894 0.321198C13.2753 -0.0929086 12.6064 -0.0929086 12.1923 0.321198L7 5.50284L1.80774 0.31058C1.39363 -0.103527 0.724687 -0.103527 0.31058 0.31058C-0.103527 0.724687 -0.103527 1.39363 0.31058 1.80774L5.50284 7L0.31058 12.1923C-0.103527 12.6064 -0.103527 13.2753 0.31058 13.6894C0.724687 14.1035 1.39363 14.1035 1.80774 13.6894L7 8.49716L12.1923 13.6894C12.6064 14.1035 13.2753 14.1035 13.6894 13.6894C14.1035 13.2753 14.1035 12.6064 13.6894 12.1923L8.49716 7L13.6894 1.80774C14.0929 1.40425 14.0929 0.724687 13.6894 0.321198Z"
              fill="white"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  </Transition>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'info',
    },
    message: {
      type: String,
      required: true,
    },
    timeout: {
      type: Number,
      default: 3000,
    },
    'on-close': {
      type: Function,
      default: () => {},
    },
  },
  data() {
    return {
      visible: false,
    };
  },
  mounted() {
    this.show();
  },
  methods: {
    show() {
      this.visible = true;
      this.startTimer();
    },
    hide() {
      this.visible = false;
      setTimeout(() => {
        this.onClose();
      }, 3000);
    },
    startTimer() {
      this.timeoutId = setTimeout(this.hide, this.timeout); // timeout как свойство данных или проп
    },
    pauseTimer() {
      clearTimeout(this.timeoutId);
    },
    resumeTimer() {
      this.startTimer();
    },
  },
};
</script>

<style lang="scss" scoped>
.toast {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 50;
  padding: 28px 30px;
  font-size: 18px;
  color: #fff;
  border-radius: 0;
  transition: opacity 0.5s ease-in-out;

  &_success {
    background-color: #4caf50;
  }

  &_info {
    background-color: #2196f3;
  }

  &_warn {
    background-color: #ff9800;
  }

  &_error {
    background-color: #f44336;
  }

  &_secondary {
    background-color: #6c757d;
  }

  &_contrast {
    background-color: #000;
  }

  &__content {
    position: relative;
  }

  &__close {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
  }
}

.toast-enter-active,
.toast-leave-active {
  transition:
    opacity 0.3s ease-in-out,
    transform 0.3s ease-in-out;
}

.toast-enter-from,
.toast-leave-to {
  opacity: 0;
  transform: translateY(-100%);
}
</style>
