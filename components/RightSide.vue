<template>
    <RightContainer>
        <div class="px-3 shadow-lg bg-light text-center sticky-top">
            <NavbarR />
        </div>

        <div data-bs-spy="scroll" data-bs-target="#naver-scroll" data-bs-offset="0" data-bs-smooth-scroll="true"
            class="scrollspy-example text-black text-justify mx-4 px-4 pb-4 font-monospace">

            <div class=" my-5 display-4 row text-center special-font fw-bolder">
                
                <p class="bg-dark rounded fw-light shadow py-2 border text-white" >
                    Alan
                    gamA
                </p>

            </div>

            <Citation />

            <About />

            <Stacks />

            <Qualification />
            <div class="d-md-none d-sm-block">
                <Mywork />

            </div>

        </div>
    </RightContainer>
</template>
