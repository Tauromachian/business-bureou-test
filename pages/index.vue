<template>
  <AppContainer>
    <HomeHero></HomeHero>
    <HomeCategories v-model="state.selectedCategories"></HomeCategories>
    <HomeMainContent v-model="state.selectedCategories"></HomeMainContent>
    <HomeInstagram></HomeInstagram>
  </AppContainer>
</template>

<script setup>
import { reactive } from "vue";

const state = reactive({
  selectedCategories: [],
});
</script>

<style lang="scss" scoped></style>
