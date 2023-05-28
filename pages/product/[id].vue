<template>
  <div class="d-flex justify-center">
    <ProductHeader class="mt-4 product-header"></ProductHeader>
  </div>
  <AppContainer>
    <ProductMainContent></ProductMainContent>
    <ProductInfoTab></ProductInfoTab>
    <ProductRelated></ProductRelated>
  </AppContainer>
</template>

<script setup></script>

<style lang="scss" scoped>
.product-header {
  max-width: 1400px;
}
</style>
