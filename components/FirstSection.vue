<script lang="ts" setup>


function invert() {
    let image = document.getElementById("image")
    if (image!.classList.contains("shape")) {
        image!.classList.remove("shape")
    }
    else
        image!.classList.add("shape")
}

</script>
<template>
    <div class="container">
        <img id="image" class="img-fluid" src="~/assets/IA-59 (1).jpg" />
        <div class="form-check form-switch">
            <input @click="invert()" class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked"
                checked>
        </div>
    </div>

</template>


<style scooped>
@keyframes example {
    0% {
        clip-path: circle(50% at 50% 50%);
    }

    50% {
        clip-path: circle(0% at 50% 50%);
    }

    100% {
        clip-path: circle(50% at 50% 50%);
    }
}

.shape {
    animation: 0.5s ease example;
}
</style>