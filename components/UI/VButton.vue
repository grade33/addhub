<template>
  <NuxtLink v-if="link" :to="link" :class="buttonClasses">
    <slot name="left"></slot>
    <span><slot>Нажмите</slot></span>
    <slot name="right"></slot>
  </NuxtLink>
  <button v-else :class="buttonClasses">
    <slot name="left"></slot>
    <span><slot>Нажмите</slot></span>
    <slot name="right"></slot>
  </button>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      required: true,
    },
    isShadow: {
      type: Boolean,
      default: false,
    },
    link: {
      type: String,
      default: '',
    },
  },
  computed: {
    buttonClasses() {
      return [
        'm-btn',
        {
          'm-btn-blue': this.color === 'blue',
          'm-btn-blue2': this.color === 'blue2',
          'm-btn-blue3': this.color === 'blue3',
          'm-btn-blue-outline': this.color === 'blueOutline',
          'm-btn-red': this.color === 'red',
          'm-btn-white': this.color === 'white',
          'm-btn-gray': this.color === 'gray',
          'm-btn-shadow': this.isShadow,
        },
      ];
    },
  },
};
</script>
