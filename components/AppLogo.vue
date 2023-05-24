<template>
  <div class="icon-holder">
    <img v-if="whiteVariant" src="/logo1.png" alt="logo" />
    <img v-else src="/logo.png" alt="logo" />
  </div>
</template>

<script setup>
defineProps({
  whiteVariant: {
    type: Boolean,
    default: false,
  },
});
</script>

<style scoped>
.icon-holder {
  text-align: center;
  border-radius: 50%;
  width: 18em;
  height: 18em;
  margin-bottom: 1em;
}

img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
</style>
