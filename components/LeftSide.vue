<template>
    <LeftContainer>
        <div class="bg-primary shadow-lg sticky-top">

            <div class="bg-secondary">
                <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
                            aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                            aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                            aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div v-for="item, index in carouselsItems">
                            <div v-if="index == 0" class="carousel-item active">
                                <div class="row p-4 pt-0 ">
                                    <div class="fs-2 text-center">
                                        {{ item.title }}
                                    </div>
                                    <div class="col p-1">
                                        <img :src="`/` + item.images[0]" class="my-1 img-fluid rounded">
                                        <img :src="`/_nuxt/assets/` + item.images[1]" class="my-1 img-fluid rounded">

                                    </div>
                                    <div class="col p-1">
                                        <img :src="`/_nuxt/assets/` + item.images[2]" class="my-1 img-fluid rounded">
                                        <img :src="`/_nuxt/assets/` + item.images[3]" class="my-1 img-fluid rounded">

                                    </div>
                                </div>
                                <div class="carousel-caption bg-dark p-1 d-none d-md-block">
                                    <h5>{{ item.label }}</h5>
                                    <p>{{ item.placeholder }}</p>
                                </div>
                            </div>
                            <div v-else class="carousel-item">
                                <div class="row p-4 pt-0 ">
                                    <div class="fs-2 text-center">
                                        {{ item.title }}
                                    </div>
                                    <div class="col p-1">
                                        <img :src="`/_nuxt/assets/` + item.images[0]" class="my-1 img-fluid rounded">
                                        <img :src="`/_nuxt/assets/` + item.images[1]" class="my-1 img-fluid rounded">

                                    </div>
                                    <div class="col p-1">
                                        <img :src="`/_nuxt/assets/` + item.images[2]" class="my-1 img-fluid rounded">
                                        <img :src="`/_nuxt/assets/` + item.images[3]" class="my-1 img-fluid rounded">

                                    </div>
                                </div>
                                <div class="carousel-caption bg-dark p-1 d-none d-md-block">
                                    <h5>{{ item.label }}</h5>
                                    <p>{{ item.placeholder }}</p>
                                </div>
                            </div>
                        </div>


                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                        data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                        data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    </LeftContainer>
</template>

<script lang="ts" setup>
let carouselsItems: { title: string, images: string[], label: string, placeholder: string }[] = [
    {
        title: "Video Chat app",
        images: [
            "leftfoto.jpg",
            "leftfoto.jpg",
            "leftfoto.jpg",
            "leftfoto.jpg"
        ],
        label: "Made using WebRTC and Nuxt js",
        placeholder: "Take a look at url"
    },
    {
        title: "app2",
        images: [
            "leftfoto.jpg",
            "leftfoto.jpg",
            "leftfoto.jpg",
            "leftfoto.jpg"
        ],
        label: "label app 2",
        placeholder: "Take a look url 2"
    },
    {
        title: "app2",
        images: [
            "leftfoto.jpg",
            "leftfoto.jpg",
            "leftfoto.jpg",
            "leftfoto.jpg"
        ],
        label: "label app 2",
        placeholder: "Take a look url 2"
    }
]
</script>

<style lang="scss" scoped></style>