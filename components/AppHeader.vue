<template>
  <div class="d-flex flex-column align-center">
    <h2>
      <slot></slot>
    </h2>
    <span v-if="active" class="d-flex justify-center w-25">
      <img src="/separator.png" />
    </span>
  </div>
</template>

<script setup>
defineProps({
  active: {
    type: Boolean,
    default: true,
  },
});
</script>

<style lang="scss" scoped>
div {
  width: fit-content;
}

span {
  height: 16px;
  width: 30%;
}
</style>
