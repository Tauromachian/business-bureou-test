export default defineNuxtConfig({
  modules: ["@invictus.codes/nuxt-vuetify"],
  vuetify: {
    /* vuetify options */
    vuetifyOptions: {
      // @TODO: list all vuetify options
    },
    moduleOptions: {
      /* nuxt-vuetify module options */
      treeshaking: true | false,
      useIconCDN: true | false,
      /* vite-plugin-vuetify options */
      styles: true,
      autoImport: true | false,
    },
  },
  css: ["~/assets/scss/main.scss"],
});
