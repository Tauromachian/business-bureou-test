<template>
  <AppSection>
    <div class="d-flex justify-center mb-9">
      <AppHeader> Instagram @Kidsrus </AppHeader>
    </div>
    <div class="images gap-3">
      <VImg
        v-for="(image, index) in state.images"
        :key="index"
        :src="image"
      ></VImg>
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
  grid-template-columns: repeat(1, minmax(0, 1fr));
}

@media screen and (min-width: 768px) {
  .images {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }
}
</style>
