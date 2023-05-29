<template>
  <AppSection>
    <div class="d-flex justify-center mb-9">
      <AppHeader> New arrivals </AppHeader>
    </div>
    <VRow>
      <!-- Sidebar -->
      <VCol cols="3" class="d-flex flex-column gap-9">
        <div>
          <SearchBar
            v-model="state.search"
            label="Search"
            @submit="applySearch"
            solo
          ></SearchBar>
        </div>

        <!-- Categories -->
        <div>
          <h2 class="mb-3">Categories</h2>
          <AppCard class="w-100">
            <AppCardBody>
              <table class="w-100 text-left dotted-table">
                <tr
                  v-for="(category, index) in state.categories"
                  :key="`home-category-${index}`"
                  class="cursor-pointer"
                  @click="filterCategory([category.value])"
                >
                  <th class="text-accent2">{{ category.name }}</th>
                  <td class="text-end">({{ category.amount }})</td>
                </tr>
              </table>
            </AppCardBody>
          </AppCard>
        </div>

        <!-- Best Sellers -->
        <div>
          <h2 class="mb-3">Best Sellers</h2>
          <AppCard class="mt-0 border-dot w-100" variant="outlined" flat>
            <AppCardBody>
              <VList class="d-flex flex-column gap-6">
                <VListItem
                  v-for="(bestSeller, index) in bestSellers"
                  :key="index"
                  class="px-0"
                  :prepend-avatar="bestSeller.image"
                  @click="selectProduct(bestSeller)"
                >
                  <VListItemTitle>
                    <h5>
                      {{ bestSeller.name }}
                    </h5>
                  </VListItemTitle>
                  <VListItemTitle>
                    <VRating
                      v-model="bestSeller.rating"
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
                </VListItem>
              </VList>
            </AppCardBody>
          </AppCard>
        </div>

        <!-- Opt In Form -->
        <VCard flat color="accent">
          <VCardText>
            <h2 class="text-h4 mb-4 text-center form-title">
              Join our Newsletter
            </h2>
            <VForm>
              <BaseTextField
                class="mb-3"
                v-model="state.email"
                variant="dashed"
                label="Your email address*"
              >
              </BaseTextField>
              <BaseButton
                text-color="accent2"
                color="#ffffff"
                class="w-100"
                block
              >
                Submit
              </BaseButton>
            </VForm>
          </VCardText>
        </VCard>
      </VCol>

      <!-- Content -->
      <VCol cols="9">
        <VRow class="ml-4">
          <VCol
            md="4"
            v-for="(product, index) in selectedProducts"
            :key="index"
          >
            <ProductCard
              :product="product"
              @click="selectProduct(product)"
              class="mb-4"
            ></ProductCard>
          </VCol>
        </VRow>
      </VCol>
    </VRow>
  </AppSection>
</template>

<script setup>
import { reactive, computed } from "vue";
import { useProductStore } from "@/stores/product";
import { useRouter } from "vue-router";
import { products } from "@/utils/data";

const props = defineProps({
  modelValue: {
    type: Array,
    default: () => [],
  },
});
const emit = defineEmits(["update:modelValue"]);

const router = useRouter();
const productStore = useProductStore();
const state = reactive({
  search: "",
  email: "",

  isSearchActive: false,
  categories: [
    { name: "For Babies", value: "babies", amount: 11 },
    { name: "For Boys", value: "boys", amount: 19 },
    { name: "For Girls", value: "girls", amount: 20 },
    { name: "For Home", value: "home", amount: 14 },
    { name: "For Play", value: "toys", amount: 8 },
  ],
  products,
});

const selectedCategories = computed({
  get() {
    return props.modelValue;
  },
  set(val) {
    emit("update:modelValue", val);
  },
});

const bestSellers = computed(() => {
  return products.splice(0, 4);
});

const selectedProducts = computed(() => {
  if (!selectedCategories.value.length) return state.products;

  const selectedProducts = state.products.filter((product) => {
    if (selectedCategories.value.includes(product.category)) return product;
  });

  console.log("asdf");

  if (state.isSearchActive) {
    return selectedProducts.filter((product) => {
      if (
        product.name.includes(state.search) ||
        product.category.includes(state.search) ||
        product.categoryText.includes(state.search)
      ) {
        return true;
      }
    });
  }

  return selectedProducts;
});

const filterCategory = (category) => {
  selectedCategories.value = [...category];
};

const selectProduct = (product) => {
  productStore.setProduct(product);
  router.push(`product/1`);
};

const applySearch = () => {
  state.isSearchActive = true;
};
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
