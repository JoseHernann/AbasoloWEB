<script setup lang="ts">
import FacebookLogo from "../../assets/Icons/facebookLogo.vue";
import InstagramLogo from "../../assets/Icons/InstagramLogo.vue";
import jsonRequest from "../../services/jsonRequest";
import getDinamicData from "../../services/requestFunction";
import {onMounted, ref} from "vue";
import LoadingWholePage from "../../components/LoadingWholePage.vue";
const ayuntamiento = ref([]);
const isLoading = ref(false);
async function getAyuntamiento() {
  isLoading.value = true;
  const obj : jsonRequest = {
    encryptedSP: "X_Xch1TwpDej+cMklLTxjX29uzJhFMN5Xo1"
  }
  ayuntamiento.value = await getDinamicData(obj);
  isLoading.value = false;
}

onMounted(() => {
  getAyuntamiento();
})
</script>

<template>
  <LoadingWholePage v-if="isLoading" />
  <div class="flex gap-10 flex-wrap justify-center" v-else>
    <div class="relative justify-around items-center mb-10 flex flex-col gap-2" v-for="persona in ayuntamiento">
      <div
          class=" top-0 left-0  rounded-[176px/172px] bg-cover w-52 h-52"
          :style="{
        backgroundImage: `linear-gradient(180deg, rgba(253, 131, 36), rgba(255, 163, 10))`
        }"
      >
        <img :src="persona.IMAGEN" class="mt-2  " >
      </div>
      <p class="text-2xl  font-semibold text-primary pt-2 max-w-52 text-center">{{persona.NOMBRE}}</p>
      <p class="text-center text-xl font-semibold">{{persona.PUESTO}}</p>
      <div class="flex justify-center w-full gap-5">
        <a :href="persona.FACEBOOK" target="_blank" v-if="persona.FACEBOOK != '' ">
          <FacebookLogo class="w-10 h-10" />
        </a>
        <a :href="persona.INSTAGRAM" target="_blank" v-if="persona.INSTAGRAM != '' ">
          <InstagramLogo class="w-10 h-10" />
        </a>
      </div>
      <a v-if="persona.CORREO != '' " :href="`mailto:${persona.CORREO}`" class="link" >{{persona.CORREO}}</a>
    </div>
  </div>

</template>



<style scoped>
</style>
