<template>
  <div>
    <Header />
    <main>
      <Banner />
      <Products />
      <NutritionFacts />
      <About />
      <Ingredient />
      <Traceability />
      <Report />
      <Footer />
    </main>
    <Fixed />
  </div>
</template>

<script setup>
import Header from './components/Header.vue';
import Banner from './components/Banner.vue';
import Products from './components/Products.vue';
import About from './components/About.vue';
import Ingredient from './components/Ingredient.vue';
import Traceability from './components/Traceability.vue';
import Report from './components/Report.vue';
import Footer from './components/Footer.vue';
import NutritionFacts from './components/nutritionFacts.vue';
// import Fixed from './components/Fixed.vue';
</script>

<style lang="scss">

</style>
