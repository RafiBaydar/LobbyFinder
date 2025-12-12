<script setup>
import NavBar from '../NavBar.vue';
import Footer from '../Footer.vue';

import HeroCOTS from './HeroCOTS.vue';
import SkillsCOTS from './SkillsCOTS.vue';

const about = [
  {
    id : 1,
    title: 'Gaming',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis dicta molestiae modi esse in quae odit quia ut, maxime aspernatur amet blanditiis voluptatem architecto molestias aut quas eum. Nesciunt, totam.'
  },
  {
    id : 2,
    title: 'Ngoding',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis dicta molestiae modi esse in quae odit quia ut, maxime aspernatur amet blanditiis voluptatem architecto molestias aut quas eum. Nesciunt, totam.'
  },
  {
    id : 3,
    title: 'Gitar',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis dicta molestiae modi esse in quae odit quia ut, maxime aspernatur amet blanditiis voluptatem architecto molestias aut quas eum. Nesciunt, totam.'
  },
];

</script>

<template>
<div class="bg-[#0F1923]">
  <NavBar/>
  <HeroCOTS class="my-16"/>
  <section class="mb-36 mx-8">
    <div class="flex items-center justify-center mx-auto max-w-5xl">
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <SkillsCOTS
          v-for="item in about"
          :key="item.id"
          :title="item.title"
          :description="item.description"
        />
      </div>
    </div>
  </section>
  <Footer/>
</div>
</template>
