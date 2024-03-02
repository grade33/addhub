<template>
  <div :class="['footer-dropdown', { _open: isOpen }]">
    <div class="footer-dropdown__toggle" @click="isOpen = !isOpen">
      <span class="footer-dropdown__title">{{ title }}</span>
      <svg
        width="6"
        height="6"
        viewBox="0 0 6 6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.71056 4.64404H0.289413C0.0328762 4.64404 -0.0978122 4.33426 0.0861196 4.15033L2.79669 1.43976C2.90802 1.32843 3.09195 1.32843 3.20333 1.43976L5.9139 4.15033C6.09778 4.33426 5.9671 4.64404 5.71056 4.64404Z"
          fill="white"
        />
      </svg>
    </div>
    <ul class="footer-dropdown__list">
      <li>
        <a href="" class="_active">{{ title }}</a>
      </li>
      <li>
        <a href="">{{ title }} 2</a>
      </li>
      <li>
        <a href="">{{ title }} 3</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isOpen: false,
    };
  },
  mounted() {
    document.addEventListener('click', (e) => {
      if (this.$el.contains(e.target)) return;

      this.isOpen = false;
    });
  },
  methods: {
    documentHandler() {},
  },
};
</script>
