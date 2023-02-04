<template>
    <section id="stacks" class="row">

        <div class="bg-secondary text-white  my-4  p-1 text-center section ">
            Stacks and Technologies
        </div>
        <div class="d-flex justify-content-evenly flex-wrap shadow bg-danger rounded">
            <div class=" p-2" v-for="icon, index in icons">
                <k-container class="p-1">
                    <k-element>

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
    "logos:firebase"



]
</script>