<template>
  <div class="d-flex justify-center">
    <VCard flat variant="outlined" class="w-100 border-dotted rounded-0">
      <VCardText class="d-flex mx-8 justify-center text-center">
        <VRow>
          <VCol
            cols="12"
            sm="6"
            md="3"
            class="py-8 px-15"
            v-for="(item, index) in state.items"
            :key="`image-${index}`"
          >
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
