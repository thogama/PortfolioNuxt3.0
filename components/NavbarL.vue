<template>
    <nav class="navbar ">
        <div class="container justify-content-end">
            <div class="navbar-nav d-flex flex-row">
                <div class="btn mx-3 btn-primary nav-item " v-for="item in items">
                    {{ item }}
                </div>
            </div>
        </div>
    </nav>
</template>

<script setup lang="ts">
let items = ["opcao1", "opcao2", "opcao3","opcao4"]
</script>
<style scooped>
li {
    text-decoration: none;
}
</style>