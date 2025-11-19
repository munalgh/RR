<script setup>
import { ref } from 'vue'
const showMore = ref(false)

const images = import.meta.glob('/src/assets/*.png', { eager: true, import: 'default' })
const aboutInfo = [
    {tag: 'aboutArray.projects', content: '65+', image: images['/src/assets/projects.png']},
    {tag: 'aboutArray.clients', content: '30+', image: images['/src/assets/clients.png']},
    {tag: 'aboutArray.experience', content: '7+', image: images['/src/assets/experience.png']},
    {tag: 'aboutArray.company', content: '15+', image: images['/src/assets/company.png']}
]
</script>

<template>
    <section id="about" class="w-full px-6 sm:px-10 md:px-20 lg:px-40 py-16 md:py-20" :style="{ backgroundColor: 'var(--bg-secondary)' }">
        <div class="text-center mb-12 md:mb-20 font-bold" :style="{ color: 'var(--text-secondary)' }">
            <p class="text-[#5380EA] text-lg md:text-xl mb-3 md:mb-5">{{ $t('thanks') }}</p>

            <p class="text-[24px] sm:text-[30px] md:text-[36px] mx-auto max-w-3xl mb-4" :style="{ color: 'var(--text-header)' }" v-html="$t('aboutTitle')"></p>

            <p class="text-sm sm:text-base max-w-2xl mx-auto font-normal">{{ $t('aboutIntro') }}</p>
        </div>

        <div class="flex flex-col md:flex-row justify-between items-center md:items-start gap-10 md:gap-0">
            <div class="p-4 sm:p-7 max-w-xl">
                <p class="transition-all duration-300 overflow-hidden text-sm sm:text-bas" :class="showMore ? 'max-h-full' : 'max-h-[230px]'" :style="{ color: 'var(--text-secondary)' }" v-html="$t('aboutParagraph')"></p>

                <button @click="showMore = !showMore" class="mt-4 text-white text-xs sm:text-sm rounded py-1 px-4 sm:px-5" :style="{backgroundColor: 'var(--bg-button)'}">{{ showMore ? $t('showLess') : $t('showMore') }}</button>
            </div>
            <img src="../assets/ComputerSpace.png" class="w-[450px] h-auto md:w-[525px] p-4 md:p-7 mx-auto">
        </div>

        <div class="mt-16 md:mt-24 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
            <div v-for="item in aboutInfo" :key="item.tag" class="flex flex-col items-center text-center">
                <img :src="item.image" class="w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] mb-4">
                <p class="text-lg sm:text-xl md:text-[22px]" :style="{ color: 'var(--text-header)' }">{{ $t(item.tag) }}</p>
                <p class="text-sm sm:text-base md:text-[16px]" :style="{ color: 'var(--text-secondary)' }">{{ item.content }}</p>
            </div>
        </div>
    </section>
</template>