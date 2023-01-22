<template>
    <nav class="navbar">
        <div class="container justify-content-center">
            <div id="naver-scroll" class="navbar-nav d-flex flex-row simple-list-example-scrollspy">
                <a href="#aboutme" class="btn text-secondary mx-2 fw-bold nav-item " v-for="item in items">
                    {{ item }}
                </a>
            </div>
        </div>
    </nav>
</template>

<script setup lang="ts">
let items = ["About me", "opcao2", "opcao3", "opcao4"]
</script>
<style scooped>
li {
    text-decoration: none;
}
</style>