<script lang="ts" setup>

let state = useState("range", () => 0)

let a = () => { console.log(state.value) }

</script>
<template>
    <div class="container">
        <img @click="a()" class="shape img-fluid" src="~/assets/IA-59 (1).jpg" />
        <label for="customRange1" class="form-label">Example range</label>
        <input v-model="state" type="range" class="form-range" id="customRange1">

    </div>

</template>


<style>
.shape {
    clip-path: circle(50% at 50% 50%);

}
</style>