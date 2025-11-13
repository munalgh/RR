<script setup>
const images = import.meta.glob('/src/assets/*.png', { eager: true, import: 'default' })
const assets = [
    {title: 'Experience', content: 'Experience Counts Is A Common Saying, And Hiring Us Means Hiring Professionals Who Have Years Of Experience To Add On To Their Kitty To Get Your Projects Falling At The Right Place. Also, We Have A Streamlined Project Management System To Cater To Your Project Requisites. Getting Connected With Us Allows You To Browse Over A Large Talent Pool Who Can Get Your Task Accomplished Within Fixed Deadlines.', image: images['/src/assets/brain.png']},
    {title: 'Dedicated Team', content: 'Everyone Has Their Own Cup Of Tea To Drink, And Thus We Do Not Mix Up The Different Areas Of Functionality. We Have Dedicated Teams For Designing And Graphics. While Our Web Developers Get The Deigning Part Done, We Have Our Own Graphic Designing Team That Handles All The Quality Imagery Part For A Successful Website.', image: images['/src/assets/team.png']},
    {title: 'Rapid Turnaround Time', content: 'We Aim At Delivering Quality Work Within Fixed Deadlines And Thus Are Committed To Delivering Solutions When Our Clients Need Them Without Making Them Wait For It And Extend Beyond The Fixed Time Frame. We Chalk Out Our Plans Accordingly And Also Regularly Update Our Clients Regarding The Progress To Get What You Desire. We Give Ears To Your Vision', image: images['/src/assets/time.png']},
    {title: 'Competitive Pricing', content: 'Pricing Is One Crucial Factor That Every Business Owner Considers While Hiring A Web Development Company. We Are The Best In The Market And Offer Competitive Pricing To Our Clients Meeting All The Demands Of The Clients With Higher Levels Of Efficiency.', image: images['/src/assets/pricing.png']}
]
</script>

<template>
    <section class="relative w-full px-50 py-20 z-0" :style="{ backgroundColor: 'var(--bg-secondary)' }">
        <div>
            <div class="faded-circle" style="--glow-color: rgb(300 241 82 / 0.35); bottom: 50%; left: 1%;"></div>
            <div class="faded-circle" style="--glow-color: rgb(82 131 255 / 0.35); bottom: 1%; right: 10%;"></div>
        </div>

        <div class="text-center">
            <p class="text-[#2478FE] text-[22px] font-bold mb-3">Why Choose Us</p>
            <p class="font-extrabold text-[36px] mb-3" :style="{ color: 'var(--text-header)' }">For Your Web Development Needs?</p>
            <p class="mb-3" :style="{ color: 'var(--text-secondary)' }">We Have Passion And Love For What We Do& We Don't Believe In Cutting Corners And Setting Wrong Expectations. We Aim At Improving With Each Passing Day And Showcase What We Actually Are In Reality, And We Do Not Pretend In Any Circumstances. There Are Multiple Reasons That Will Make You Fall For Us For Availing Top-Notch Web Development Services. Here Are A Few Of Them</p>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 justify-items-center">
            <div v-for="asset in assets" :key="asset.title" class="bg-white rounded-lg shadow-sm shadow-blue-400 p-6 w-[320px] h-[390px] flex flex-col items-center text-center">
                <img :src="asset.image" class="w-[52px] h-[52px] mb-4" />
                <h2 class="text-[#0F172A] text-[22px] font-bold mb-2">{{ asset.title }}</h2>
                <p class="text-[#767676] text-[14px] overflow-y-auto">{{ asset.content }}</p>
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