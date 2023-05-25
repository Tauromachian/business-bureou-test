<template>
  <AppSection>
    <div class="text-center">
      <h2>Instagram @Kidsrus</h2>
    </div>
    <div class="images gap-3">
      <v-img
        v-for="(image, index) in state.images"
        :key="index"
        :src="image"
      ></v-img>
    </div>
  </AppSection>
</template>

<script setup>
import { reactive } from "vue";

const state = reactive({
  images: [
    "family-1.jpg",
    "family-2.jpg",
    "family-3.jpg",
    "family-4.jpg",
    "family-5.jpg",
  ],
});
</script>

<style lang="scss" scoped>
.images {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
}
</style>
