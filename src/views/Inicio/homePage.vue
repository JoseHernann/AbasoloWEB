<script setup >
import {onMounted, ref} from "vue";
import BoltCards from "../../components/boltCards.vue";

import  { BuildingLibraryIcon , NewspaperIcon, ScaleIcon } from "@heroicons/vue/24/outline/index.js";




// Social media
import FacebookLogo from "../../assets/Icons/facebookLogo.vue";
import InstagramLogo from "../../assets/Icons/InstagramLogo.vue";


// Carusel images
import imagen1 from "../../assets/images/image2.webp";
import imagen2 from "../../assets/images/image1.webp";
import imagen3 from "../../assets/images/image3.webp";
import imagen4 from "../../assets/images/image4.webp";
import {BuildingOffice2Icon} from "@heroicons/vue/24/outline/index.js";
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/splide/css';

import NewsDivider from "../../assets/graphic/newsDivider.vue";
import ElfsightWidget from "./elfsightWidget.vue";
import FirstCard from "./firstCard.vue";
import router from "../../router/router.js";


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


const caruselImages = [
  {
    src: imagen3,
    alt: 'Abasolo',
  },
  {
    src: imagen2,
    alt: 'Abasolo',
  },
  {
    src: imagen1,
    alt: 'Abasolo',
  },
  {
    src: imagen4,
    alt: 'Abasolo',
  },
];

const currentIndex = ref(0)
function  startAutoSlide() {
  setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % caruselImages.length;
  }, 5000);
}
onMounted(() => {
    startAutoSlide()
})
</script>

  <template>
    <section class="hero min-h-screen ">
      <div class="w-full h-full flex flex-col lg:flex-row  lg:bg-gradientSecondary  bg-transparent ">
        <div class="flex flex-col justify-center gap-14 py-10 md:px-20 text-white  ">
          <div class="flex flex-col md:text-2xl text-xl p-2">
            <span>En Abasolo</span>
            <h2 class="font-bold">Seguimos Avanzando...</h2>
          </div>
          <h1 class="font-bold text-4xl md:text-6xl lg:max-w-96 tracking-wide leading-relaxed text-primary lg:text-white px-2">
            Bienvenidos al Gobierno de Abasolo
          </h1>
          <div class="flex gap-5 pl-4">
            <a v-for="sm in socialMedia" :href="sm.link" target="_blank">
              <div class="bg-white rounded-full p-3 flex justify-center cursor-pointer">
                <component :is="sm.icon" class="  h-10" />
              </div>
            </a>
          </div>
        </div>
        <div class="absolute -z-10 md:z-10 md:relative w-full overflow-hidden clip opacity-85 md:opacity-100">
          <!-- Slider -->
          <div
              class="flex transition-transform duration-500 ease-in-out"
              :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
          >
            <div
                v-for="(image, index) in caruselImages"
                :key="index"
                class="w-full   flex-shrink-0"
            >
              <img :src="image.src" alt="slide" class="w-full  h-screen object-cover" />
            </div>
          </div>

          <!-- Dots -->
          <div class="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
      <span
          v-for="(image, index) in caruselImages"
          :key="index"
          class="w-3 h-3 rounded-full"
          :class="{
          'bg-gray-300 ': currentIndex === index,
          'bg-gray-50 opacity-20': currentIndex !== index,
        }"
      ></span>
          </div>
        </div>
      </div>
    </section>

    <section class="w-full flex justify-center   flex-col ">

          <p class="mt-10 text-4xl text-secondary font-bold text-center">¿Que te gustaría consultar?</p>
          <div class=" overflow-x-scroll   flex w-full justify-center gap-32  p-20  flex-wrap">

            <FirstCard card-content="Descubre mas de nuestro gobierno" title="Gobierno" link="+ Ayuntamiento" :icon="BuildingLibraryIcon" @click="router.push('/Gobierno')"/>
            <!-- <FirstCard card-content="Conoce nuestro municipio" title="Historia" link="+ Fundación , Fiestas" :icon="NewspaperIcon" @click="router.push('/Historia')"/>  -->
            <FirstCard card-content="En Abasolo no ocultamos nada" title="Transparencia" link="+ Cuentas , Sueldos , Gastos" :icon="ScaleIcon" @click="router.push('/Transparencia')"/>

          </div>
    </section>
    <section class="w-full  min-h-screen  flex-col ">
      <NewsDivider class="w-full "/>
      <ElfsightWidget class="w-full mt-5 px-4"/>
    </section>
    <section class="w-full flex flex-col items-center  p-10 gap-5" >
      <p class="font-bold text-2xl">Numeros de emergencia </p>
      <div class="flex gap-2 flex-wrap justify-center">
        <a class="w-32 md:w-52 bg-primary px-8 py-2 rounded-xl text-center flex flex-col items-center justify-center"  href="tel:911">
          <p class="text-sm md:text-xl">Emergencia</p>
          <p class="font-bold text-xl md:text-4xl">911</p>
        </a>
        <a  class="w-32 md:w-52 bg-primary px-8 py-2 rounded-xl text-center flex flex-col items-center justify-center"  href="tel:8142786105">
          <p class="text-sm md:text-xl">Protección Civil </p>
          <p class="font-bold text-lg md:text-xl">8142786105</p>
        </a>
        <a  class="w-32 md:w-52 bg-primary px-8 py-2 rounded-xl text-center flex flex-col items-center justify-center"  href="tel:8182361194">
          <p class="text-sm md:text-xl">Seguridad Pública</p>
          <p class="font-bold text-lg md:text-xl">8182361194</p>
        </a>
      </div>
      
    </section>
  </template>

<style scoped>

   @media (min-width: 1024px) {
     .clip {
       clip-path: polygon(24.9% 0%, 100.2% 0%, 100% 100%, 0% 100%);
     }
   }
   .slider {
     display: flex;
     width: 100%;
   }
</style>