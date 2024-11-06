<template>
    <div class="btn-fixed">
        <a href="https://www.zeczec.com/projects/ecosprint?r=d194731401329" target="_blank">
            <img class="img-fluid d-none d-md-block" src="../assets/images/icon/icon-fixed.png" alt="嘖嘖募資中(另開視窗)">
            <img class="img-fluid d-md-none" src="../assets/images/icon/icon-fixed-mb.png" alt="嘖嘖募資中(另開視窗)">
        </a>
    </div>
</template>

<style lang="scss" scoped>
.btn-fixed {
    position: fixed;
    right: 1.875vw;
    width: 10.4167vw;
    min-width: 110px;
    bottom: 2vh;
    z-index: 2;
    @media screen and (max-width: 767px) {
        width: 22.4vw;
        min-width: 84px;
        max-width: 110px;
    }
}
</style>