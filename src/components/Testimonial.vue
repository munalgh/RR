<script setup>
const images = import.meta.glob('/src/assets/*.png', { eager: true, import: 'default' })
const employees = [
    {name: 'Mr Smith', about: 'RR Technologies Is The Key To The Success Of Our Brands. A Solid Team Of Strategic Planners And Brilliant Creations Enables Them To Provide World Class Service."', image: images['/src/assets/smith.png']},
    {name: 'John Doe', about: 'RR Technologies Is The Key To The Success Of Our Brands. A Solid Team Of Strategic Planners And Brilliant Creations Enables Them To Provide World Class Service."', image: images['/src/assets/john.png']}
]
</script>

<template>
    <section class="relative w-full px-50 py-30 overflow-hidden" :style="{ backgroundColor: 'var(--bg-secondary)' }">
        <div>
            <div class="faded-circle" style="--glow-color: rgb(255 93 48 / 0.35); top: 15%; right: 70%;"></div>
            <div class="faded-circle" style="--glow-color: rgb(48 83 255 / 0.30); bottom: 15%; right: 1%;"></div>
        </div>

        <h1 class="text-[36px] font-extrabold text-center" :style="{ color: 'var(--text-primary)' }">❛❛Testimonial❟❟</h1>

        <div class="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1">
            <div v-for="employee in employees" :key="employee.name" 
                 class="w-[454px] h-[180px] bg-white/30 border-4 border-white p-5 m-5 mt-20" :style="{ color: 'var(--text-secondary)' }">
                <img :src="employee.image" />
                <div class="my-3 mb-2">
                    <p class="text-[16px] font-bold">{{ employee.name }}</p>
                    <p class="text-[14px]">{{ employee.about }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.faded-circle {
  width: 600px;
  height: 600px;
  border-radius: 60%;
  position: absolute;
  z-index: 0;
  background: radial-gradient(circle, var(--glow-color) 0%, rgba(0,0,0,0) 75%);
}
</style>