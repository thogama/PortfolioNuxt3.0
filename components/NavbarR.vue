<template>
    <nav class="navbar navbar-expand-lg">
        <div class="container justify-content-center">
            <div class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01"
                aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <div class=" btn">
                    <Icon class="text-white fs-1 " name="material-symbols:menu"></Icon>

                </div>
            </div>
            <div class="collapse navbar-collapse justify-content-center" id="navbarTogglerDemo01">

                <div id="naver-scroll" class="align-items-center navbar-nav d-flex">
                    <a aria-expanded="false" :href=uncaptalize(item) class="btn btn-dark nav-item mx-sm-4 "
                        v-for="item in items">
                        <Icon class="fs-2 text-success" name="material-symbols:chevron-right"></Icon>
                        {{ $t(item) }}
                        <Icon class="fs-2 text-success" name="material-symbols:chevron-left"></Icon>
                    </a>

                </div>
            </div>
        </div>
    </nav>
</template>

<script setup lang="ts">
let items = ["About me", "Stacks", "Qualification", "My work"]
let uncaptalize = (string: string) => {
    return "#" + string.toLowerCase().replace(" ", "")
}
</script>
<style scooped>
li {
    text-decoration: none;
}

.navbar-toggler {
    border: none;
}
</style>