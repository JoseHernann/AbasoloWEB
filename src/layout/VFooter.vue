<script setup>

import FacebookLogo from "../assets/Icons/facebookLogo.vue";
import InstagramLogo from "../assets/Icons/InstagramLogo.vue";

const socialMedia = [
  {
    name: "Facebook",
    icon: FacebookLogo,
    link: 'https://www.facebook.com/AbasoloNL'
  },
  {
    name: "Instagram",
    icon: InstagramLogo,
    link: 'https://www.instagram.com/abasolonl/'
  },
];
</script>

<template>
<footer class="footer bg-[#454545]  flex items-center justify-around py-5  md:py-0 flex-col md:flex-row ">
  <img src="../assets/logos/logobn.png" class="h-52 w-64 absolute  md:relative  opacity-70 ">
  <div class="max-w-[40rem] self-center text-white z-10 px-5 ">
    <h1 class="text-3xl">Contacto</h1>
    <p class=" text-md">Benito Juárez 115, Centro, 65650 Abasolo, N.L. , Mexico  8182360440 prsidenciaAbasolonl@gmail.com Horario de atención: Lunes - Viernes 9:00 am - 4:00 pm</p>
  </div>
  <div class="flex md:flex-col flex-row z-10 gap-5">
    <a v-for="sm in socialMedia" :href="sm.link" target="_blank">
      <div class="bg-white rounded-full w-full h-full p-3 flex justify-center cursor-pointer" >
        <component :is="sm.icon" class="w-6 h-6 "   />
      </div>
    </a>
  </div>
</footer>
</template>

<style scoped>

</style>