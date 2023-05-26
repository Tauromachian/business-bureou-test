<template>
  <div class="d-flex flex-column align-center">
    <h2>
      <slot></slot>
    </h2>
    <span class="d-flex justify-center w-25">
      <VImg src="/separator.png"></VImg>
    </span>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
div {
  width: fit-content;
}
</style>
