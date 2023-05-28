<template>
  <AppCard class="w-100">
    <div class="text-center">
      <h1>Blue Blouse</h1>
      <div class="d-flex justify-center">
        <VBreadcrumbs
          :items="['Home', 'For Girls', 'Blue Blouse']"
          divider="."
          active-class="active-link"
        ></VBreadcrumbs>
      </div>
    </div>
  </AppCard>
</template>

<script setup></script>

<style lang="scss" scoped>
h1 {
  font-family: var(--accent-font-family);
}

.active-link {
  background-color: rgb(var(--v-theme-accent));
}
</style>
