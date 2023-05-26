<template>
  <AppSection>
    <VRow>
      <VCol cols="12" md="5">
        <VImg :src="state.product.image"></VImg>
        <VRow class="mt-1">
          <VCol
            cols="2"
            v-for="(image, index) in state.product.relatedImages"
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
        <h4>{{ state.product.price }}</h4>
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
          <VTextField></VTextField>
          <VBtn color="accent">Add to Cart</VBtn>
        </div>

        <p class="mb-12">
          Product added!
          <span class="text-accent2"> Browser Whishlist </span>
        </p>

        <table class="w-100 border-dotted text-left pa-4">
          <tr>
            <th class="text-accent2">SKU:</th>
            <td>Data 1</td>
          </tr>
          <tr>
            <th class="text-accent2">Category:</th>
            <td>Data 2</td>
          </tr>
          <tr>
            <th class="text-accent2">Tags:</th>
            <td>Data 3</td>
          </tr>
        </table>
      </VCol>
    </VRow>
  </AppSection>
</template>

<script setup>
import { reactive } from "vue";

const state = reactive({
  product: {
    name: "Product 1",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi necessitatibus accusantium molestias, libero, nobis ex maxime fugiat voluptate delectus pariatur possimus laboriosam harum laborum ut sunt, in facilis quisquam quo?",
    category: "Category 1",
    price: "$10",
    image: "/boys-8-1-580x870.jpg",
    relatedImages: ["/boys-8-1-580x870.jpg", "/boys-8-580x870(1).jpg"],
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

table {
  border-spacing: 0;
}

tr {
  border-spacing: 0;
}

th,
td {
  border-bottom: 2px solid rgb(223, 222, 222);
  margin-top: 20px;
  height: 40px;
}
</style>
