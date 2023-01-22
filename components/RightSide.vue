<template>
    <div class="col bg-info text-dark p-0">
        <div class="px-3 shadow-lg bg-light text-center sticky-top">
            <NavbarR />
        </div>
        <div class="fs-1 special-font fw-bolder p-4">
            Alan <br />gamA
        </div>

        <div data-bs-spy="scroll" data-bs-target="#naver-scroll" data-bs-offset="0" data-bs-smooth-scroll="true"
            class="scrollspy-example text-black text-justify p-5">
            <div class=" mb-5" id="cititaion">
                <span> Luck does not exist. What you call luck is attention to detail.
                </span>
                <div class="text-end fw-bold">
                    W. Churchill
                </div>
            </div>

            <section id="aboutme" class="row">

                <div class="bg-secondary text-white p-1 text-center section ">
                    About me
                </div>
                <div class="col d-flex flex-column justify-content-center">
                    <div class="btn text-secondary mx-2 fw-bold nav-item " v-for="item in items">
                        {{ item }}
                        <Icon name="grommet-icons:achievement" />
                    </div>
                </div>
                <div class="col my-4 ">
                    <img class="img-fluid circle-section rounded-circle border border-success"
                        src="~/assets/AboutFoto.png" />
                </div>

            </section>

        </div>
    </div>
</template>

<script setup>

let items = ["opcao1", "opcao2", "opcao3"]

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