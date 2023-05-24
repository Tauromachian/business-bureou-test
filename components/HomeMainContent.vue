<template>
  <div>
    <h1>New Arrivals</h1>
    <VRow>
      <VCol md="4"></VCol>
      <VCol md="8">
        <VRow>
          <VCol
            v-for="(product, index) in state.products"
            md="4"
            :key="`product-${index}`"
          >
            <div class="d-flex flex-column align-center">
              <VImg :src="product.img"></VImg>
              <p>
                {{ product.category }}
              </p>
              <p>{{ product.name }}</p>
              <p>{{ product.price }}</p>
            </div>
          </VCol>
        </VRow>
      </VCol>
    </VRow>
  </div>
</template>

<script setup>
import { reactive } from "vue";

const state = reactive({
  products: [
    { img: "", category: "", name: "", price: "" },
    { img: "", category: "", name: "", price: "" },
    { img: "", category: "", name: "", price: "" },
    { img: "", category: "", name: "", price: "" },
  ],
});
</script>

<style lang="scss" scoped></style>
