<template>
  <VBtn variant="tonal" class="rounded-0 button">
    <span class="border-dashed py-1 px-2"> </span>
    <slot></slot>
  </VBtn>
</template>

<script setup></script>

<style lang="scss" scoped>
span {
  position: absolute;
  top: 4px;
  right: 4px;
  left: 4px;
  bottom: 4px;
  border-width: 2px;
}
</style>
