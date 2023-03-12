<template >
    <div class=" my-2 text-center col-sm-6 justify-content-center d-flex flex-column pe-sm-0">

        <div class="card ">
            <div class="bg-dark text-white card-header  fs-4  ">
                {{ $t("Professional") }}
            </div>

            <div class="card-body bg-danger shadow-lg d-flex justify-content-around align-items-center rounded-bottom">
                <div class=" ">
                    <div v-for="xp in experiences" class="">
                        <div class="py-2 fs-4 ">
                            {{ $t(xp.name) }}

                        </div>
                        <a data-bs-toggle="modal" :data-bs-target="`#detail` + xp.name.replaceAll(` `, ``)"
                            class="btn  btn-success">{{ $t("Details") }}
                        </a>

                        <div class="modal  fade" :id="`detail` + xp.name.replaceAll(` `, ``)" tabindex="-1"
                            :aria-labelledby="`#detail` + xp.name" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered">
                                <div class="modal-content">
                                    <div class="modal-header bg-dark text-white">
                                        <h1 class="modal-title p-2 fs-5 fw-semibold" :id="`#detail` + xp.name">
                                            {{ $t("My Experience as") }}
                                            {{ $t(xp.name) }}</h1>
                                        <button type="button" class="btn-close border bg-danger" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <div class="bg-info d-flex flex-column  p-3 text-justify text-secondary fw-thin  modal-body">
                                        <div class="fs-4 border rounded p-2">
                                            {{ $t(xp.detail) }}
                                            <div class="text-center fw-bolder">
                                                <br />+ {{ xp.years }} {{ $t("years experience") }}
                                            </div>

                                        </div>
                                        <a class="btn  my-3 btn-success" target="_blank" :href=xp.link>
                                            {{ $t("Take a look at") }}
                                            <Icon class="fs-3" :name="xp.icon" />
                                        </a>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
<script lang="ts" setup>
let calcYears = (input: string) => {
    let date = new Date(input);
    var date2 = new Date();
    let date3 = (date2.getTime() - date.getTime()) / (3600 * 24 * 1000 * 360);
    return Math.floor(date3)
}

let experiences: Array<{ name: string, detail: string, years: any, link: string, icon: string }> = [
    {
        name: "Freelancer",
        detail: "Work as Fullstack developer on the Upwork's platform mainly",
        years: calcYears("01/01/2020"),
        link: "https://www.upwork.com/freelancers/~01c65b24230c0622b6?viewMode=1",
        icon: "simple-icons:upwork"
    },
    {
        name: "Software Enginner",
        detail: "I've been working as a Software Engineer in private projects since 2020, in a startup called Neurometa (from 2020 to 2021) and I've also developed for DITIN, a Brazilian government institution",
        years: calcYears("01/01/2021"),
        link: "https://www.linkedin.com/in/alan-gama-devs",
        icon: "bi:linkedin"

    },
]

</script>