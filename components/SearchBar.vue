<template>
  <VForm @submit.prevent="emit('submit')" class="d-flex">
    <BaseTextField label="Search products..." class="base-text"></BaseTextField>
    <BaseButton type="submit" icon="mdi-magnify" color="accent"></BaseButton>
  </VForm>
</template>

<script setup>
const emit = defineEmits(["submit"]);
</script>

<style lang="scss" scoped>
.base-text {
  border-left: 0;
  border-right: 0;
}
</style>
