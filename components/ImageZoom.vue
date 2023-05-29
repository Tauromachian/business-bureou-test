<template>
  <div class="image-container">
    <VImg :src="src" class="zoom-image"> </VImg>
    <VImg :src="src" class="zoomed-image"> </VImg>
  </div>
</template>

<script setup>
defineProps({
  src: {
    type: String,
    default: "",
  },
});
</script>

<style lang="scss" scoped>
.image-container {
  position: relative;
  width: 200px;
}

.zoom-image {
  width: 100%;
  cursor: pointer;
}

.zoomed-image {
  position: absolute;
  left: 220px;
  top: 0;
  width: 400px;
  transform: scale(2);
  transform-origin: 0 0;
  visibility: hidden;
}
</style>
