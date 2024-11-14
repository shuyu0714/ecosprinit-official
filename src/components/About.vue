<template>
    <section id="about">
        <div class="wrapper">
            <div class="about-ecosprint d-grid align-items-center">
                <div class="ecosprint-brand text-center">
                    <img src="../assets/images/icon/logo-ecosprint-green.svg" class="img-fluid" alt="Eco Sprint 奔奔 Logo" title="Eco Sprint 奔奔" />
                    <h1 class="text-primary">生態友善寵食</h1>
                    <div class="slogan">
                        <img src="../assets/images/img/img-slogan.png" class="img-fluid" alt="Eco Sprint 奔奔 - 關懷土地、寵愛毛孩，這份愛永續不停歇" title="Eco Sprint 奔奔 - 關懷土地、寵愛毛孩，這份愛永續不停歇" />
                    </div>
                </div>
                <div class="ecosprint-intro text-justify">
                    <p>
                        奔奔團隊由一群關注綠色消費的毛孩家長組成，致力於打造融合在地食材、副產物和格外品的優質寵物食品。
                    </p>
                    <p class="mb-0">
                        我們希望讓素材背後的食農教育被更多人看到和體驗，並持續將部分收益捐助給為台灣生態努力的公益組織，為寵物、家庭與綠色永續建立新的連結。
                    </p>
                </div>
            </div>
            <img src="../assets/images/img/img-about.svg" class="img-fluid w-100" alt="Eco Sprint 奔奔 Logo" title="Eco Sprint 奔奔" />
        </div>
    </section>
</template>

<script setup>
</script>

<style lang="scss" scoped>
$text-color: #555555;
section {
    padding: 120px 0 64px;
    @media screen and (max-width: 767px) {
        padding: 34px 0 40px;
    }
    .wrapper {
        width: 90.67%;
        margin: auto;
        @media screen and (min-width: 768px) {
            width: 75.6667vw;
        }
        @media screen and (min-width: 1200px) {
            width: 66.6667vw;
        }
    }
}
.about-ecosprint {
    margin: 0 auto 5.46875%;
    @media screen and (min-width: 768px) {
        width: 80.9375%;
        grid-template-columns: max-content 52.7079%;
        justify-content: space-between;
    }
    @media screen and (min-width: 1200px) {
        width: 75.9375%;
        grid-template-columns: max-content 46.7079%;
    }
    @media screen and (max-width: 767px) {
        margin-bottom: 32px;
    }
    .ecosprint-brand {
        @media screen and (max-width: 767px) {
            margin: auto;
        }
        > img {
            width: 15.3125vw;
            @media screen and (max-width: 767px) {
                width: auto;
                height: clamp(60px, 16vw, 80px);
            }
        }
        .slogan {
            img {
                width: 20.834vw;
                @media screen and (max-width: 767px) {
                    width: clamp(220px, 58.67vw, 300px);
                }
            }
        }
    }
    .ecosprint-intro {
        color: $text-color;
        @media screen and (max-width: 767px) {
            width: 74.67vw;
            margin: 32px auto 0;
        }
    }
    h1 {
        font-size: 48px;
        font-weight: 900;
        margin: 24px 0 28px;
        font-size: clamp(34px, 2.5vw, 48px);
        @media screen and (max-width: 767px) {
            font-size: 32px;
            margin: 10px 0 16px;
        }
    }
    p { 
        font-size: clamp(16px, 1.04167vw, 20px);
        text-align: justify;
        @media screen and (max-width: 767px) {
            font-size: 15px;
        }
    }
}
</style>