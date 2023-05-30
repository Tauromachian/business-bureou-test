<template>
  <div
    class="links-container"
    :class="{ 'links-container--hidden': !computedMenu }"
  >
    <BaseButton
      class="close-button"
      icon="mdi-close"
      @click="computedMenu = false"
      color="accent"
    >
    </BaseButton>

    <NuxtLink
      v-for="(link, index) in links"
      :key="`small-screen-link-${index}`"
      :to="{ name: link.name }"
      @click="computedMenu = false"
    >
      {{ link.text }}
    </NuxtLink>
  </div>
</template>

<script setup>
import { watch, computed } from "vue";

const props = defineProps({
  links: {
    type: Array,
    default: () => [],
  },
  menu: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits("update:menu");

const computedMenu = computed({
  get() {
    return props.menu;
  },
  set(val) {
    emit("update:menu", val);
  },
});
//github.com/Tauromachian/business-bureou-test
https: watch(
  () => computedMenu.value,
  (newValue) => {
    if (newValue) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }
);
</script>

<style lang="scss" scoped>
.links-container {
  overflow: hidden;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 800;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  transition-duration: 0.2s;
  gap: 1em;
  font-size: 1.5rem;

  .close-button {
    position: fixed;
    top: 12px;
    right: 16px;
    z-index: 60;
  }
  a {
    color: black;
  }
}

h1 {
  text-transform: uppercase;
  margin: 0;
  text-align: center;
  font-size: 5.2rem;
  line-height: 70px;
  padding: 0 2rem;
  font-weight: 400;
  margin-bottom: 0;

  span {
    color: var(--brand-color);
  }
}

h3 {
  margin: 0;
  color: white;
  font-family: "Corbel";
  font-size: 1.4rem;
  font-style: italic;
}

.links-container--hidden {
  transform: translateX(100%);
}
</style>
