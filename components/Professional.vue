<template >
    <div class=" my-2 text-center col-sm-6 justify-content-center d-flex flex-column">

        <div class="card ">
            <div class="card-header  fs-4  ">
                Professional
            </div>

            <div class="card-body border bg-dark text-white rounded-bottom">
                <div class=" ">
                    <div v-for="xp in experiences" class="">
                        <div class="py-2 fs-5 text-nowrap">
                            {{ xp.name }}

                        </div>
                        <div data-bs-toggle="modal" :data-bs-target="`#detail` + xp.name.replaceAll(` `, ``)"
                            class="btn btn-sm btn-success">Details
                        </div>

                        <div class="modal  fade" :id="`detail` + xp.name.replaceAll(` `, ``)" tabindex="-1"
                            :aria-labelledby="`#detail` + xp.name" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered">
                                <div class="modal-content">
                                    <div class="modal-header bg-success text-white">
                                        <h1 class="modal-title p-2 fs-5 fw-semibold" :id="`#detail` + xp.name">My
                                            Experience
                                            as {{
                                                xp.name
                                            }}</h1>
                                        <button type="button" class="btn-close border bg-danger" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <div class="bg-info  p-3 text-justify text-secondary fw-thin  modal-body">
                                        <div class="fs-4 border rounded p-2">
                                            {{ xp.detail }}
                                            <div class="text-center fw-bolder">
                                                <br />+ {{ xp.years }} years experience
                                            </div>

                                        </div>
                                        <a class="btn  my-3 btn-secondary" target="_blank" :href=xp.link>
                                            Take a look at
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
        detail: "Work as Software Engineer on private projects since 2020, a startup called Neurometa(from 2020 to 2021), also i actually develop for DITIN a brazilian government institution",
        years: calcYears("01/01/2021"),
        link: "https://www.linkedin.com/in/alan-gama-devs",
        icon: "bi:linkedin"

    },
]

</script>