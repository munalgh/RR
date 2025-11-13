<script setup>
import { ref } from 'vue'
const showMore = ref(false)

const images = import.meta.glob('/src/assets/*.png', { eager: true, import: 'default' })
const aboutInfo = [
    {tag: 'Projects', content: '65+', image: images['/src/assets/projects.png']},
    {tag: 'Clients', content: '30+', image: images['/src/assets/clients.png']},
    {tag: 'Experience', content: '7years+', image: images['/src/assets/experience.png']},
    {tag: 'Company', content: '15+', image: images['/src/assets/company.png']}
]
</script>

<template>
    <section class="w-full px-50 py-20" :style="{ backgroundColor: 'var(--bg-secondary)' }">
        <div class="text-center mb-20 font-bold" :style="{ color: 'var(--text-secondary)' }">
            <p class="text-[#5380EA] text-[22px] mb-5">Thank You For Your Interest In Us!</p>

            <p class="text-[36px] mx-30 mb-5" :style="{ color: 'var(--text-header)' }">Founded Over 7 Years Ago, RR Technologies Is Now The Main <span class="text-[#f4a500]">Web Design</span> And <span class="text-[#f4a500]">Web Development</span> Agency In Bangladesh.</p>

            <p class="text-[16px] mb-5 font-normal">Technology and business fused together can bear fruitful results talking in terms of business flourishment and success. And this is what exactly we aim to deliver to our esteemed clients, offering our mix of reliability, capability, and longevity to get your website blossoming. We at RR Technologies excel in the area of digital marketing, web software, web development, web designing, and other web solutions that you may consider availing for your website growth.</p>
        </div>

        <div class="flex flex-col md:flex-row justify-between">
            <div class="p-7 max-w-xl">
                <p class="transition-all duration-300 overflow-hidden" 
                   :class="showMore ? 'max-h-full' : 'max-h-[230px]'"
                   :style="{ color: 'var(--text-secondary)' }">
                    Are you facing difficulties with your website? Do you have a website but lack traffic? No need to worry. We at RR Technologies use our technological expertise amalgamated with our experience to scoop out the right potion of success for your firm. We are highly passionate about our work and leave no stones unturned to delight our customers with high-quality work and efficient project management that comes as a surprise bearing bounteous outcomes.
                    <br><br>
                    Owing to the years of expertise in web development and web designing, our in-house professionals have been highly successful in catering projects. May it be your small size or large-scale business; we excel in providing you with the best interactive surfaces.
                </p>

                <button @click="showMore = !showMore" class="mt-4 text-sm rounded py-1 px-5 border border-gray-300 hover:bg-gray-100 transition" :style="{backgroundColor: 'var(--text-primary)', color: 'var(--bg-primary)', borderColor: 'var(--text-secondary)'}">
                    {{ showMore ? 'Show Less' : 'Show More...' }}
                </button>
            </div>
            <img src="../assets/ComputerSpace.png" class="w-[525px] h-[298px] p-7">
        </div>

        <div class="mt-24 grid grid-cols-4 gap-8 text-center">
            <div v-for="item in aboutInfo" :key="item.tag" class="flex flex-col items-center text-center">
                <img :src="item.image" class="w-[70px] h-[70px] mb-4">
                <p class="text-[22px]" :style="{ color: 'var(--text-header)' }">{{ item.tag }}</p>
                <p class="text-[16px]" :style="{ color: 'var(--text-secondary)' }">{{ item.content }}</p>
            </div>
        </div>
    </section>
</template>