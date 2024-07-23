// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/icon", "@nuxt/ui"],
  css: ["@/public/styles/styles.css"],
  colorMode: {
    preference: "light",
    fallback: "light",
  },
});
