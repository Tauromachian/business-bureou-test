<template>
  <header class="d-flex flex-column align-center">
    <div>Logo</div>
    <div class="d-flex">
      <NuxtLink
        v-for="(link, index) in state.links"
        :key="`link-${index}`"
        :to="link.to"
      >
        {{ link.text }}
      </NuxtLink>
      <NuxtLink
        v-for="(link, index) in state.storeLinks"
        :key="`link-${index}`"
        :to="link.to"
      >
        {{ link.icon }}
      </NuxtLink>
    </div>
  </header>
</template>

<script setup>
import { reactive } from "vue";

const state = reactive({
  links: [
    { text: "Home", to: "" },
    { text: "Shope Features", to: "" },
    { text: "Clothes", to: "" },
    { text: "Pages", to: "" },
    { text: "Shortcodes", to: "" },
    { text: "Post types", to: "" },
  ],
  storeLinks: [
    { icon: "heart", to: "" },
    { icon: "cart", to: "" },
    { icon: "search", to: "" },
  ],
});
</script>
<style lang="scss" scoped></style>
