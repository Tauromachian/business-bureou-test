<template>
  <div
    v-if="!hidden"
    class="d-flex justify-center align-center pa-4 w-100 cookies-warning"
  >
    <p>
      This website uses cookies to improve your experience. We'll assume that
      you are ok with this but you can opt out any time you like.
    </p>
    <BaseButton
      hide-inside-border
      @click="hidden = true"
      color="#000000"
      class="button"
    >
      Accept
    </BaseButton>
  </div>
</template>

<script setup>
import { ref } from "vue";

const hidden = ref(false);
</script>

<style lang="scss" scoped>
.cookies-warning {
  position: fixed;
  bottom: 0;
  background-color: white;
  flex-direction: column;
}

@media screen and (min-width: 768px) {
  .cookies-warning {
    flex-direction: row;
  }
}

.button {
  align-self: flex-start;
}

@media screen and (min-width: 768px) {
  .button {
    align-self: unset;
    margin-left: 0.8em;
  }
}
</style>
