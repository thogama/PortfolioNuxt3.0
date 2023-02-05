<template>
    <div style="background-image: linear-gradient(45deg, #009688, #4caf50);"
        class="text-center container-fluid text-white">
        <div class="fs-4 row">
            <div class="text-center mt-3">
                <Icon class="fs-4" name="tabler:diamonds" />
                Where to find me
                <Icon class="fs-4" name="tabler:diamonds" />
            </div>
        </div>
        <hr class="mx-4 " />
        <div class="fs-4 px-5 pb-3 justify-content-evenly d-flex ">
            <div v-for="data in icons">
                <k-container>
                    <k-element>
                        <div v-if="!!data.link">
                            <a :href="data.link">
                                <Icon class="text-white " :name="data.icon" />
                            </a>
                        </div>
                        <div v-else>
                            <Icon :name="data.icon" />

                        </div>


                    </k-element>
                </k-container>
            </div>
        </div>
    </div>
</template>

<script lang=ts setup>

let icons: { icon: string, link?: string }[] =
    [
        { icon: "teenyicons:instagram-outline" },
        { icon: "fa:linkedin-square" },
        { icon: "simple-icons:upwork" },
        { icon: "nimbus:whatsapp", link: "https://wa.me/5579991743525" },
        { icon: "mdi:email-fast", link: "mailto:dethfiregrasp@gmail.com" }
    ]

</script>

<style lang="scss" scoped>

</style>