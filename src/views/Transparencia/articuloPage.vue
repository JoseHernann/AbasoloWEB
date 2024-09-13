<script setup lang="ts">
import {onMounted, ref, vShow} from "vue";
import {useRoute, useRouter} from "vue-router";
import jsonRequest from "../../services/jsonRequest";
import getDinamicData from "../../services/requestFunction";
import CiteDivider from "../../assets/graphic/citeDivider.vue";
import TreeNodes from "./TreeNodes.vue";
import LoadingWholePage from "../../components/LoadingWholePage.vue";
import {ChevronLeftIcon} from "@heroicons/vue/24/outline";


const route = useRoute();
const router = useRouter();
const articles = ref([]);
const docTree = ref([]);
const articleTitle = ref();
const articleContent = ref();
const articleDesc = ref([])
const isLoading = ref(false)

async function  getArticles(){
   isLoading.value = true
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
  articles.value =  await getDinamicData(objt);
  console.log(articles.value);
  articleTitle.value = articles.value[0].TITULO;
  articleContent.value = articles.value[0].DESCRIPCION;
  isLoading.value = false;
}


onMounted(() => {
  getArticles();
})

async function getDocumentosList (article: string) {
  const objt : jsonRequest= {
    encryptedSP: "X_X1IkYi9GQQNX2PyQxli5MAQ==",
    paramValues:[
      {
        name: "ACODE",
        value: route.params.acode,
        type: 'varchar'
      },
      {
        name: "FRACCION",
        value: article,
        type: 'varchar'
      }
    ]
  }
  docTree.value =  await getDinamicData(objt);
  treeData.value = buildTree(docTree.value);
  console.log(treeData);
}
 const treeData = ref([]);

const openModal = (index: number) => {
  const modal = document.getElementById(`docs_modal_${index}`) as HTMLDialogElement
  modal.showModal();
  getDocumentosList(articles.value[index].FRACCIONES);
}

function buildTree(data) {
  const tree = {};
  const roots = [];

  // Primero, crea un objeto para todos los elementos del árbol.
  data.forEach(item => {
    tree[item.ID] = { ...item, children: [] };
  });

  // Luego, asigna los hijos a sus padres y encuentra las raíces.
  data.forEach(item => {
    if (item.FATHER_ID === null) {
      roots.push(tree[item.ID]);
    } else if (tree[item.FATHER_ID]) {
      tree[item.FATHER_ID].children.push(tree[item.ID]);
    }
  });

  // Si solo hay una raíz, devuélvela directamente.
  return roots.length === 1 ? roots[0] : roots;
}




</script>

<template>
  <LoadingWholePage v-if="isLoading" />

  <div class="px-5 md:px-20 flex flex-col justify-center items-center " v-else>
    <button class="bg-primary rounded-md absolute top-32 left-10 " @click="router.push('/transparencia')"><ChevronLeftIcon class="w-8 h-8 stroke-white "/></button>
    <h1 class="text-5xl font-bold text-center py-10 text-primary ">{{articleTitle}}</h1>
    <CiteDivider class="w-10 mb-10"/>
    <p class=" text-xl max-w-1/2 text-center">{{articleContent}}</p>
    <svg class="h-2 w-20 bg-primary rounded-xl m-10"> </svg>
    <div class="join join-vertical w-full">
      <div
          class="collapse collapse-arrow join-item border-base-300 border mb-2 rounded-xl"
          v-for="(article, index) in articles"
          :key="index"
      >
        <input type="radio" name="my-accordion-4" class="rounded-xl" />
        <div class="collapse-title text-md font-medium">{{ article.FRACCIONES }}</div>
        <div class="collapse-content">
          <p class="text-sm">{{ article.DESC }}</p>
          <button class="btn bg-primary mt-5" @click="openModal(index)">Ver documentos</button>
        </div>
        <dialog :id="'docs_modal_' + index" class="modal" v-for="(article, index) in articles" :key="index">
          <div class="modal-box">
            <h3 class="text-lg font-bold">{{ article.FRACCIONES }}</h3>
            <div class="modal-action">
              <TreeNodes :node="treeData" />
              <form method="dialog">
                <button class="btn">Cerrar</button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  </div>

</template>

<style scoped>

</style>