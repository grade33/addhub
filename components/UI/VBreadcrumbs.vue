<template>
  <div class="breadcrumbs">
    <div class="container">
      <ol>
        <li v-for="(item, index) in items" :key="index">
          <NuxtLink v-if="item.to" :to="item.to">{{ item.name }}</NuxtLink>
          <span v-else>{{ item.name }}</span>
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
};
</script>
