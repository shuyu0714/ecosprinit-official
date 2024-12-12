<template>
    <section class="d-flex justify-content-center" id="report">
        <a class="d-flex justify-content-center" href="https://drive.google.com/drive/folders/1O-UhfdiRDoG4QKKj8xUeZ583en3RuXfe" target="_blank" rel="noopener">
            <img class="img-fluid" src="../assets/images/img/img-report.png" alt="完整檢驗報告" title="完整檢驗報告" />
        </a>
        <div class="holder"></div>
    </section>
</template>

<style lang="scss" scoped>
$bg: #F2F2F2;
section {
    position: relative;
    padding: 7.604167vw 0 5.15625vw;
    background: no-repeat left top / 100% url(../assets/images/img/bg-report.svg);
    @media screen and (max-width: 767px) {
        padding: 11.2vw 0;
    }
}
img {
    width: 51.04167vw;
    // max-width: 720px;
    @media screen and (max-width: 767px) {
        width: 86vw;
    }
    @media screen and (max-width: 567px) {
        width: 96vw;
        margin-right: -13px;
    }
}
.holder {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    height: 15vw;
    background-color: $bg;
    @media screen and (max-width: 767px) {
        height: 45vw;
    }
}
</style>