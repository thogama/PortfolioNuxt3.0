<template>

    <div class="timeline text-center position-relative">
        <div class="fs-1">
            1
        </div>
        <div class="bg-success d-flex justify-content-center  ">
            <div class="fs-1 position-absolute ">
                <k-container >
                    <k-element type="rotate" strength="100">
                        <Icon class="circle-section bg-dark text-success" name="svg-spinners:blocks-shuffle-3" />

                    </k-element>
                </k-container>
            </div>
        </div>
        <div class="fs-1">
            2
        </div>

    </div>
</template>
<style scooped>
.timeline {
    display: grid;
    grid-template-columns: 1fr 3px 1fr;
}

.circle-section{
    clip-path: circle(50% at 50% 50%);

}
</style>