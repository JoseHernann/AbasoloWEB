<script setup>
import { onMounted, ref } from 'vue';
import router from '../router/router.js';
import {Bars3Icon} from "@heroicons/vue/24/outline/index.js";
const selectedRouteIndex = ref(0);
const roleRoutes = getAuthorizedRoutes();


function goToRoute(route, index) {
  selectedRouteIndex.value = index;
  router.push(route);

}

function getAuthorizedRoutes() {
  return router.getRoutes().filter((route) => {
    return !!route.meta.showInHeader;
  });
}


/*onMounted(() => {
  router.push(roleRoutes[0].path );
});*/
</script>

<template>
  <nav class="navbar bg-silver-50 ">
    <div class="flex-1">
      <img src="../assets/logos/logo.png" class="w-24 mb-2"  @click="router.push('/')"/>
    </div>
      <details class="dropdown dropdown-end bg-white rounded-lg shadow-sm  md:hidden ">
        <summary tabindex="0" role="button" class="btn btn-ghost btn-square">
          <Bars3Icon class="w-6 h-6 stroke-primary" />
        </summary>
        <ul tabindex="0" class="w-80 dropdown-content z-[2 ] mt-6 p-4 rounded-box shadow font-semibold bg-silver-50" >
          <li v-for="(route , index ) in roleRoutes" @click="goToRoute(route.path,index)" :class="{'text-silver-500 cursor-pointer': selectedRouteIndex !== index , 'text-primary cursor-pointer': selectedRouteIndex === index , 'p-1 ':true} "> {{route.name}} </li>
        </ul>
      </details>
      <div class="flex-none max-md:hidden bg-silver-50">
        <ul class="menu menu-horizontal px-3 font-semibold gap-5" >
          <li v-for="(route , index ) in roleRoutes" @click="goToRoute(route.path,index)" :class="{'text-silver-500 cursor-pointer': selectedRouteIndex !== index , 'text-primary cursor-pointer': selectedRouteIndex === index}"> {{route.name}} </li>
        </ul>
      </div>
  </nav>

</template>

<style scoped>

</style>