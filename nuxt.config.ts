// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: false,
    css: ["~~/sass/main.scss"],
    modules: ['nuxt-icon', '@nuxtjs/i18n'],
    i18n: {
        langDir: "locales",
        locales: [
            { code: 'en', iso: 'en-US', file: 'en-US' },
            { code: 'pt', iso: 'pt-BR', file: 'pt-BR' },
        ],
        defaultLocale: 'en',
        lazy: true,
        detectBrowserLanguage: {
            useCookie: true,
            cookieKey: 'i18n_redirected',
            alwaysRedirect: true,
            fallbackLocale: 'en',
        },
        vueI18n: {
            fallbackLocale: 'en',
        },
    },
    nitro: {
        preset: "firebase"
    }
})
