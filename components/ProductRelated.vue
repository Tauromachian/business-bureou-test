<template>
  <AppSection>
    <div class="d-flex justify-center mb-9">
      <AppHeader> Related products </AppHeader>
    </div>
    <VRow>
      <VCol md="3" v-for="(product, index) in relatedProducts" :key="index">
        <VCard flat class="mb-4 mx-1 text-center rounded-0">
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
import { computed } from "vue";
import { products } from "@/utils/data";

import { useProductStore } from "@/stores/product";
const productStore = useProductStore();

const savedProduct = productStore.product;

const relatedProducts = computed(() => {
  if (!savedProduct.category) return products.splice(0, 4);

  return products.filter((product) => {
    return savedProduct.category === product.category;
  });
});
</script>

<style lang="scss" scoped>
h3 {
  font-family: var(--accent-font-family);
}
</style>
