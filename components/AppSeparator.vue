<template>
  <span class="d-flex justify-center">
    <img v-if="active" src="/separator.png" />
  </span>
</template>

<script setup>
defineProps({
  active: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="scss" scoped>
span {
  height: 12px;
  width: 50%;
}

img {
  width: 100%;
}
</style>
