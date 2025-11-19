<script setup>
import { ref, computed, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import DarkModeIcon from './icons/DarkModeIcon.vue'
import LightModeIcon from './icons/LightModeIcon.vue'
import FadedCircles from './FadedCircles.vue';

const { locale } = useI18n()

const showMenu = ref(false)
function toggleMenu() {
  showMenu.value = !showMenu.value
}

function toggleLang() {
  if (locale.value === 'en') {
    locale.value = 'ar'
    document.documentElement.setAttribute('dir', 'rtl')
    document.documentElement.classList.add('lang-ar')
    document.documentElement.classList.remove('lang-en')
    localStorage.setItem('lang', 'ar')
  } else {
    locale.value = 'en'
    document.documentElement.setAttribute('dir', 'ltr')
    document.documentElement.classList.add('lang-en')
    document.documentElement.classList.remove('lang-ar')
    localStorage.setItem('lang', 'en')
  }
}

const isDark = ref(false)

onMounted(() => {
  const savedTheme = localStorage.getItem('theme') || 'light'
  isDark.value = savedTheme === 'dark'

  const savedLang = localStorage.getItem('lang') || 'en'
  locale.value = savedLang
  document.documentElement.setAttribute('dir', savedLang === 'ar' ? 'rtl' : 'ltr')
})

const logoUrl = computed(() => 
  isDark.value ? '/RRlogoDark.png' : '/RRlogoLight.png'
)

function toggleTheme() {
  const html = document.documentElement
  const current = html.getAttribute('data-theme')
  const next = current === 'light' ? 'dark' : 'light'

  html.setAttribute('data-theme', next)
  localStorage.setItem('theme', next)

  isDark.value = next === 'dark'
}
</script>

<template>
  <section class="relative w-full h-[800px] overflow-hidden" :style="{ backgroundColor: 'var(--bg-primary)' }">
    
    <FadedCircles />

    <div class="flex justify-between items-center px-7 py-4">
      
      <img :src="logoUrl" class="w-12 h-12 sm:w-10 sm:h-10">

      <div class="hidden lg:flex text-md z-50" :style="{ color: 'var(--text-header)' }">
        <a href="#services" class="px-8">{{ $t('services') }}</a>
        <a href="#portfolio" class="px-8">{{ $t('portfolio') }}</a>
        <a href="#about" class="px-8">{{ $t('about') }}</a>
        <a href="#testimonials" class="px-8">{{ $t('testimonials') }}</a>
      </div>

      <div class="hidden lg:flex items-center space-x-3 z-50">
        <button class="rounded-full px-5 py-2.5 text-xs text-white bg-[#5380EA] hover:bg-[#4a6bd8] transition">{{ $t('contact') }}</button>

        <button @click="toggleLang" class="px-3 py-2.5 text-white text-xs rounded-full bg-gray-400/30 hover:bg-[#4a6bd8] transition">{{ locale === 'en' ? 'AR' : 'EN' }}</button>

        <button @click="toggleTheme" class="flex items-center justify-center rounded-full p-2 bg-gray-400/30 hover:bg-[#4a6bd8] transition">
          <LightModeIcon v-if="!isDark" class="w-5 h-5" />
          <DarkModeIcon v-else class="w-5 h-5" />
        </button>
      </div>

      <button @click="toggleMenu" class="lg:hidden text-white p-2 z-60 bg-gray-400/25 rounded-full" type="button">☰</button>
    </div>

    <div v-if="showMenu" class="absolute lg:hidden flex flex-col bg-black/25 backdrop-blur-md p-4 w-full space-y-7 text-white text-sm z-50">
      <a href="#services" class="py-1 underline">{{ $t('services') }}</a>
      <a href="#portfolio" class="py-1 underline">{{ $t('portfolio') }}</a>
      <a href="#about" class="py-1 underline">{{ $t('about') }}</a>
      <a href="#testimonials" class="py-1 underline">{{ $t('testimonials') }}</a>

      <hr class="text-white">
      <div class="flex gap-3">
        <button class="rounded-full px-4 py-2 text-xs bg-gray-400/30">{{ $t('contact') }}</button>

        <button @click="toggleLang" class="px-3 py-2 text-xs rounded-full bg-gray-400/30">{{ locale === 'en' ? 'AR' : 'EN' }}</button>

        <button @click="toggleTheme" class="rounded-full p-2 bg-gray-400/30">
          <LightModeIcon v-if="!isDark" class="w-5 h-5" />
          <DarkModeIcon v-else class="w-5 h-5" />
        </button>
      </div>
    </div>

    <div class="relative flex flex-col items-center text-center px-4 my-20">
      <img src="../assets/1.png" class="w-[295px] md:w-[295px] lg:w-[295px] -rotate-23 relative z-10">
      <img src="../assets/Subtract.png" class="absolute w-[966spx] md:w-[700px] lg:w-[900px] top-30 animate-pulse">

      <div class="absolute text-center text-[40px] md:text-[55px] lg:text-[65px] font-extrabold mt-16 z-20">
        <h1 :style="{ color: 'var(--text-header)' }" v-html="$t('welcome')"></h1>
      </div>
    </div>

    <div class="text-center mt-6 px-4">
      <p class="text-base md:text-lg mb-4" :style="{ color: 'var(--text-secondary)' }" v-html="$t('intro')"></p>
      <button class="rounded text-white py-3 px-6 text-sm md:text-md" :style="{ backgroundColor: 'var(--bg-button)' }">{{ $t('cta') }}</button>
    </div>
  </section>
</template>