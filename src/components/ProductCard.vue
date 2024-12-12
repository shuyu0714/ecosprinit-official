<template>
    <div class="productCard">
        <div class="d-flex flex-column align-items-center">
            <img class="cover img-fluid" :src="`/images/2_products/img-product-${image}.png`" :alt="`果肉泥主食餐包-${name}`"
                :title="`果肉泥主食餐包-${name}`" />
            <button class="d-flex align-items-center" :style="{backgroundColor: color}" @click="toggleMask">
                <img class="img-fluid" width="24" src="../assets/images/icon/icon-search.svg" alt="">
                <h2 class="mb-0">{{ name }}</h2>
            </button>
        </div>
        <div :class="['d-flex', 'align-items-md-center', 'mask', { active: isActive }]" :style="{backgroundColor: color}">
            <img class="img-fluid" :src="`/images/3_nutrition/${image}.svg`" @click="toggleMask" :alt="`果肉泥主食餐包-${name}`" :title="`果肉泥主食餐包-${name}`" />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
defineProps(['image', 'name', 'color'])
const isActive = ref(false)
const toggleMask = () => {
    isActive.value = !isActive.value
}
</script>

<style lang="scss" scoped>
.productCard {
    padding: 3.33334vw 0;
    position: relative;
    overflow: hidden;
    @media screen and (max-width: 991px) {
        padding: 60px 0;
    }
    @media screen and (max-width: 767px) {
        padding: 45px 0;
    }
    .cover {
        width: 54.2%;
    }
    .mask {
        cursor: pointer;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        transition: all .25s;
        &:not(.active) {
            transform: translateY(100%);
            opacity: 0;
        }
        @media screen and (max-width: 767px) {
            justify-content: center;
        }
    }
    button {
        border: 0;
        background-color: transparent;
        border-radius: 100px;
        // padding: 4px clamp(12px, 1.67vw, 32px);
        padding: 4px clamp(12px, 1.25vw, 24px);
        color: var(--bs-white);
        gap: 0 10px;
        margin-top: 2rem;
        h2 {
            font-size: clamp(14px, 1.042vw, 20px);
            line-height: 1;
            font-weight: bold;
            letter-spacing: 1.5px;
            @media screen and (max-width: 991px) {
                font-size: 20px;
            }
        }
    }
}
</style>