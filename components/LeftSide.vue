<template>
    <LeftContainer>
        <div class="px-3 bg-primary shadow-lg sticky-top">
            <NavbarL />

            <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div v-for="img, index in projectsImg">
                        <div v-if="index == 0" class="carousel-item active" data-bs-interval="10000">
                            <k-container>
                                <k-element>
                                    <img :src=img class="d-block img-fluid col-4  ">
                                    <div class="fs-3">
                                        teste
                                    </div>
                                </k-element>
                            </k-container>
                        </div>
                        <div v-else class="carousel-item " data-bs-interval="10000">
                            <k-container>
                                <k-element>
                                    <img :src=img class="d-block img-fluid col-4 ">
                                    <div class="fs-3">
                                        teste2
                                    </div>
                                </k-element>
                            </k-container>

                        </div>



                    </div>

                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval"
                    data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button ref="clickOnload" class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval"
                    data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
                <div class="progress" style="height: 2px;">
                <div class="progress-bar bg-success slideTimer" role="progressbar"
                    aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            </div>
        </div>
    </LeftContainer>
</template>

<script setup>
let projectsImg = [
    "logo.png",
    "logo.png",
    "logo.png"
]
projectsImg = projectsImg.map(element => "/_nuxt/assets/" + element)

let click = ref("clickOnload")

console.log(click)
</script>

<style lang="scss" scoped>
@keyframes slideTime {
    0% {
        width: 0%;
    }

    100% {width: 100%;}
}

.slideTimer{
    animation: slideTime 20s infinite;
}
</style>