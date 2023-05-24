export default defineNuxtConfig({
  modules: ["@invictus.codes/nuxt-vuetify"],
  vuetify: {
    /* vuetify options */
    vuetifyOptions: {
      // @TODO: list all vuetify options
    },
    moduleOptions: {
      /* nuxt-vuetify module options */
      treeshaking: true,
      useIconCDN: false,
      /* vite-plugin-vuetify options */
      styles: true,
      autoImport: true,
      vuetifyOptions: {
        theme: {
          themes: {
            light: {
              colors: {
                primary: "#FBB660",
                neutral: "#ffffff",
              },
            },
          },
        },
      },
    },
  },
  css: ["~/assets/scss/main.scss"],
});
