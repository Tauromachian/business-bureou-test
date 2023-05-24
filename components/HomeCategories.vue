<template>
  <VCard flat class="border-dotted">
    <VRow class="text-center">
      <VCol cols="3" v-for="item in state.items" :key="item.text">
        <VImg :src="item.image"></VImg>
        <p>{{ item.text }}</p>
      </VCol>
    </VRow>
  </VCard>
</template>

<script setup>
import { reactive } from "vue";

const state = reactive({
  items: [
    { image: "image-url-1", text: "Some Text 1" },
    { image: "image-url-2", text: "Some Text 2" },
    { image: "image-url-3", text: "Some Text 3" },
    { image: "image-url-4", text: "Some Text 4" },
  ],
});
</script>

<style scoped>
.border-dotted {
  border: 2px dotted #000000;
}
</style>
