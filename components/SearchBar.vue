<template>
  <VForm @submit.prevent="emit('submit')" class="d-flex">
    <BaseTextField
      label="Search products..."
      class="base-text"
      v-model="search"
    ></BaseTextField>
    <BaseButton type="submit" icon="mdi-magnify" color="accent"></BaseButton>
  </VForm>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  modelValue: {
    type: String,
    default: "",
  },
});
const emit = defineEmits(["submit", "update:modelValue"]);

const search = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});
</script>

<style lang="scss" scoped>
.base-text {
  border-left: 0;
  border-right: 0;
}
</style>
