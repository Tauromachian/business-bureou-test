<template>
  <component
    :is="downloadLink ? 'a' : 'button'"
    :href="downloadLink"
    type="button"
    role="button"
    class="justify-center items-center px-6 py-2 button"
    :class="{ ...buttonClasses, ...sizeClasses }"
    v-bind="$attrs"
    :style="buttonStyles"
  >
    <span class="base-button__content">
      <VIcon v-if="icon" :icon="icon"></VIcon>
      <slot v-else> </slot>
    </span>
  </component>
</template>

<script>
import { getCssColor, getContrast } from "@/utils/colors";

export default {
  name: "BaseButton",
  props: {
    value: {
      type: Boolean,
      default: false,
    },

    icon: {
      type: Boolean,
      default: false,
    },

    color: {
      type: String,
      default: "",
    },

    size: {
      type: String,
      default: "regular",
      validator(value) {
        if (value === "") return true;
        return ["regular", "x-large"].includes(value);
      },
    },
  },
  computed: {
    buttonClasses() {
      const classes = {};
      if (this.icon) {
        classes["icon-button"] = true;
      }

      return classes;
    },

    buttonStyles() {
      const color = getCssColor(this.color) ?? "#ffffff";

      const colorContrast = getContrast(color);

      return [{ "background-color": color, color: colorContrast }];
    },

    sizeClasses() {
      if (this.size === "x-large") return { "h-16": true, "px-7": true };

      return { "h-9": true, "px-4": true };
    },
  },
};
</script>

<style scoped>
.button {
  grid-template-areas: "prepend content";
  grid-template-columns: max-content auto;
  background-color: rgb(var(--v-theme-primary));
  outline: none;
  display: grid;
  position: relative;
  text-transform: uppercase;
  font-family: var(--primary-font-family);
}
.button:hover {
  background-color: var(--color-secondary) !important;
}

.base-button__prepend {
  grid-area: prepend;
}
.base-button__content {
  grid-area: content;
}

.icon-button {
  padding-top: 0.1em;
  padding-left: 1em !important;
  padding-right: 1em !important;
}
</style>
