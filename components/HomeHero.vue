<template>
  <AppSection>
    <div class="gap-15 images">
      <VImg class="h-fit col-span-4" src="slider-1.jpg"></VImg>
      <div class="col-span-2 text-center">
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

.col-span-4 {
  grid-column: span 4;
}
.col-span-2 {
  grid-column: span 2;
}

.girls-power {
  height: fit-content;
}

.h-fit {
  height: fit-content;
}
</style>
