<template>
  <header class="d-flex flex-column align-center">
    <AppLogo class="my-n15"></AppLogo>
    <div class="d-flex gap-6 nav-links align-center" v-once>
      <NuxtLink
        v-for="(link, index) in state.links"
        :key="`link-${index}`"
        :to="link.to"
      >
        {{ link.text }}
      </NuxtLink>
      <NuxtLink>
        <VIcon icon="mdi-heart-outline"></VIcon>
      </NuxtLink>
      <NuxtLink>
        <VBadge color="accent" content="0" offset-x="-6">
          <VIcon icon="mdi-cart-outline"></VIcon>
        </VBadge>
      </NuxtLink>
      <NuxtLink>
        <VIcon icon="mdi-magnify"></VIcon>
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
});
</script>

<style lang="scss" scoped>
.nav-links {
  text-transform: uppercase;
  font-family: var(--primary-font-family);
}
</style>
