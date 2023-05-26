<template>
  <AppSection>
    <div class="text-center">
      <h2>Related products</h2>
    </div>
    <VRow>
      <VCol md="3" v-for="(product, index) in state.products" :key="index">
        <VCard flat class="mb-4 mx-1 text-center">
          <VImg :src="product.image" aspect-ratio="1"></VImg>
          <VCardSubtitle class="mt-4">
            <h4 class="category text-accent">
              {{ product.category }}
            </h4>
          </VCardSubtitle>
          <VCardTitle
            ><h3>
              {{ product.name }}
            </h3>
          </VCardTitle>
          <VCardText>
            <h4>
              {{ product.price }}
            </h4>
          </VCardText>
          <VRating
            :model-value="product.rating"
            density="compact"
            color="accent"
            readonly
          ></VRating>
        </VCard>
      </VCol>
    </VRow>
  </AppSection>
</template>

<script setup>
import { reactive } from "vue";

const state = reactive({
  search: "",
  email: "",
  categories: ["Category 1", "Category 2", "Category 3"],

  products: [
    {
      name: "Product 1",
      category: "Category 1",
      price: "$10",
      image: "/boys-8-1-580x870.jpg",
      rating: 5,
    },
    {
      name: "Product 2",
      category: "Category 2",
      price: "$20",
      image: "/boys-8-580x870.jpg",
      rating: 4,
    },
    {
      name: "Product 3",
      category: "Category 1",
      price: "$30",
      image: "/for-home-5-580x870.jpg",
      rating: 5,
    },
    {
      name: "Product 4",
      category: "Category 3",
      price: "$40",
      image: "/for-home-5-580x870.jpg",
      rating: 5,
    },
  ],
});
</script>

<style lang="scss" scoped>
h3 {
  font-family: var(--accent-font-family);
}
</style>
