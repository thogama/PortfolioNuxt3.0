<template>
    <LeftContainer>
        <div class="px-3 bg-primary shadow-lg sticky-top">
            <NavbarL />

            <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div v-for="img,index in projectsImg" class="carousel-item active" data-bs-interval="1000">
                        <k-container>
                            <k-element>
                                <img :src=img class="d-block img-fluid col-4 ">
                                <div class="fs-3">
                                    teste
                                </div>
                            </k-element>
                        </k-container>

                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval"
                    data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval"
                    data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
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

console.log(projectsImg)

</script>

<style lang="scss" scoped>

</style>