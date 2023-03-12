<template >
    <div class=" my-2 text-center col-sm-6 justify-content-center d-flex flex-column ps-sm-0">

        <div class="card ">
            <div class="bg-dark text-white card-header  fs-4  ">
                {{ $t("Education") }}
            </div>

            <div class="card-body bg-danger p-3   rounded-bottom ">
                <h5 class="card-title">
                    {{ $t("Computer Science Major") }}
                </h5>
                <p class="card-text">
                    {{ $t("(Started in 2020 - Ends in 2025)") }}
                </p>
                <a href="http://lattes.cnpq.br/0906842052351571" target="_blank" class="btn btn-success">
                    {{ $t("See Academic CV") }}
                </a>
            </div>
        </div>

    </div>
</template>