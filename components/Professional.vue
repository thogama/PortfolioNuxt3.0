<template >
    <div class=" my-2 text-center col-sm-6 justify-content-center d-flex flex-column">

        <div class="card ">
            <div class="card-header  fs-4  ">
                Professional
            </div>

            <div class="card-body border bg-dark text-white rounded-bottom">
                <div v-for="link in links" class="d-flex justify-content-around align-items-center my-4">
                    <Icon class="fs-1" :href=link.href :name=link.icon />
                    <div class="text-white">
                        {{ link.name }}
                    </div>
                </div>
            </div>
        </div>

    </div>

</template>
<script lang="ts" setup>
let links: Array<{ name: string, icon: string, href: string }> = [
    {
        name: "Linkedin",
        icon: "logos:linkedin-icon",
        href: "https://www.linkedin.com/in/alan-gama-devs/"
    },
    {
        name: "Upwork",
        icon: "cib:upwork",
        href: ""
    },
]

</script>