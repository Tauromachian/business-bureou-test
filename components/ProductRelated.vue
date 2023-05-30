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
import { computed, onBeforeMount, reactive } from "vue";
import { useRouter } from "vue-router";
import { getProductsByCategory } from "@/services/product";

import { useProductStore } from "@/stores/product";
const productStore = useProductStore();
const router = useRouter();

const savedProduct = productStore.product;

const state = reactive({
  products: [],
});

const relatedProducts = computed(() => {
  if (!savedProduct.category) return state.products.splice(0, 4);

  return state.products
    .filter((product) => {
      return savedProduct.category === product.category;
    })
    .splice(0, 4);
});

onBeforeMount(() => {
  loadData();
});

const loadData = async () => {
  state.products = (await getProductsByCategory(savedProduct.category)).data;
};

const selectProduct = (product) => {
  productStore.setProduct(product);
  router.push(`/product/${product.id}`);
};
</script>

<style lang="scss" scoped>
h3 {
  font-family: var(--accent-font-family);
}
</style>
