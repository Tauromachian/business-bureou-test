<template>
  <AppSection>
    <div class="gap-15 images">
      <VImg class="h-fit principal-image" src="slider-1.jpg"></VImg>
      <div class="col-span-2 text-center secondary-section">
        <VImg class="h-fit" src="girls-power.jpg"></VImg>
        <h2>Girl Power</h2>
        <p>For a colorful summer</p>
      </div>
    </div>
  </AppSection>
</template>

<script setup></script>

<style lang="scss" scoped>
.images {
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
}

.principal-image {
  grid-column: span 6;
}

@media screen and (min-width: 768px) {
  .principal-image {
    grid-column: span 4;
  }
}

.secondary-section {
  grid-column: span 6;
}

@media screen and (min-width: 768px) {
  .secondary-section {
    grid-column: span 2;
  }
}

.h-fit {
  height: fit-content;
}
</style>
