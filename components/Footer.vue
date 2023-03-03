<template>
    <div style="background-image: linear-gradient(45deg, #009688, #4caf50);" class="text-center container-fluid text-white">
        <div class="fs-4 row bg-dark">
            <div class="text-center p-3">
                <Icon class="fs-4" name="tabler:diamonds" />
                Where to find me
                <Icon class="fs-4" name="tabler:diamonds" />
            </div>
        </div>
        <div class="fs-4 py-3 justify-content-evenly d-flex ">
            <div v-for="data in icons">
                <div v-if="!!data.link">
                    <a :href="data.link">
                        <Icon class="text-white" :name="data.icon" />
                    </a>
                </div>
                <div v-else>
                    <Icon :name="data.icon" />

                </div>
            </div>
        </div>
    </div>
</template>

<script lang=ts setup>

let icons: { icon: string, link?: string }[] =
    [
        { icon: "teenyicons:instagram-outline", link: "https://www.instagram.com/tho_gama/" },
        { icon: "fa:linkedin-square", link: "https://www.linkedin.com/in/alan-gama-devs/" },
        { icon: "simple-icons:upwork", link: "https://www.upwork.com/freelancers/~01c65b24230c0622b6?viewMode=1" },
        { icon: "nimbus:whatsapp", link: "https://wa.me/5579991743525" },
        { icon: "grommet-icons:mail", link: "mailto:dethfiregrasp@gmail.com" }
    ]

</script>

<style lang="scss" scoped></style>