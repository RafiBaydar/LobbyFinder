<script setup>
import NavBar from './NavBar.vue';
import Hero from './HeroHome.vue';
import Card from './Card.vue';
import Footer from './Footer.vue';

</script>

<template>
<div class="bg-[#0F1923]">
  <NavBar/>
  <Hero/>

  <section class="mb-32">
    <div class="max-w-5xl mx-auto px-4">
      <div class="grid gap-8 md:grid-cols-3 justify-items-center">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  </section>

  <Footer/>
</div>
</template>
