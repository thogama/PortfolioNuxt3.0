import * as bootstrap from "bootstrap";

export default defineNuxtPlugin(() => ({
    provide: {
        bootstrap: {
            bootstrap,
        },
    },
}));