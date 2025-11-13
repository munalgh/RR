<script setup>
const images = import.meta.glob('/src/assets/*.png', { eager: true, import: 'default' })
const services = [
    {title: 'Web Design & Web Development', image: images['/src/assets/icons.png']},
    {title: 'E-commerce Solutions', image: images['/src/assets/cart.png']},
    {title: 'Customized application development', image: images['/src/assets/apps.png']},
    {title: 'Search Engine Optimization & Digital Marketing', image: images['/src/assets/seo.png']}
]
const starDust = [
    {image: images['/src/assets/Ellipse1.png'], bottom: '20%', right: '7%'},
    {image: images['/src/assets/Ellipse2.png'], top: '7%', left: '40%'},
    {image: images['/src/assets/Ellipse3.png'], top: '50%', left: '9%'}
]
</script>

<template>
    <section class="relative w-full px-45 py-10" :style="{ backgroundColor: 'var(--bg-thirdly)' }">
        <div v-for="star in starDust" :key="star">
            <img :src="star.image" class="absolute" :style="{top: star.top, left: star.left, right: star.right, bottom: star.bottom}">
        </div>
        <div class="p-7 grid grid-cols-2 gap-8">
            <div>
                <p class="text-[#2478FE] text-[22px] font-bold">Services We Offer</p>
                <p class="text-[36px] font-bold" :style="{ color: 'var(--text-header)' }">We Believe In True Partnership And Thus Get Our <span class="text-[#f4a500]">Customers</span> A Bang For Their Bucks. There Are Various Areas In Which We Function, Here Are A Few Of Them:</p>
            </div>
            <div class="grid grid-cols-2 gap-13">
                <div v-for="(service, index) in services" :key="service.title" :class="['relative flex flex-col justify-between p-6 rounded-md shadow-md border-t-[7px] border-[#5380EA] h-[200px] w-[250px]', index  === 0 ? 'bg-[#0F172A] text-white' : 'bg-white text-black']">
                    <div>
                        <img :src="service.image" class="w-7 h-7 top-1 left-1 mb-4" />
                        <h3 class="text-[16px] font-bold">{{ service.title }}</h3>
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