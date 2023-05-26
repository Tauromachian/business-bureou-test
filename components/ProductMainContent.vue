<template>
  <AppSection>
    <VRow>
      <VCol md="4">
        <VImg :src="state.product.image"></VImg>
      </VCol>
      <VCol md="8" class="mt-4">
        <h4>{{ state.product.price }}</h4>
        <VRating
          :model-value="5"
          color="accent"
          density="compact"
          readonly
        ></VRating>
        <p>
          {{ state.product.description }}
        </p>

        <div class="d-flex">
          <VTextField></VTextField>
          <VBtn color="accent">Add to Cart</VBtn>
        </div>

        <p>Product added! Browser Whishlist</p>

        <table class="w-100 border-dotted">
          <tr>
            <th>Header 1</th>
            <td>Data 1</td>
          </tr>
          <tr>
            <th>Header 2</th>
            <td>Data 2</td>
          </tr>
          <tr>
            <th>Header 3</th>
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
  },
});
</script>

<style lang="scss" scoped></style>
