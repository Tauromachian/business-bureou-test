<template>
  <AppSection>
    <div class="text-center mb-8">
      <h2>New Arrivals</h2>
    </div>
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
            <h2 class="text-h4 mb-4 text-center form-title">
              Join our Newsletter
            </h2>
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
              <VCardSubtitle class="mt-4">
                <h4>
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
      image: "boys-8-1-580x870.jpg",
    },
    {
      name: "Product 2",
      category: "Category 2",
      price: "$20",
      image: "boys-8-580x870.jpg",
    },
    {
      name: "Product 3",
      category: "Category 1",
      price: "$30",
      image: "for-home-5-580x870.jpg",
    },
    {
      name: "Product 4",
      category: "Category 3",
      price: "$40",
      image: "for-home-5-580x870.jpg",
    },
    {
      name: "Product 5",
      category: "Category 2",
      price: "$50",
      image: "for-home-5-580x870.jpg",
    },
    {
      name: "Product 6",
      category: "Category 1",
      price: "$60",
      image: "girls-1-2-580x870.jpg",
    },
    {
      name: "Product 7",
      category: "Category 3",
      price: "$70",
      image: "girls-2-2-580x870.jpg",
    },
    {
      name: "Product 8",
      category: "Category 2",
      price: "$80",
      image: "girls-6-1-580x870.jpg",
    },
    {
      name: "Product 9",
      category: "Category 1",
      price: "$90",
      image: "girls-8-1-580x870.jpg",
    },
  ],
});
</script>

<style lang="scss" scoped>
.form-title,
h3 {
  font-family: var(--accent-font-family) !important;
}

.form-title {
  color: white;
}
</style>
