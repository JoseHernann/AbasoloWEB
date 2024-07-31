<script setup>
import VHeader from "./VHeader.vue";
import VFooter from "./VFooter.vue";
</script>

<template>
  <div class="flex  flex-col justify-between">
    <VHeader />
    <RouterView/>
    <VFooter />
  </div>
</template>

<style scoped>

</style>