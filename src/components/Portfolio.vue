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

const underlineURL = computed(() => {
  return isDark.value 
    ? images['/src/assets/underline-white.png'] 
    : images['/src/assets/underline-blue.png']
})
</script>

<template>
    <section class="w-full px-50 py-20 z-0" :style="{ backgroundColor: 'var(--bg-thirdly)' }">
        <div class="text-center flex flex-col items-center">
            <h1 class="text-[36px] font-extrabold" :style="{ color: 'var(--text-primary)' }">Our Portfolio</h1>
            <img :src="underlineURL" class="mt-2 mx-auto" />
        </div>

        <div class="grid grid-cols-1 md:grid-cols-[1.2fr_3fr] gap-10 mt-20 items-start">
            <div>
                <ul class="text-[22px]" :style="{ color: 'var(--text-header)' }">
                    <li class="p-2 text-[#5380EA] flex items-center gap-2">Ecommerce Websites
                        <img src="/src/assets/line-arrow.png">
                    </li>
                    <li class="p-2">Wordpress Websites</li>
                    <li class="p-2">Logos Design</li>
                    <li class="p-2">Graphices Design</li>
                </ul>
            </div>

            <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                <div v-for="(portfolio, i) in portfolios" :key="i" class="overflow-hidden rounded-lg">
                    <img :src="portfolio.image" class="w-full h-auto rounded-sm hover:scale-102 transition-transform duration-300">
                    <img :src="portfolio.image" class="w-full h-auto rounded-sm hover:scale-102 transition-transform duration-300">
                </div>
            </div>
        </div>
    </section>
</template>