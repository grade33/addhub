<template>
  <div class="m-section__top">
    <div class="m-section__text">
      <div class="text32 medium-text">
        {{ title }}
      </div>
      <div class="text15 light-text">
        {{ desc }}
      </div>
    </div>
    <UIVButton v-if="linkText" class="m-section__link" color="blueOutline">
      <template #default>{{ linkText }}</template>
      <template #right
        ><img src="~/assets/img/arrow-right.svg" alt=""
      /></template>
    </UIVButton>
  </div>
</template>

<script>
export default {
  name: 'SectionComponent',
  props: {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    linkText: {
      type: String,
      default: null,
    },
  },
};
</script>
