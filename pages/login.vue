<template>
  <UIVBreadcrumbs
    :items="[{ name: 'Главная', to: '/' }, { name: 'Вход в личный кабинет' }]"
  />
  <SectionsLogin />
</template>

<script setup>
definePageMeta({
  middleware: 'redirect-if-authenticated',
});
</script>

<style scoped lang="scss"></style>
