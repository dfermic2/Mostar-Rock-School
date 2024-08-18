// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/icon", "@nuxt/ui", "nuxt-viewport"],
  css: ["@/public/styles/styles.css"],
  runtimeConfig: {
    SENDGRID_API_KEY_MOSTAR_ROCK_SCHOOL:
      process.env.SENDGRID_API_KEY_MOSTAR_ROCK_SCHOOL,
  },
  colorMode: {
    preference: "light",
    fallback: "light",
  },
});
