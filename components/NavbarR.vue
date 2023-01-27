<template>
    <nav class="navbar">
        <div class="container justify-content-center">
            <div id="naver-scroll" class="align-items-center navbar-nav d-flex flex-row simple-list-example-scrollspy">
                <a :href=uncaptalize(item) class="btn text-secondary mx-2 fw-bold nav-item " v-for="item in items">
                    {{ item }}
                </a>
            </div>
        </div>
    </nav>
</template>

<script setup lang="ts">
let items = ["About me", "Stacks", "Qualification", "opcao4"]
let uncaptalize = (string: string) => {
    return "#" + string.toLowerCase().replace(" ", "")
}
</script>
<style scooped>
li {
    text-decoration: none;
}
</style>