<template>
  <header class="d-flex flex-column align-center">
    <AppLogo></AppLogo>
    <div class="d-flex gap-5 nav-links align-center" v-once>
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
        <i class="mdi text-h5" :class="`mdi-${link.icon}`"> </i>
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
    { icon: "magnify", to: "" },
  ],
});
</script>

<style lang="scss" scoped>
.nav-links {
  text-transform: uppercase;
  font-family: var(--primary-font-family);
}
</style>
