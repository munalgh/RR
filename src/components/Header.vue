<script setup>
import { ref, onMounted, computed } from 'vue'
import DarkModeIcon from './icons/DarkModeIcon.vue'
import LightModeIcon from './icons/LightModeIcon.vue'
import FadedCircles from './FadedCircles.vue';
import RRlogoDark from '/src/assets/RRlogoDark.png'
import RRlogoLight from '/src/assets/RRlogoLight.png'

const isDark = ref(false)

const logoUrl = computed(() => (isDark.value ? RRlogoDark : RRlogoLight))

onMounted(() => {
  const currentTheme = document.documentElement.getAttribute('data-theme')
  console.log('Current data-theme:', currentTheme)
  isDark.value = currentTheme === 'dark'
})

const toggleTheme = () => {
  isDark.value = !isDark.value
  
  if (isDark.value) {
    document.documentElement.setAttribute('data-theme', 'dark')
    localStorage.setItem('theme', 'dark')
  } else {
    document.documentElement.setAttribute('data-theme', 'light') 
    localStorage.setItem('theme', 'light')
  }
  
  console.log('Theme toggled to:', document.documentElement.getAttribute('data-theme'))
}
</script>

<template>
  <section class="relative w-full h-[800px] overflow-hidden" :style="{ backgroundColor: 'var(--bg-primary)' }">
    
    <FadedCircles />

    <div class="flex justify-between items-center px-7 py-4">
      <img :src="logoUrl" class="w-[50px] h-[50px]">
      <div class="text-md" :style="{ color: 'var(--text-header)' }">
        <a class="px-8">Services</a>
        <a class="px-8">Portfolio</a>
        <a class="px-8">About Us</a>
        <a class="px-8">Testimonials</a>
      </div>

      <div class="flex items-center space-x-3">
        <button class="bg-[#5380EA] rounded-full px-5 py-2.5 text-xs text-white">Contact Us</button>

        <button @click.stop="toggleTheme" class="flex items-center justify-center rounded-full p-2 bg-[#6081ec] hover:bg-[#4a6bd8] transition">
          <LightModeIcon v-if="!isDark" class="w-6 h-6" />
          <DarkModeIcon v-else class="w-6 h-6" />
        </button>
      </div>
    </div>

    <div class="relative flex items-center justify-center p-20">
      <img src="../assets/1.png" class="w-[310px] h-[310px] -rotate-23 relative z-10">
      <img src="../assets/Subtract.png" class="absolute top-45 w-[1043px] animate-pulse">

      <div class="absolute text-center text-[60px] font-extrabold z-20">
        <h1 :style="{ color: 'var(--text-header)' }">Welcome to <span class="text-[#5f80ea]">RR</span><br /> Technologies</h1>
      </div>
    </div>

    <div class="text-center">
      <p class="text-lg p-5" :style="{ color: 'var(--text-secondary)' }">Are You Facing Difficulties With Your Website? Do You Have A Website But <br /> Lack Traffic? No Need To Worry.</p>
      <button class="rounded text-white py-3 px-5" :style="{ backgroundColor: isDark ? '#2478FE' : '#11172a' }">Get Started</button>
    </div>
  </section>
</template>