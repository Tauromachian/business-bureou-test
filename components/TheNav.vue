<template>
  <header class="d-flex flex-column align-center">
    <AppLogo class="my-n15"></AppLogo>
    <div class="d-flex gap-6 nav-links align-center" v-once>
      <NuxtLink
        v-for="(link, index) in state.links"
        :key="`link-${index}`"
        :to="{ name: link.name }"
        class="w-fit"
      >
        <span
          class="d-flex flex-column align-center"
          :class="{ active: $route.name === link.name }"
        >
          {{ link.text }}
          <AppSeparator :active="$route.name === link.name"> </AppSeparator>
        </span>
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
    { text: "Home", name: "index" },
    { text: "Shope Features", name: "" },
    { text: "Clothes", name: "" },
    { text: "Pages", name: "" },
    { text: "Shortcodes", name: "" },
    { text: "Post types", name: "" },
  ],
});
</script>

<style lang="scss" scoped>
.nav-links {
  text-transform: uppercase;
  font-family: var(--primary-font-family);
}

.w-fit {
  width: fit-content;
}

.active {
  color: rgb(var(--v-theme-accent));
}
</style>
