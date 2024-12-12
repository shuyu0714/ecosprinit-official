<template>
    <section id="nutritionfacts">
        <div class="wrapper d-grid">
            <template v-for="product in products" :key="product.id">
                <ProductCard :image="product.image" :name="product.name" :color="product.color"  />
            </template>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';
import ProductCard from './ProductCard.vue';
const products = ref([
    { id: 1, image: '香燉嫩雞', name: '香燉嫩雞', color: '#F4AC70' },
    { id: 2, image: '白帶魚雞肉', name: '白帶魚 & 雞肉', color: '#5D945D' },
    { id: 3, image: '極鮮烏魚', name: '極鮮烏魚', color: '#6A8EC5' },
    { id: 4, image: '水針虱目魚', name: '水針 & 虱目魚', color: '#9570AE' },
])
</script>

<style lang="scss" scoped>
$main1: #FCE9D4; $main2: #E1EECD; $main3: #D2E5F6; $main4: #E7D1E5;
$secondary1: #F4AC70; $secondary2: #5D945D; $secondary3: #6A8EC5; $secondary4: #9570AE;
$bgColors: #{$main1}, #{$main2}, #{$main3}, #{$main4};

@for $i from 1 through length($bgColors) {
    $c: nth($bgColors, $i);

    .productCard:nth-child(#{$i}) {
        background-color: $c;
    }
}

.wrapper {
    grid-template-columns: repeat(4, 1fr);
    @media screen and (max-width: 991px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 767px) {
        grid-template-columns: 1fr;
    }
}
</style>