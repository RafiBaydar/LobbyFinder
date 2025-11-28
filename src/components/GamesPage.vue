<script setup>
import NavBar from './NavBar.vue';
import Hero from './HeroGames.vue';
import Footer from './Footer.vue';

import Card from './CardGames.vue';

import valorant from '../assets/valorant.jpg';
import cs2 from '../assets/cs2.jpg';
import lol from '../assets/league_of_legends.jpg';


const info = [
  {
    id : 1,
    title : "Valorant",
    image : valorant
  },
  {
    id : 2,
    title : "Counter Strike 2",
    image : cs2
  },
  {
    id : 2,
    title : "League of Legends",
    image : lol
  },
]

</script>

<template>
<div class="bg-[#0F1923]">
  <NavBar/>
  <Hero/>
  <section class="mb-24 mx-24">
    <div class="grid grid-cols-3 gap-2 justify-items-center">
      <Card
        v-for="item in info"
        :key="item.id"
        :title="item.title"
        :image="item.image"
      />
    </div>
  </section>
  <Footer/>
</div>
</template>
