<template>
  <section id="register" class="w-full px-6 md:px-20 lg:px-50 py-20" :style="{ backgroundColor: 'var(--bg-primary)' }">

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 lg:gap-20 items-center p-5">
        <img src="/src/assets/81.png" class="w-[505px] h-auto" />

        <div class="w-auto lg:w-[550px] bg-white rounded-lg p-7 md:p-9 shadow-md">
            <h1 class="font-bold text-[28px] md:text-[36px] text-[#5380EA] mb-3">{{ $t('registerTitle') }}</h1>
            <p class="text-[#475569] mb-6">{{ $t('registerIntro') }}</p>

            <form class="text-[#475569]">
                <label for="name" class="required">{{ $t('registerName') }}</label>
                <input type="text" placeholder="Enter your name" required>

                <label for="company" class="required">{{ $t('registerCompany') }}</label>
                <input type="text" placeholder="Enter your company name" required>

                <label for="email" class="required">{{ $t('registerEmail') }}</label>
                <input type="email" placeholder="Enter your email address" required>

                <label for="message" class="required">{{ $t('registerMessage') }}</label>
                <textarea id="message" placeholder="Your message here" required></textarea>
            </form>

            <button class="bg-[#5380EA] mt-4 px-10 py-3 rounded-full 
              text-white font-bold shadow-xl w-full md:w-auto">{{ $t('registerSubmit') }}</button>
        </div>
    </div>

    <hr class="h-0.5 w-[80%] md:w-[90%] mx-auto mt-20" :style="{ backgroundColor: 'var(--text-secondary)' }">
    <p class="text-[14px] md:text-[16px] text-center mt-7" :style="{ color: 'var(--text-secondary)' }">{{ $t('copyright') }}</p>
  </section>
</template>

<style scoped>
form input {
  width: 100%;
  padding: 12px;
  border: 1px solid #d4d6d7;
  border-radius: 2px;
  margin-bottom: 18px;
  margin-top: 5px;
  outline: none;
  background-color: var(--bg-card);
}
form input:focus {
  border-color: #5380EA;
}
label.required::after {
  content: " *";
  color: red;
}
form textarea {
  width: 100%;
  height: 120px;
  padding: 12px;
  border: 1px solid #d4d6d7;
  border-radius: 2px;
  margin-bottom: 18px;
  margin-top: 5px;
  outline: none;
  background-color: var(--bg-card);
}
form textarea:focus {
  border-color: #5380EA;
}
</style>