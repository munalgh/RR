<script setup>
const images = import.meta.glob('/src/assets/*.png', { eager: true, import: 'default' })
const services = [
    {title: 'servicesCard.webDesign', image: images['/src/assets/icons.png']},
    {title: 'servicesCard.eCommerce', image: images['/src/assets/cart.png']},
    {title: 'servicesCard.appDev', image: images['/src/assets/apps.png']},
    {title: 'servicesCard.seo', image: images['/src/assets/seo.png']}
]
const starDust = [
    {image: images['/src/assets/Ellipse1.png'], bottom: '20%', right: '7%'},
    {image: images['/src/assets/Ellipse2.png'], top: '7%', left: '40%'},
    {image: images['/src/assets/Ellipse3.png'], top: '50%', left: '9%'}
]
</script>

<template>
    <section id="services" class="relative w-full px-4 sm:px-8 md:px-16 lg:px-36 py-10" :style="{ backgroundColor: 'var(--bg-thirdly)' }">
        <div v-for="star in starDust" :key="star">
            <img :src="star.image" class="absolute" :style="{top: star.top, left: star.left, right: star.right, bottom: star.bottom}">
        </div>

        <div class="mx-3 flex flex-col md:flex-row justify-between gap-10 md:gap-16">
            <div class="md:w-1/2">
                <p class="text-[#2478FE] text-lg sm:text-xl font-bold mb-2">{{ $t('servicesTitle') }}</p>
                <p class="text-[28px] sm:text-[32px] md:text-[36px] font-bold" :style="{ color: 'var(--text-header)' }" v-html="$t('servicesIntro')"></p>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 md:w-1/2 justify-items-center">
                <div v-for="(service, index) in services" :key="service.title" :class="['relative flex flex-col justify-between p-6 rounded-md shadow-md border-t-[7px] border-[#5380EA] h-[200px] w-[250px] sm:w-[220px] md:w-[250px] transition-transform hover:scale-105', index  === 0 ? 'bg-[#0F172A] text-white' : 'bg-white text-black']">
                    <div>
                        <img :src="service.image" class="w-7 h-7 top-1 left-1 mb-4" />
                        <h3 class="text-[16px] font-bold">{{ $t(service.title) }}</h3>
                    </div>

                    <div class="absolute bottom-4 right-4">
                        <button class="p-3 bg-[#5380EA] rounded">
                            <img src="/src/assets/arrow-forward.png" class="h-5 w-5" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>