<script setup>
import { ref, computed } from 'vue'

const images = import.meta.glob('/src/assets/*.png', { eager: true, import: 'default' })
const portfolios = [
    {image: images['/src/assets/portfolio1.png']},
    {image: images['/src/assets/portfolio2.png']},
    {image: images['/src/assets/portfolio3.png']},
    {image: images['/src/assets/portfolio4.png']},
    {image: images['/src/assets/portfolio5.png']},
    {image: images['/src/assets/portfolio6.png']},
    {image: images['/src/assets/portfolio7.png']},
    {image: images['/src/assets/portfolio8.png']}
]

const isDark = ref(false)

const underlineURL = computed(() => 
  isDark.value ? '/underline-white.png' : '/underline-blue.png'
)
</script>

<template>
    <section id="portfolio" class="w-full px-4 sm:px-8 md:px-16 lg:px-36 py-12 md:py-20 z-0" :style="{ backgroundColor: 'var(--bg-thirdly)' }">
        <div class="text-center flex flex-col items-center">
            <h1 class="text-2xl sm:text-3xl md:text-4xl font-extrabold" :style="{ color: 'var(--text-primary)' }">{{ $t('portfolioTitle') }}</h1>
            <img :src="underlineURL" class="mt-2 mx-auto" />
        </div>

        <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-[1.2fr_3fr] gap-6 md:gap-10 mt-10 md:mt-20 items-start">
            <div class="mb-8 md:mb-0 font-semibold">
                <ul class="text-lg sm:text-xl md:text-[22px]" :style="{ color: 'var(--text-header)' }">
                    <li class="p-2 text-[#5380EA] flex items-center gap-2">{{ $t('eCommWeb') }}
                        <img src="/src/assets/line-arrow.png" class="arrow" />
                    </li>
                    <li class="p-2">{{ $t('wordpress') }}</li>
                    <li class="p-2">{{ $t('logos') }}</li>
                    <li class="p-2">{{ $t('grapgics') }}</li>
                </ul>
            </div>

            <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                <div v-for="(portfolio, i) in portfolios" :key="i" class="overflow-hidden rounded-lg">
                    <img :src="portfolio.image" class="w-full h-auto rounded-sm hover:scale-102 transition-transform duration-300">
                </div>
            </div>
        </div>
    </section>
</template>