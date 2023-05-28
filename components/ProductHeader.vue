<template>
  <AppCard class="w-100 text-center py-10">
    <h1>{{ product.name }}</h1>
    <div class="d-flex justify-center">
      <VBreadcrumbs
        :items="['Home', product.categoryText, product.name]"
        divider="."
        active-class="active-link"
      ></VBreadcrumbs>
    </div>
  </AppCard>
</template>

<script setup>
import { useProductStore } from "@/stores/product";
const productStore = useProductStore();

const product = productStore.product;
</script>

<style lang="scss" scoped>
h1 {
  font-family: var(--accent-font-family);
}

.active-link {
  background-color: rgb(var(--v-theme-accent));
}
</style>
