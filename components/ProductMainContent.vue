<template>
  <AppSection>
    <VRow>
      <VCol cols="12" md="4">
        <VImg :src="state.product.image"></VImg>
      </VCol>
      <VCol cols="12" md="8" class="pl-10 mt-4">
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
  },
});
</script>

<style lang="scss" scoped>
table {
  border-spacing: 0;
}

tr {
  border-spacing: 0;
}

th,
td {
  border-bottom: 2px solid rgb(223, 222, 222);
}
</style>
