<script setup>

</script>

<template>
     <section class="w-full px-50 py-30" :style="{ backgroundColor: 'var(--bg-primary)' }">
        <div class="grid grid-cols-2 gap-40 items-center p-5">
            <div>
                <img src="/src/assets/81.png">
            </div>

            <div class="w-[549px] h-[842px] bg-white rounded-lg p-9">
                <h1 class="font-bold text-[36px] text-[#5380EA] mb-3">Register interest</h1>
                <p class="text-[#475569]">Use the form below to contact us. Please be as detailed and precise as possible. Include your industry and any specific requests. To help us get to know and serve you better, we thank you for first giving us a good description of who you are. You can also send an email, call us or send us a WhatsApp to make an appointment.</p>
                <br><br>
                <form class="text-[#475569]">
                    <label for="name" class="required">Name </label>
                    <input type="text" placeholder="Enter your name" required>

                    <label for="company" class="required">Company </label>
                    <input type="text" placeholder="Enter your company name" required>

                    <label for="email" class="required">Email address </label>
                    <input type="email" placeholder="Enter your email address" required>

                    <label for="message" class="required">Message </label>
                    <textarea id="message" placeholder="Your message here" required></textarea>
                </form>
                <button class="bg-[#5380EA] mt-5 px-15 py-3 rounded-full text-white font-bold shadow-2xl">Submit</button>
            </div>
        </div>

        <hr class="h-0.5 w-[80%] mx-auto mt-20" :style="{ backgroundColor: 'var(--text-secondary)' }">
        <p class="text-[16px] font-bold text-center mt-7" :style="{ color: 'var(--text-secondary)' }">@Copyright 2023 all right reserved by Naimur Rahman Hira</p>
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