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
            class="mb-n4"
            solo
          ></SearchBar>
        </div>

        <!-- Categories -->
        <div>
          <h2 class="mb-0">Categories</h2>
          <AppCard class="w-100">
            <AppCardBody>
              <table class="w-100 text-left dotted-table">
                <tr
                  v-for="(category, index) in state.categories"
                  :key="`home-category-${index}`"
                >
                  <th class="text-accent2">{{ category.name }}</th>
                  <td class="text-end">({{ category.value }})</td>
                </tr>
              </table>
            </AppCardBody>
          </AppCard>
        </div>

        <!-- Best Sellers -->
        <div>
          <h2 class="mb-0">Best Sellers</h2>
          <AppCard class="mt-0 border-dot w-100" variant="outlined" flat>
            <AppCardBody>
              <VList class="d-flex flex-column gap-6">
                <VListItem
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
                @click="submit"
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
            <VCard
              @click="$router.push('product/1')"
              flat
              class="mb-4 rounded-0 text-center"
            >
              <VImg :src="product.image" aspect-ratio="1"></VImg>
              <VCardSubtitle class="mt-4">
                <h4 class="category">
                  {{ product.categoryText }}
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
    </VRow>
  </AppSection>
</template>

<script setup>
import { reactive, computed } from "vue";

const props = defineProps({
  modelValue: {
    type: Array,
    default: () => [],
  },
});
const emit = defineEmits("update:modelValue");

const state = reactive({
  search: "",
  email: "",
  categories: [
    { name: "For Babies", value: 11 },
    { name: "For Boys", value: 19 },
    { name: "For Girls", value: 20 },
    { name: "For Home", value: 14 },
    { name: "For Play", value: 8 },
  ],
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
      categoryText: "Toys",
      category: "toys",
      price: "$10",
      image: "boys-8-1-580x870.jpg",
    },
    {
      name: "Product 2",
      categoryText: "Toys",
      category: "toys",
      price: "$20",
      image: "boys-8-580x870.jpg",
    },
    {
      name: "Product 3",
      categoryText: "Toys",
      category: "toys",
      price: "$30",
      image: "for-home-5-580x870.jpg",
    },
    {
      name: "Product 4",
      categoryText: "Toys",
      category: "toys",
      price: "$40",
      image: "for-home-5-580x870.jpg",
    },
    {
      name: "Product 5",
      categoryText: "Toys",
      category: "toys",
      price: "$50",
      image: "for-home-5-580x870.jpg",
    },
    {
      name: "Product 6",
      categoryText: "Toys",
      category: "toys",
      price: "$60",
      image: "girls-1-2-580x870.jpg",
    },
    {
      name: "Product 7",
      categoryText: "Toys",
      category: "toys",
      price: "$70",
      image: "girls-2-2-580x870.jpg",
    },
    {
      name: "Product 8",
      categoryText: "Toys",
      category: "toys",
      price: "$80",
      image: "girls-6-1-580x870.jpg",
    },
    {
      name: "Product 9",
      categoryText: "Toys",
      category: "toys",
      price: "$90",
      image: "girls-8-1-580x870.jpg",
    },
  ],
});

const selectedCategories = computed({
  get() {
    return this.modelValue;
  },
  set(val) {
    emit("update:modelValue", val);
  },
});

const selectedProducts = computed(() => {
  if (!selectedCategories.length) return state.products;

  return state.products.map((product) => {
    if (selectedCategories.includes(product.category)) return product;
  });
});

const submit = () => {};
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
