import { createI18n } from 'vue-i18n'
import ptbr from "../locales/pt-br.json"
import en from "../locales/en.json"

export default defineNuxtPlugin(({ vueApp }) => {
    const i18n = createI18n({
        legacy: false,
        globalInjection: true,
        locale: 'pt-br',
        fallbackLocale: 'en',
        messages: {
            "pt-br": ptbr,
            "en": en
        }
    })
    vueApp.use(i18n)
})