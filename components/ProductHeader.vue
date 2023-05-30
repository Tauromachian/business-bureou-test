<template>
  <AppCard class="w-100 text-center py-10">
    <h1>{{ product.name }}</h1>
    <div class="d-flex justify-center">
      <VBreadcrumbs
        :items="items"
        divider=":"
        active-class="active-link"
        class="breadcrumbs"
        color="accent2"
      ></VBreadcrumbs>
    </div>
  </AppCard>
</template>

<script setup>
import { computed } from "vue";
import { useProductStore } from "@/stores/product";

const productStore = useProductStore();

const product = productStore.product;

const items = computed(() => {
  return [
    { title: "Home", disabled: false, href: "/" },
    { title: product.categoryText, disabled: false, href: "/" },
    { title: product.name, disabled: true },
  ];
});
</script>

<style lang="scss" scoped>
h1 {
  font-family: var(--accent-font-family);
}

.active-link {
  background-color: rgb(var(--v-theme-accent));
}
</style>
