<template>
  <AppSection>
    <v-row>
      <!-- Sidebar -->
      <VCol cols="3">
        <VTextField v-model="search" label="Search" solo></VTextField>

        <!-- Categories -->
        <VList>
          <VListItem v-for="(category, index) in state.categories" :key="index">
            <VListItemContent>{{ category }}</VListItemContent>
          </VListItem>
        </VList>

        <!-- Best Sellers -->
        <VList>
          <VListItem
            v-for="(bestSeller, index) in state.bestSellers"
            :key="index"
          >
            <VListItemContent>{{ bestSeller }}</VListItemContent>
          </VListItem>
        </VList>

        <!-- Opt In Form -->
        <VCard flat color="accent">
          <VCardText>
            <h2 class="text-h4 mb-4 text-center">Join our Newsletter</h2>
            <v-form>
              <VTextField v-model="email" label="Email" solo></VTextField>
              <VBtn @click="submit">Submit</VBtn>
            </v-form>
          </VCardText>
        </VCard>
      </VCol>

      <!-- Content -->
      <VCol cols="9">
        <VRow>
          <VCol md="4" v-for="(product, index) in state.products" :key="index">
            <VCard flat class="mb-4 text-center">
              <VImg :src="product.image" aspect-ratio="1"></VImg>
              <VCardSubtitle>{{ product.category }}</VCardSubtitle>
              <VCardTitle>{{ product.name }}</VCardTitle>
              <VCardText>{{ product.price }}</VCardText>
            </VCard>
          </VCol>
        </VRow>
      </VCol>
    </v-row>
  </AppSection>
</template>

<script setup>
import { reactive } from "vue";

const state = reactive({
  search: "",
  email: "",
  categories: ["Category 1", "Category 2", "Category 3"],
  bestSellers: ["Best Seller 1", "Best Seller 2", "Best Seller 3"],
  products: [
    {
      name: "Product 1",
      category: "Category 1",
      price: "$10",
      image: "image-url-1",
    },
    {
      name: "Product 2",
      category: "Category 2",
      price: "$20",
      image: "image-url-2",
    },
    {
      name: "Product 3",
      category: "Category 1",
      price: "$30",
      image: "image-url-3",
    },
    {
      name: "Product 4",
      category: "Category 3",
      price: "$40",
      image: "image-url-4",
    },
    {
      name: "Product 5",
      category: "Category 2",
      price: "$50",
      image: "image-url-5",
    },
    {
      name: "Product 6",
      category: "Category 1",
      price: "$60",
      image: "image-url-6",
    },
    {
      name: "Product 7",
      category: "Category 3",
      price: "$70",
      image: "image-url-7",
    },
    {
      name: "Product 8",
      category: "Category 2",
      price: "$80",
      image: "image-url-8",
    },
    {
      name: "Product 9",
      category: "Category 1",
      price: "$90",
      image: "image-url-9",
    },
    {
      name: "Product 10",
      category: "Category 3",
      price: "$100",
      image: "image-url-10",
    },
  ],
});
</script>

<style lang="scss" scoped></style>
