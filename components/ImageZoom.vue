<template>
  <div class="image-container">
    <VImg :src="src" class="zoom-image"> </VImg>
    <VImg :src="src" class="zoomed-image"> </VImg>
  </div>
</template>

<script setup>
import { onMounted } from "vue";

defineProps({
  src: {
    type: String,
    default: "",
  },
});

onMounted(() => {
  const zoomImage = document.querySelector(".zoom-image");
  const zoomedImage = document.querySelector(".zoomed-image");

  zoomImage.addEventListener("mouseover", () => {
    zoomedImage.style.visibility = "visible";
  });

  zoomImage.addEventListener("mouseout", () => {
    zoomedImage.style.visibility = "hidden";
  });
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
  pointer-events: none;
  z-index: 200;
  left: 280px;
  top: -200px;
  width: 300px;
  transform: scale(2);
  transform-origin: 0 0;
  visibility: hidden;
}
</style>
