<template>
    <section id="aboutme" class="row bg-info">

        <div class="bg-secondary my-4 text-white p-1 text-center section ">
            {{ $t("About me") }}
        </div>
        <img class="form img-fluid p-0 pb-3 rounded-top" src="/leftfoto.jpg" />
        <div class="shadow-lg d-flex bg-dark text-white rounded-bottom">

            <div class="col-6 d-flex flex-column justify-content-evenly">

                <div class="p-2 text-start text-nowrap  x-2" v-for="item in items">

                    <Icon class="text-dark fs-3" :name=item.icon />

                    {{ $t(item.message) }}


                </div>
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