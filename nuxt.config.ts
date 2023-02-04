// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: false,
    css: ["~~/sass/main.scss"],
    modules: ['nuxt-icon'],
    nitro: {
        preset: "firebase"
    }
})
