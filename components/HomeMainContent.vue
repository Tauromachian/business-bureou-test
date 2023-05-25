<template>
  <AppSection>
    <div class="text-center mb-8">
      <h2>New Arrivals</h2>
    </div>
    <v-row>
      <!-- Sidebar -->
      <VCol cols="3" class="d-flex flex-column gap-9">
        <div>
          <VTextField
            v-model="search"
            variant="outlined"
            label="Search"
            solo
          ></VTextField>
        </div>

        <!-- Categories -->
        <div>
          <h2 class="mb-0">Categories</h2>
          <VCard flat class="border-dotted w-100" variant="outlined">
            <VCardText>
              <VList>
                <VListItem
                  v-for="(category, index) in state.categories"
                  :key="index"
                >
                  <VListItemContent>{{ category }}</VListItemContent>
                </VListItem>
              </VList>
            </VCardText>
          </VCard>
        </div>

        <!-- Best Sellers -->
        <div>
          <h2 class="mb-0">Best Sellers</h2>
          <VCard class="mt-0 border-dotted w-100" variant="outlined" flat>
            <VCardText>
              <v-list class="d-flex flex-column gap-6">
                <v-list-item
                  v-for="(bestSeller, index) in state.bestSellers"
                  :key="index"
                  class="px-0"
                  :prepend-avatar="bestSeller.image"
                >
                  <VListItemTitle>
                    <h5>
                      {{ bestSeller.name }}
                    </h5>
                  </VListItemTitle>
                  <VListItemTitle>
                    <VRating
                      v-model="bestSeller.stars"
                      color="accent"
                      density="compact"
                      readonly
                    ></VRating>
                  </VListItemTitle>
                  <VListItemTitle>
                    <h5>
                      {{ bestSeller.price }}
                    </h5>
                  </VListItemTitle>
                </v-list-item>
              </v-list>
            </VCardText>
          </VCard>
        </div>

        <!-- Opt In Form -->
        <VCard flat color="accent">
          <VCardText>
            <h2 class="text-h4 mb-4 text-center form-title">
              Join our Newsletter
            </h2>
            <v-form>
              <VTextField
                variant="outlined"
                v-model="email"
                label="Your email address*"
                solo
              ></VTextField>
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
                <h4 class="category">
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
  bestSellers: [
    {
      name: "Bunny backpack",
      stars: 4,
      price: "$10",
      image: "for-home-2-580x870.jpg",
    },
    {
      name: "Rabbit pillow",
      stars: 4,
      price: "$10",
      image: "for-home-13-1-580x870.jpg",
    },
    {
      name: "Bear pillow",
      stars: 4,
      price: "$70",
      image: "for-home-14-580x870.jpg",
    },
    {
      name: "Rabbit Casket",
      stars: 4,
      price: "$100",
      image: "for-home-15-580x870.jpg",
    },
  ],
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

.category {
  color: rgb(var(--v-theme-accent));
}
</style>
