<template>
  <AppSection>
    <VRow>
      <VCol cols="12" md="5">
        <VImg :src="product.image"></VImg>
        <VRow class="mt-1">
          <VCol
            cols="2"
            v-for="(image, index) in product.relatedImages"
            :key="`related-images-${index}`"
            class="pr-0"
          >
            <VImg
              class="showCasedImage"
              @click="changeShowcasedImage(image)"
              :src="image"
            ></VImg>
          </VCol>
        </VRow>
      </VCol>
      <VCol cols="12" md="7" class="pl-10 mt-4">
        <h4>{{ product.price }}</h4>
        <VRating
          :model-value="5"
          color="accent"
          density="compact"
          readonly
          class="mb-6"
        ></VRating>
        <p class="mb-6">
          {{ state.product.description }}
        </p>

        <div class="d-flex">
          <div class="text-container">
            <BaseTextField></BaseTextField>
          </div>
          <BaseButton color="accent" class="ml-1">Add to Cart</BaseButton>
        </div>

        <p class="mb-12 mt-4">
          Product added!
          <span class="text-accent2"> Browse Whishlist </span>
        </p>

        <AppCard class="w-100">
          <table class="w-100 text-left pa-4 dotted-table">
            <tr>
              <th class="text-accent2">SKU:</th>
              <td>Data 1</td>
            </tr>
            <tr>
              <th class="text-accent2">Category:</th>
              <td>{{ product.categoryText }}</td>
            </tr>
            <tr>
              <th class="text-accent2">Tags:</th>
              <td>Data 3</td>
            </tr>
          </table>
        </AppCard>
      </VCol>
    </VRow>
  </AppSection>
</template>

<script setup>
import { reactive } from "vue";

import { useProductStore } from "@/stores/product";
const productStore = useProductStore();

const product = productStore.product;

const state = reactive({
  product: {
    name: "Product 1",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi necessitatibus accusantium molestias, libero, nobis ex maxime fugiat voluptate delectus pariatur possimus laboriosam harum laborum ut sunt, in facilis quisquam quo?",
    category: "Category 1",
    price: "$10",
  },
});

const changeShowcasedImage = (newImage) => {
  state.product.image = newImage;
};
</script>

<style lang="scss" scoped>
.showCasedImage {
  cursor: pointer;
}

.text-container {
  width: 50px;
}
</style>
