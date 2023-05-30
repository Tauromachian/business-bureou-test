<template>
  <div class="d-flex justify-center">
    <ProductHeader class="mt-4 product-header"></ProductHeader>
  </div>
  <AppContainer>
    <ProductMainContent></ProductMainContent>
    <ProductInfoTab></ProductInfoTab>
    <ProductRelated></ProductRelated>
  </AppContainer>
</template>

<script setup>
import { onBeforeMount } from "vue";
import { useRoute } from "vue-router";
import { useProductStore } from "@/stores/product";

const route = useRoute();
const productStore = useProductStore();

onBeforeMount(() => {
  const keys = Object.keys(productStore.product);
  if (keys.length) return;

  loadData();
});

const loadData = async () => {
  const product = (await getProducts(route.params.id)).data;
  productStore.setProduct(product);
};
</script>

<style lang="scss" scoped>
.product-header {
  max-width: 1000px;
}

@media screen and (min-width: 1700px) {
  .product-header {
    max-width: 1400px;
  }
}
</style>
