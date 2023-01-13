<script lang="ts" setup>


function invert() {
    let image = document.getElementById("image")
    if (image!.classList.contains("shape")) {
        image!.classList.remove("shape")
        image!.classList.add("reshape")
    }
    else {
        image!.classList.remove("reshape")

        image!.classList.add("shape")
    }
}

</script>
<template>
    <div style="height: 100vh;" class="container bg-dark">
        
                <div class="form-check form-switch">
                <input @click="invert()" class="form-check-input text-primary" type="checkbox" role="switch"
                    id="flexSwitchCheckChecked" checked>
            </div>
      
        <div class="row">
            <img id="image" class="img-fluid" src="~/assets/IA-59 (1).jpg" />
        </div>

    </div>

</template>


<style scooped>
@keyframes example {
    0% {
        clip-path: circle(50% at 50% 50%);
        opacity: 1;
    }

    50% {
        clip-path: circle(0% at 50% 50%);
        opacity: 0.5;
    }

    100% {
        clip-path: circle(50% at 50% 50%);
        opacity: 0;
    }
}

@keyframes example2 {
    100% {
        clip-path: circle(50% at 50% 50%);
        opacity: 1;
    }

    50% {
        clip-path: circle(0% at 50% 50%);
        opacity: 0.5;
    }

    0% {
        clip-path: circle(50% at 50% 50%);
        opacity: 0;
    }
}

.shape {
    animation: 0.5s ease example;
    opacity: 0;
    clip-path: circle(50% at 50% 50%);

}

.reshape {
    animation: 0.5s ease example2;
    opacity: 1;
    clip-path: circle(50% at 50% 50%);
    


}
</style>