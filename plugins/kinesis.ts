import { KinesisContainer, KinesisElement } from 'vue-kinesis'


export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.component("k-container", KinesisContainer),
        nuxtApp.vueApp.component("k-element", KinesisElement)
})