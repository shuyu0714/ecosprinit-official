<template>
    <section>
        <div class="wrapper">
            <div class="mainProduct">
                <swiper-container
                    :autoplay="true"
                    :speed="500"
                    :loop="true"
                    :slides-per-view="1"
                    :centered-slides="true"
                    :pagination="paginationOptions"
                >
                    <swiper-slide v-for="product in products" :key="product.id">
                        <div class="product d-flex align-items-md-start align-items-center">
                            <div class="name d-none d-md-block">
                                <h2 class="zh">{{ product.name }}</h2>
                                <h2 class="en">{{ product.en }}</h2>
                            </div>
                            <div class="cover ratio">
                                <img class="img-fluid" :src="`/ecosprint-official/images/2_products/img-product-${product.image}.png`" />
                            </div>
                            <div>
                                <div class="name d-md-none">
                                    <h2 class="zh">{{ product.name }}</h2>
                                    <h2 class="en">{{ product.en }}</h2>
                                </div>
                                <div class="intro">
                                    <p class="mb-0">{{ product.des }}</p>
                                </div>
                            </div>
                        </div>
                    </swiper-slide>
                </swiper-container>
                <div class="swiper-pagination"></div>
            </div>
            <div class="d-md-flex d-none">
                <ul class="settingsList list-unstyled d-flex justify-content-between align-items-end">
                    <li class="product d-flex align-items-start justify-content-center"
                        v-for="product in products" :key="product.id">
                        <div class="cover ratio">
                            <img class="img-fluid" :src="`/ecosprint-official/images/2_products/img-product-${product.image}.png`" />
                        </div>
                    </li>
                </ul>
                <ul class="settingsList list-unstyled d-flex justify-content-between align-items-end">
                    <li class="product d-flex align-items-start justify-content-center"
                        v-for="product in products" :key="product.id">
                        <div class="cover ratio">
                            <img class="img-fluid" :src="`/ecosprint-official/images/2_products/img-product-${product.image}.png`" />
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import 'swiper/swiper-bundle.css';
import { Swiper, SwiperSlide } from 'swiper/vue';

const products = ref([
    { id: 1, image: '香燉嫩雞', name: '香燉嫩雞', en: 'chicken',  des: '單一肉源減少毛孩過敏機率，餐包添加蜂王胎、火龍果，提升抵抗力、促進腸道蠕動及平衡健康菌叢' },
    { id: 2, image: '白帶魚雞肉', name: '白帶魚 & 雞肉', en: 'Hairtail & Chicken',  des: '單一肉源減少毛孩過敏機率，餐包添加蜂王胎、火龍果，提升抵抗力、促進腸道蠕動及平衡健康菌叢' },
    { id: 3, image: '極鮮烏魚', name: '極鮮烏魚', en: 'mullet',  des: '單一肉源減少毛孩過敏機率，餐包添加蜂王胎、火龍果，提升抵抗力、促進腸道蠕動及平衡健康菌叢' },
    { id: 4, image: '水針虱目魚', name: '水針 & 虱目魚', en: 'Needlefish & Milkfish',  des: '單一肉源減少毛孩過敏機率，餐包添加蜂王胎、火龍果，提升抵抗力、促進腸道蠕動及平衡健康菌叢' },
])

const paginationOptions = {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: (index, className) => {
        return `<span class="${className}" style="width: 14px; height: 14px; background: no-repeat center / 100% url('/ecosprint-official/assets/images/icon/icon-pagin.svg');"></span>`;
    }
};

</script>

<style lang="scss" scoped>
@import "swiper/css";

@import "swiper/css/free-mode";
@import "swiper/css/navigation";
@import "swiper/css/thumbs";
$bg: #F2F2F2;
$color1: #808080;
$color2: #F3994F;
$color3: #555555;

.swiper-pagination {
    bottom: -15%;
}
section {
    overflow: hidden;
    background-color: $bg;
    padding: 133px 0;
    @media screen and (max-width: 991px) {
        padding-top: 70px;
    }
    @media screen and (max-width: 767px) {
        padding: 32px 0;
    }
    .wrapper {
        position: relative;
    }
}
.mainProduct {
    @media screen and (min-width: 768px) {
        padding-left: 20.7292vw;
    }
    @media screen and (min-width: 992px) {
        padding-left: 23.7292vw;
    }
    .product {
        .cover {
            margin: 0 5.20834vw;
            @media screen and (max-width: 767px) {
                margin: 0 6.4vw 0 0;
            }
        }
    }
}
.product {
    .name {
        @media screen and (min-width: 768px) {
            text-align: center;
            width: 11.73vw;
        }
        .zh {
            font-size: clamp(20px, 1.875vw, 36px);
            font-weight: 900;
            color: $color1;
            @media screen and (max-width: 767px) {
                font-size: min(18px, 5.34vw);
                margin-bottom: 2px;
            }
        }
        .en {
            font-size: clamp(17px, 1.67vw, 32px);
            font-weight: 500;
            color: $color2;
            text-transform: uppercase;
            @media screen and (max-width: 767px) {
                font-size: min(16px, 4.8vw);
                margin-bottom: 16px;
            }
        }
    }
    .cover {
        width: 18.34vw;
        &::before {
            padding-top: 153.125%;
        }
        @media screen and (max-width: 767px) {
            width: 34.934vw;
            flex-shrink: 0;
        }
    }
    .intro {
        padding-left: 2.0834vw;
        border-left: 3px solid $color2;
        
        @media screen and (min-width: 768px) {
            border-left: 8px solid $color2;
            width: 29vw;
        }
        @media screen and (min-width: 992px) {
            width: 22.1875vw;
        }
        p {
            color: $color3;
            font-size: 20px;
            font-size: clamp(16px, 1.04167vw, 20px);
            @media screen and (max-width: 767px) {
                font-size: clamp(14px, 1.04167vw, 20px);
            }
        }
    }
    @media screen and (max-width: 767px) {
        justify-content: center;
        padding: 0 32px;
    }
}
.settingsList {
    width: 45.9%;
    overflow: hidden;
    position: absolute;
    z-index: 0;
    bottom: -18%;
    &:first-child {
        left: 0;
        transform: translate(-15%, 0%);
        @media screen and (max-width: 991px) {
            transform: translate(-20%, 24%);
        }
    }
    &:last-child {
        left: 50%;
        transform: translate(25%, 0%);
        @media screen and (max-width: 991px) {
            transform: translate(20%, 24%);
        }
    }
    .product {
        width: 9.47917vw;
        @media screen and (min-width: 768px) {
            &:nth-child(odd) {
                margin-bottom: 7.292vw;
            }
        }
    }
    .cover {
        height: 100%;
        max-height: 300px;
        img {
            -webkit-filter: blur(1.5px);
            filter: blur(1.5px);
            object-fit: contain;
        }
    }
}
</style>