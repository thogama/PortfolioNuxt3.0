<template>
    <section id="stacks" class="row">

        <div class="bg-secondary text-white  my-4  p-1 text-center section ">
            {{ $t("Stacks and Technologies") }}
        </div>
        <div class="d-flex justify-content-evenly flex-wrap shadow bg-danger rounded">
            <div class="k-el p-2" v-for="icon, index in icons">
                <k-container :active=false class="d-lg-none d-sm-block p-1">
                    <k-element class="">

                        <Icon class=" bg-info rounded m-1 p-1 fs-1" :name="icon" />

                    </k-element>
                </k-container>
                <k-container class="d-none d-lg-block p-1">
                    <k-element class="">
                        <Icon class=" bg-info rounded m-1 p-1 fs-1" :name="icon" />

                    </k-element>
                </k-container>
            </div>

        </div>

    </section>
</template>
<script lang="ts" setup>
let icons: Array<string> = [
    "logos:typescript-icon",
    "logos:javascript",
    "logos:nodejs-icon",
    "logos:vue",
    "logos:bootstrap",
    "logos:laravel",
    "logos:nuxt-icon",
    "logos:sass",
    "logos:html-5",
    "logos:css-3",
    "logos:react",
    "logos:mysql",
    "logos:python",
    "mdi:github",
    "logos:firebase",
    "skill-icons:heroku",
    "logos:angular-icon",
    "logos:aws"




]
</script>
<style lang="scss">
.k-el {

    transform: none;
}
</style>