<template>
  <AppSection>
    <div class="d-flex justify-center mb-9">
      <AppHeader> Related products </AppHeader>
    </div>
    <VRow>
      <VCol
        cols="12"
        md="3"
        v-for="(product, index) in relatedProducts"
        :key="index"
      >
        <ProductCard
          :product="product"
          @click="selectProduct(product)"
          class="mb-4"
          show-rating
        ></ProductCard>
      </VCol>
    </VRow>
  </AppSection>
</template>

<script setup>
import { computed } from "vue";
import { products } from "@/utils/data";

import { useProductStore } from "@/stores/product";
const productStore = useProductStore();

const savedProduct = productStore.product;

const relatedProducts = computed(() => {
  if (!savedProduct.category) return products.splice(0, 4);

  return products
    .filter((product) => {
      return savedProduct.category === product.category;
    })
    .splice(0, 4);
});

const selectProduct = (product) => {
  productStore.setProduct(product);
};
</script>

<style lang="scss" scoped>
h3 {
  font-family: var(--accent-font-family);
}
</style>
