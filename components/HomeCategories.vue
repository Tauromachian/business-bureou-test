<template>
  <div class="d-flex justify-center">
    <AppCard flat variant="outlined" class="w-100 border-dot rounded-0">
      <div class="d-flex mx-8 justify-center text-center">
        <VRow>
          <VCol
            cols="12"
            sm="6"
            md="3"
            class="py-8 px-15 cursor-pointer"
            v-for="(item, index) in state.items"
            :key="`image-${index}`"
            @click="selectedCategories = item.value"
          >
            <VImg :src="item.image"></VImg>
            <h5 class="mt-4">{{ item.text }}</h5>
          </VCol>
        </VRow>
      </div>
    </AppCard>
  </div>
</template>

<script setup>
import { reactive, computed } from "vue";

const props = defineProps({
  modelValue: {
    type: Array,
    default: () => [],
  },
});

const state = reactive({
  items: [
    { image: "baby.png", text: "Baby & toddler", value: ["babies"] },
    { image: "girl.png", text: "For Girls", value: ["girls"] },
    { image: "boy.png", text: "For Boys", value: ["boys"] },
    { image: "toys.png", text: "Home & Toys", value: ["toys", "home"] },
  ],
});

const emit = defineEmits(["update:modelValue"]);

const selectedCategories = computed({
  get() {
    return props.modelValue;
  },
  set(val) {
    emit("update:modelValue", val);
  },
});
</script>
