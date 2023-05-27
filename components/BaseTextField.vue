<template>
  <div
    class="w-100 floating-label"
    :class="{
      'border-dotted': variant === 'dotted',
      'border-dashed': variant === 'dashed',
    }"
  >
    <input
      type="text"
      class="floating-input"
      id="name"
      name="name"
      placeholder=" "
    />
    <label for="name">{{ label }}</label>
  </div>
</template>

<script setup>
defineProps({
  label: {
    type: String,
    default: "",
  },
  variant: {
    type: String,
    default: "dotted",
  },
});
</script>

<style scoped>
.floating-label {
  position: relative;
  border: 2px;
  border-color: rgb(var(--v-theme-gray-light));
}

.floating-input {
  font-size: 16px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 5px;
  width: 100%;
  border: none;
}

.floating-input:focus {
  outline: none;
}

label {
  color: #999;
  font-size: 16px;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 0.2s ease all;
}

.floating-input:focus ~ label,
.floating-input:not(:placeholder-shown) ~ label {
  top: -20px;
  font-size: 14px;
}
</style>
