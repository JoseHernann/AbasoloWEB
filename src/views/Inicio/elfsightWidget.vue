<template>
  <div>
    <div class="elfsight-app-13f606d1-b0bf-4f27-a747-04f5e0bcd394" data-elfsight-app-lazy></div>
  </div>
</template>

<script>
import { onMounted } from 'vue';

export default {
  name: 'ElfsightWidget',
  setup() {
    onMounted(() => {
      const script = document.createElement('script');
      script.src = "https://static.elfsight.com/platform/platform.js";
      script.setAttribute('data-use-service-core', '');
      script.defer = true;
      document.body.appendChild(script);
    });
  }
};
</script>

<style scoped>
/* Puedes agregar estilos aquí si es necesario */
</style>
