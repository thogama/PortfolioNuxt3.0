
<template>
    <div class="row ">

        <div class="text-white col d-flex align-items-center flex-column justify-content-evenly">
            <k-container>
                <k-element>
                    <div style="width:inherit"
                        class="rounded justify-content-start d-flex bg-secondary align-items-center">
                        <Icon class="border m-2 border-dark fs-1" name="grommet-icons:linkedin" />
                        <a target="_blank" href="https://br.linkedin.com/in/alan-gama4" class="mx-1 fs-5 text-white">
                            @alangam4
                        </a>
                    </div>
                </k-element>
            </k-container>

            <k-container>
                <k-element>
                    <div style="width:inherit" class="rounded justify-content-start d-flex bg-info align-items-center">
                        <Icon class="border m-2 fs-1" name="grommet-icons:github" />
                        <a target="_blank" href="https://github.com/thogama" class="text-white mx-1 fs-5">
                            @thogama
                        </a>
                    </div>
                </k-element>
            </k-container>


            <k-container>
                <k-element>
                    <div style="width:inherit" class="rounded justify-content-start d-flex bg-white align-items-center">
                        <Icon class="border border-success p-1 text-success m-2 fs-1 bg-black"
                            name="simple-icons:upwork" />
                        <a target="_blank" class=" text-dark mx-1 fs-5">
                            Alan G.
                        </a>
                    </div>
                </k-element>
            </k-container>


        </div>


        <div class="col">
            <img class="rounded border img-fluid" src="~/assets/IA-59 (1).jpg" />

        </div>





    </div>
</template>
<script lang="ts" setup>
let redirect = (url: string) => {
    window.location.href = 'url';

}
</script>

<style scooped>
.img-fluid {
    clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);

}
</style>