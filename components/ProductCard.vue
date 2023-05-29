<template>
  <VCard flat class="text-center rounded-0">
    <VImg :src="product.image" aspect-ratio="1"></VImg>
    <VCardSubtitle class="mt-4">
      <h4 class="category text-accent">
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
    <VRating
      v-if="showRating"
      :model-value="product.rating"
      density="compact"
      color="accent"
      readonly
    ></VRating>
  </VCard>
</template>

<script setup>
defineProps({
  product: {
    type: Object,
    default: () => ({}),
  },
  showRating: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="scss" scoped></style>
