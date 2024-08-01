<script setup lang="ts">
import {onMounted, ref} from "vue";
import {useRoute} from "vue-router";
import jsonRequest from "../../services/jsonRequest";

const route = useRoute();

const article = ref([]);
import getDinamicData from "../../services/requestFunction";


async function  getArticle(){
  const objt : jsonRequest= {
    encryptedSP: "X_X1IkYi9GQQNXLDJWu6+jxSo25TY0PAALLvBpYwxagcBI=",
    paramValues:[
      {
        name: "ACODE",
        value: route.params.acode,
        type: 'varchar'
      }
    ]
  }

  article.value =  await getDinamicData(objt);
  console.log(article.value);
}

onMounted(() => {
  //getArticle();

})
</script>

<template>

</template>

<style scoped>

</style>