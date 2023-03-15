// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: false,
    css: ["~~/sass/main.scss"],
    modules: ['nuxt-icon', '@nuxtjs/i18n'],
    i18n: {
        detectBrowserLanguage: {
            alwaysRedirect: true
        },
        locales: [
            { code: 'en', name: 'English', iso: 'en-US', file: 'en-US.json' },
            { code: 'pt', name: 'Português', iso: 'pt-BR', file: 'ptBR.json' }
        ],
        lazy: true,
        langDir: 'locales/',
        vueI18n: {
            fallbackLocale: 'en'
        },
        vueI18nLoader: true

    },
    nitro: {
        preset: "firebase"
    }
})
