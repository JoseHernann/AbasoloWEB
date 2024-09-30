<script setup lang="ts">
    import jsonRequest from "../../services/jsonRequest";
    import {onMounted, ref} from "vue";
    import getDinamicData from "../../services/requestFunction";
    const buttons = ref([]);
    import router from '../../router/router';


    async function getBtns(){
      const objt : jsonRequest= {
        encryptedSP: "X_X1IkYi9GQQNVOH96PUxPlkuQVe9V0Y2lc"
      }
      buttons.value  = await getDinamicData(objt);
    }
    onMounted(() => {
      getBtns();
    })

    function  goTo(ACod){
      router.push({name: 'Articulo', params: {acode: ACod}})

    }
</script>

<template>
  <section class="hero min-h-screen  ">
    <div class="w-full h-full flex items-center flex-col pt-10 bg-gradientPrimary gap-10 ">
        <h1 class="md:text-6xl text-4xl font-bold text-white pt-10">Transparencia</h1>
      <p class="md:p-20 md:text-center text-justify p-5 md:text-3xl  text-xl text-white" >¡Bienvenidos a nuestra sección de Transparencia! En esta plataforma, ponemos a disposición de todos los ciudadanos la información pública de manera clara y accesible. Nuestra meta es promover la transparencia y garantizar el derecho de acceso a la información. Aquí podrás encontrar datos, documentos y recursos relevantes para entender y ejercer tus derechos como ciudadano informado. <br> <b>¡Explora y mantente informado!</b></p>
    </div>
  </section>
  <section class="hero min-h-screen">
    <div class="flex h-full justify-between flex-col md:flex-row  items-center flex-wrap">
      <div class="md:w-1/2 md:p-10 p-10">
        <a href="https://www.plataformadetransparencia.org.mx/">
          <img src="../../assets/images/transparencia.png" />
        </a>
      </div>
      <div class="flex flex-col gap-10 p-10 text-justify md:p-20 md:w-1/2">
        <p class="text-2xl font-bold  "> ¿Qué es la Plataforma Nacional de Transparencia?</p>
        <p>
          La Plataforma Nacional de Transparencia (PNT) es una herramienta digital diseñada para facilitar el acceso de los ciudadanos a la información pública en México. A través de esta plataforma, puedes consultar datos y documentos de instituciones públicas, garantizando el derecho a la información de manera sencilla y accesible.</p>
        <p class="text-3xl font-bold  ">Funciones principales de la PNT:</p>
        <ul class="list-disc">
          <li>
            <b>Acceso a la Información:</b> Realiza solicitudes de información a cualquier institución pública de forma rápida y eficiente.
          </li>
          <li>
           <b> Consulta de Obligaciones de Transparencia:</b> Accede a información que las instituciones están obligadas a publicar, como presupuestos, contratos, y más.
          </li>
        </ul>
      </div>
    </div>
  </section>
  <section class="hero py-10  w-full ">
      <div class="flex px-[5%] md:px-10 gap-10 w-full flex-wrap">
        <button class="font-semibold text-white  shadow-xl text-xl md:text-2xl bg-gradientPrimary rounded-xl p-5 md:p-10 border-0  hover:opacity-80" v-for="button in buttons" @click="goTo(button.ACODE)" >{{button.TITULO}}</button>
      </div>
  </section>
</template>

<style scoped>

</style>