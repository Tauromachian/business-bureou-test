export default defineNuxtConfig({
  ssr: false,
  app: {
    head: {
      title: "Kids R Us",
      htmlAttrs: {
        lang: "en",
      },

      meta: [
        {
          hid: "description",
          name: "description",
          content: "Kids e-commerce",
        },

        { property: "og:title", content: "Kids R Us" },
        { property: "og:site_name", content: "Kids R Us" },
        {
          property: "og:description",
          content: "Kids e-commerce",
        },
        { property: "og:type", content: "website" },
        {
          hid: "og:image",
          property: "og:image",
          content: "logo.png",
        },
        { property: "og:image:alt", content: "Image of the logo" },
        { property: "og:image:size", content: "300" },
        { property: "og:locale", content: "en_US" },
        { property: "og:copyright", content: "Kids store" },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "logo.png" },
        { rel: "preconnect", href: "https://fonts.googleapis.com/" },
        { rel: "preconnect", href: "https://fonts.gstatic.com/" },
        { rel: "dns-prefetch", href: "https://fonts.googleapis.com/" },
        { rel: "dns-prefetch", href: "https://fonts.gstatic.com/" },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Francois+One&family=Gilda+Display&family=Quicksand:wght@400;500&display=swap",
        },
      ],
    },
  },
  modules: ["@invictus.codes/nuxt-vuetify", "@pinia/nuxt"],

  vuetify: {
    /* vuetify options */
    vuetifyOptions: {
      theme: {
        themes: {
          light: {
            colors: {
              primary: "#FBB660",
              neutral: "#ffffff",
              accent: "#E5745D",
              accent2: "#496683",
              "gray-light": "#dfddda",
            },
          },
        },
      },
    },
    moduleOptions: {
      /* nuxt-vuetify module options */
      treeshaking: true,
      useIconCDN: true,
      /* vite-plugin-vuetify options */
      styles: true,
      autoImport: true,
    },
  },
  css: ["~/assets/scss/main.scss"],
});
