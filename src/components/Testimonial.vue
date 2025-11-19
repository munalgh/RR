<script setup>
const images = import.meta.glob('/src/assets/*.png', { eager: true, import: 'default' })
const employees = [
    {name: 'testSmith.name', about: 'testSmith.about', image: images['/src/assets/smith.png']},
    {name: 'testJohn.name', about: 'testJohn.about', image: images['/src/assets/john.png']}
]
</script>

<template>
    <section id="testimonials" class="relative w-full px-6 md:px-20 py-30 overflow-hidden" :style="{ backgroundColor: 'var(--bg-secondary)' }">
        <div>
            <div class="faded-circle" style="--glow-color: rgb(255 93 48 / 0.35); top: 15%; right: 70%;"></div>
            <div class="faded-circle" style="--glow-color: rgb(48 83 255 / 0.30); bottom: 15%; right: 1%;"></div>
        </div>

        <h1 class="text-[32px] md:text-[36px] font-extrabold text-center" :style="{ color: 'var(--text-primary)' }">{{ $t('testTitle') }}</h1>

        <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 justify-items-center">
            <div v-for="employee in employees" :key="employee.name" class="flex items-center gap-5 w-[404px] h-auto md:w-[454px] bg-white/40 border-3 border-white/70 shadow-2xl py-5 px-3 mt-20 z-50" :style="{ color: 'var(--text-secondary)' }">
                <img :src="employee.image" class="w-17 h-17 object-cover rounded-full" />
                <div class="my-3 mb-2">
                    <p class="text-[16px] font-bold">{{ $t(employee.name) }}</p>
                    <p class="text-[14px]">{{ $t(employee.about) }}</p>
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