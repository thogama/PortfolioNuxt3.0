<template >
    <div class=" my-2 text-center col-sm-6 justify-content-center d-flex flex-column">

        <div class="card ">
            <div class="card-header  fs-4  ">
                Professional
            </div>

            <div class="card-body border bg-dark text-white rounded-bottom">
                <ul class="list-group">
                    <li v-for="xp in experiences" class="list-group-item">
                        <div class="">
                            {{ xp.name }}

                        </div>
                         <div data-bs-toggle="modal" :data-bs-target="`#detail` + xp.name" class="btn btn-success">Detail
                        </div> 
                        
                        <Detail :name="xp.name" />
                    </li>
                </ul>
            </div>
        </div>

    </div>

</template>
<script lang="ts" setup>
let experiences: Array<{ name: string, detail: string, years: number }> = [
    {
        name: "Freelancer",
        detail: "",
        years: 3
    },
    {
        name: "Freelancer",
        detail: "",
        years: 3
    },
]

</script>