<template>
  <div class="d-flex justify-center">
    <VCard flat class="w-100 border-dotted">
      <VCardText class="d-flex mx-8 justify-center text-center">
        <VRow class="gap-15 mx-14 py-8">
          <VCol v-for="(item, index) in state.items" :key="`image-${index}`">
            <VImg :src="item.image"></VImg>
            <h5 class="mt-4">{{ item.text }}</h5>
          </VCol>
        </VRow>
      </VCardText>
    </VCard>
  </div>
</template>

<script setup>
import { reactive } from "vue";

const state = reactive({
  items: [
    { image: "baby.png", text: "Some Text 1" },
    { image: "girl.png", text: "Some Text 2" },
    { image: "boy.png", text: "Some Text 3" },
    { image: "toys.png", text: "Some Text 4" },
  ],
});
</script>

<style scoped>
.border-dotted {
  border: 2px dotted #000000;
  border-color: rgb(223, 221, 218);
  width: fit-content;
}
</style>
