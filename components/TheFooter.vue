<template>
  <footer class="d-flex flex-column align-center" v-once>
    <AppLogo white-variant class="mt-10 mb-n12"></AppLogo>
    <div class="d-flex gap-5 footer-links">
      <NuxtLink
        v-for="(link, index) in state.links"
        :key="`link-${index}`"
        :to="link.to"
      >
        {{ link.text }}
      </NuxtLink>
    </div>
    <div class="d-flex gap-5 mt-5">
      <NuxtLink
        v-for="(social, index) in state.socials"
        :key="`link-${index}`"
        :to="social.to"
      >
        <i class="mdi text-h4" :class="`mdi-${social.icon}`"> </i>
      </NuxtLink>
    </div>
    <div class="mb-5 mt-8">
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
    { icon: "instagram", to: "" },
    { icon: "twitter", to: "" },
  ],
});
</script>

<style lang="scss" scoped>
footer {
  background-color: rgb(var(--v-theme-primary));
  color: rgb(var(--v-theme-neutral));

  --mask: radial-gradient(42.43px at 50% 60px, #000 99%, #0000 101%)
      calc(50% - 60px) 0/120px 100%,
    radial-gradient(42.43px at 50% -30px, #0000 99%, #000 101%) 50% 30px/120px
      100% repeat-x;

  -webkit-mask: var(--mask);
  mask: var(--mask);
}

.footer-links {
  text-transform: uppercase;
  font-family: var(--primary-font-family);
}

a {
  color: white;
}
</style>
