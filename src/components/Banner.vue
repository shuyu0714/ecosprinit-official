<template>
    <div class="carousel w-100">
        <VSlickCarousel v-bind="settings">
            <div>
                <div class="ratio ratio-pc d-none d-md-block">
                    <img src="../assets/images/img/banner/img-banner1.jpeg" class="img-fluid" densities="x1" alt="EcoSprint 奔奔 Logo" />
                </div>
                <div class="ratio ratio-mb d-md-none">
                    <img src="../assets/images/img/banner/img-banner1_mb.jpg" class="img-fluid" densities="x1" alt="EcoSprint 奔奔 Logo" />
                </div>
            </div>
        </VSlickCarousel>
    </div>
</template>

<script setup>
import 'v-slick-carousel/style.css'
import { VSlickCarousel } from 'v-slick-carousel'

const settings = {
  slidesToShow: 1,
  arrows: false,
  draggable: false,
}
</script>

<style scoped lang="scss">
.ratio-pc {
    &::before {
        padding-top: 44.271%;
    }
    img {
        object-fit: cover;
        object-position: center;
    }
}
.ratio-mb {
    &::before {
        padding-top: 86.67%;
    }
}
</style>