<template>
  <AppSection>
    <VRow>
      <VCol cols="12" md="5">
        <ImageZoom class="w-100" :src="product.image"></ImageZoom>
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
      <VCol
        cols="12"
        md="7"
        class="mt-4"
        :class="{ 'pl-10': $vuetify.display.mdAndUp }"
      >
        <h4>{{ product.price }}</h4>
        <VRating
          :model-value="product.rating"
          color="accent"
          density="compact"
          readonly
          class="mb-6"
        ></VRating>
        <p class="mb-6">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi
          necessitatibus accusantium molestias, libero, nobis ex maxime fugiat
          voluptate delectus pariatur possimus laboriosam harum laborum ut sunt,
          in facilis quisquam quo?,
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
              <td>{{ getRandomString() }}</td>
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
import { getRandomString } from "@/utils/randomGenerators";

import { useProductStore } from "@/stores/product";
const productStore = useProductStore();

const product = productStore.product;

const changeShowcasedImage = (newImage) => {
  product.image = newImage;
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
