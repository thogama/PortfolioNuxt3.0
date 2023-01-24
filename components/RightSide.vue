<template>
    <RightContainer>
        <div class="px-3 shadow-lg bg-light text-center sticky-top">
            <NavbarR />
        </div>
        <div class="fs-1 special-font fw-bolder p-4">
            Alan <br />gamA
        </div>
        <div data-bs-spy="scroll" data-bs-target="#naver-scroll" data-bs-offset="0" data-bs-smooth-scroll="true"
            class="scrollspy-example text-black text-justify p-5">
            <div class="rounded mb-4    p-1" id="cititaion">
                <span> Luck does not exist. What you call luck is attention to detail.
                </span>
                <div class="text-end fw-bolder">
                    W. Churchill
                </div>
            </div>

            <section id="aboutme" class="row">

                <div class="bg-secondary my-4 text-white p-1 text-center section ">
                    About me
                </div>
                <div class="shadow-lg d-flex border border-secondary rounded">

                    <div class="col d-flex flex-column justify-content-evenly">

                        <div class="p-2 text-start text-secondary fw-bold px-0" v-for="item in items">
                            <Icon class="text-dark fs-3" :name=item.icon />

                            {{ item.message }}
                        </div>
                    </div>

                    <div class="col">
                        <img class="img-fluid circle-section rounded-circle" src="~/assets/AboutFoto.png" />
                    </div>
                </div>

            </section>
            <section id="stacks" class="row">

                <div class="bg-secondary text-white  my-4  p-1 text-center section ">
                    Stacks and Technologies
                </div>
                <div class="d-flex justify-content-evenly flex-wrap shadow bg-danger rounded">
                    <div  class=" p-2" v-for="icon, index in icons">
                        <k-container>
                            <k-element>

                                <Icon  class="bg-info rounded m-1 p-1 fs-1" :name="icon" />
                                
                            </k-element>
                        </k-container>
                    </div>

                </div>

            </section>

        </div>
    </RightContainer>
</template>

<script lang="ts" setup>

let items: Array<{ message: string, icon: string }> = [
    { message: "21 years old", icon: "twemoji:birthday-cake" },
    { message: "C.C Majoring", icon: "game-icons:graduate-cap" },
    { message: "+3 years experience", icon: "flat-color-icons:clock" }
]
let icons: Array<string> = [
    "logos:react",
    "logos:vue",
    "logos:nuxt-icon",
    "logos:bootstrap",
    "logos:laravel",
    "logos:sass",
    "logos:html-5",
    "logos:css-3",
    "logos:javascript",
    "logos:typescript-icon",
    "logos:nodejs-icon",
    "logos:mysql",
    "logos:python",
    "logos:prisma"



]
</script>

<style scoped>
.section {
    clip-path: polygon(2% 0, 98% 0, 100% 50%, 98% 100%, 2% 100%, 0% 50%);

}

.circle-section {
    clip-path: circle(45% at 50% 50%);
    transform: rotate(347deg);

}
</style>