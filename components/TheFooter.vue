<template>
  <footer class="d-flex flex-column align-center" v-once>
    <AppLogo white-variant></AppLogo>
    <div>
      <NuxtLink
        v-for="(link, index) in state.links"
        :key="`link-${index}`"
        :to="link.to"
      >
        {{ link.text }}
      </NuxtLink>
    </div>
    <div class="d-flex">
      <NuxtLink
        v-for="(social, index) in state.socials"
        :key="`link-${index}`"
        :to="social.to"
      >
        {{ social.icon }}
      </NuxtLink>
    </div>
    <div>
      <p>
        Privacy policy/This is a sample website - cmsmaster&copy;2022/All rights
        reserved
      </p>
    </div>
  </footer>
</template>

<script setup>
import { reactive } from "vue";

const state = reactive({
  links: [
    { text: "Shop", to: "" },
    { text: "Sale", to: "" },
    { text: "Girls", to: "" },
    { text: "Boys", to: "" },
    { text: "Lookbook", to: "" },
    { text: "Contacts", to: "" },
  ],
  socials: [
    { icon: "facebook", to: "" },
    { icon: "twitter", to: "" },
    { icon: "instagram", to: "" },
  ],
});
</script>

<style lang="scss" scoped></style>
