<template>
    <section id="aboutme" class="row">

        <div class="bg-secondary my-4 text-white p-1 text-center section ">
            About me
        </div>

        <div class="shadow-lg d-flex  rounded">

            <div class="col-6 d-flex flex-column justify-content-evenly">

                <div class="p-2 text-start text-nowrap  x-2" v-for="item in items">
                    <k-container>
                        <k-element>
                            <Icon class="text-dark fs-3" :name=item.icon />

                            {{ item.message }}
                        </k-element>
                    </k-container>

                </div>
            </div>

            <div class="col d-flex  align-items-center">
                <img class="img-fluid  circle-section rounded-circle" src="~/assets/AboutFoto.png" />
            </div>
        </div>



    </section>
</template>
<script lang="ts" setup>
let items: Array<{ message: string, icon: string }> = [
    { message: "21 years old", icon: "twemoji:birthday-cake" },
    { message: "C.C Majoring", icon: "twemoji:graduation-cap" },
    { message: "+3 years xp", icon: "flat-color-icons:clock" }
]
</script>

<style scooped>
.section {
    clip-path: polygon(2% 0, 98% 0, 100% 50%, 98% 100%, 2% 100%, 0% 50%);

}

.circle-section {
    clip-path: circle(45% at 50% 50%);
    transform: rotate(347deg);

}
</style>