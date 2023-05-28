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
    <span class="border-dash base-button__inside-border"></span>
    <span class="base-button__overlay"></span>
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

    textColor: {
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

      return [
        {
          "background-color": color,
          color: this.textColorComputed ?? colorContrast,
        },
      ];
    },

    textColorComputed() {
      const color = getCssColor(this.textColor);

      return color;
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
.base-button__prepend {
  grid-area: prepend;
}
.base-button__content {
  grid-area: content;
}

.base-button__inside-border {
  position: absolute;
  top: 3px;
  left: 3px;
  right: 3px;
  bottom: 3px;
  width: calc(100% - 6px);
}
.base-button__overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  background-color: currentColor;
  transition: all 0.1s linear;
}
.button:hover > .base-button__overlay {
  opacity: 0.08;
}

.icon-button {
  padding-top: 0.1em;
  padding-left: 1em !important;
  padding-right: 1em !important;
}
</style>
