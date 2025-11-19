<script setup>
const images = import.meta.glob('/src/assets/*.png', { eager: true, import: 'default' })
const assets = [
    {title: 'experience.experienceTitle', content: 'experience.experienceContent', image: images['/src/assets/brain.png']},
    {title: 'team.teamTitle', content: 'team.teamContent', image: images['/src/assets/team.png']},
    {title: 'time.timeTitle', content: 'time.timeContent', image: images['/src/assets/time.png']},
    {title: 'pricing.pricingTitle', content: 'pricing.pricingContent', image: images['/src/assets/pricing.png']}
]
</script>

<template>
    <section class="relative w-full px-4 sm:px-8 md:px-16 lg:px-40 py-16 md:py-20 z-0 overflow-hidden" :style="{ backgroundColor: 'var(--bg-secondary)' }">
        <div>
            <div class="faded-circle" style="--glow-color: rgb(300 241 82 / 0.35); bottom: 50%; left: 1%;"></div>
            <div class="faded-circle" style="--glow-color: rgb(82 131 255 / 0.35); bottom: 1%; right: 10%;"></div>
        </div>

        <div class="text-center">
            <p class="text-[#2478FE] text-lg sm:text-xl md:text-[22px] font-bold mb-2 sm:mb-3">{{ $t('choose') }}</p>
            <p class="font-extrabold text-2xl sm:text-3xl md:text-[36px] mb-2 sm:mb-3" :style="{ color: 'var(--text-header)' }">{{ $t('assets') }}</p>
            <p class="text-sm sm:text-base md:text-[16px] mb-4" :style="{ color: 'var(--text-secondary)' }">{{ $t('assetsIntro') }}</p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-8 md:mt-10 justify-items-center">
            <div v-for="asset in assets" :key="asset.title" class="bg-white rounded-lg shadow-lg p-6 w-[320px] h-[390px] flex flex-col items-center text-center transition-transform hover:scale-102">
                <img :src="asset.image" class="w-[52px] h-[52px] mb-4" />
                <h2 class="text-[#0F172A] text-lg sm:text-[20px] md:text-[22px] font-bold mb-2">{{ $t(asset.title) }}</h2>
                <p class="text-[#767676] text-sm sm:text-[14px] md:text-[14px]">{{ $t(asset.content) }}</p>
            </div>
        </div>
    </section>
</template>

<style scoped>
.faded-circle {
  width: 500px;
  height: 500px;
  border-radius: 50%;
  position: absolute;
  z-index: -1;
  background: radial-gradient(circle, var(--glow-color) 0%, rgba(0,0,0,0) 75%);
}
</style>