<template >
    <div class=" my-2 text-center col-sm-6 justify-content-center d-flex flex-column">

        <div class="card ">
            <div class="card-header  fs-4  ">
                Professional
            </div>

            <div class="card-body border bg-dark text-white rounded-bottom">
                <ul class="list-group">
                    <li v-for="xp in experiences"
                        class="list-group-item d-flex align-items-center justify-content-between">
                        <div class="">
                            {{ xp.name }}

                        </div>
                        <div data-bs-toggle="modal" :data-bs-target="`#detail` + xp.name" class="btn btn-success">Detail
                        </div>
                        <div class="modal  fade" :id="`detail` + xp.name" tabindex="-1"
                            aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered">
                                <div class="modal-content">
                                    <div class="modal-header bg-primary text-white">
                                        <h1 class="modal-title fs-5 fw-semibold" :id="`#detail` + xp.name">My Experience
                                            as {{
                                                xp.name
                                            }}</h1>
                                        <button type="button" class="btn-close border bg-danger" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <div class="bg-info text-secondary fw-thin  modal-body">
                                        {{ xp.detail }} +{{ xp.years }}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
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

let experiences: Array<{ name: string, detail: string, years: any, link: string }> = [
    {
        name: "Freelancer",
        detail: "Work as Fullstack developer on the Upwork's platform mainly",
        years: calcYears("01/01/2020"),
        link: "",
    },
    {
        name: "Software Enginner",
        detail: "",
        years: calcYears("01/01/2022"),
        link: "",

    },
]

</script>