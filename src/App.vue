<script setup>
import Register from './components/Register.vue';
import Testimonial from './components/Testimonial.vue';
import Portfolio from './components/Portfolio.vue';
import Assets from './components/Assets.vue';
import Services from './components/Services.vue';
import AboutSection from './components/AboutSection.vue';
import Header from './components/Header.vue';
</script>

<template>
  <div class="font-[Arial]">
    <Header />
    <AboutSection />
    <Services />
    <Assets />
    <Portfolio />
    <Testimonial />
    <Register />
  </div>
</template>
