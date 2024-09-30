<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import jsonRequest from "../../services/jsonRequest";
import getDinamicData from "../../services/requestFunction";
import CiteDivider from "../../assets/graphic/citeDivider.vue";
import LoadingWholePage from "../../components/LoadingWholePage.vue";
import { ChevronLeftIcon } from "@heroicons/vue/24/outline";
import IconPdf from "../../assets/Icons/IconPdf.vue";
import IconExcel from "../../assets/Icons/IconExcel.vue";

const route = useRoute();
const router = useRouter();
const articles = ref([]);
const docTree = ref([]);
const articleTitle = ref();
const articleContent = ref();
const isLoading = ref(false);
const isLoadingDocs = ref(false);
const selectedArticleIndex = ref(null);
const modalRef = ref(null); // Ref para controlar el modal

async function getArticles() {
  isLoading.value = true;
  const objt: jsonRequest = {
    encryptedSP: "X_X1IkYi9GQQNXLDJWu6+jxSo25TY0PAALLvBpYwxagcBI=",
    paramValues: [
      {
        name: "ACODE",
        value: route.params.acode,
        type: "varchar",
      },
    ],
  };
  articles.value = await getDinamicData(objt);
  articleTitle.value = articles.value[0].TITULO;
  articleContent.value = articles.value[0].DESCRIPCION;
  isLoading.value = false;
}

onMounted(() => {
  getArticles();
});

async function getDocumentosList(article: string) {
  isLoadingDocs.value = true;
  const objt: jsonRequest = {
    encryptedSP: "X_X1IkYi9GQQNX2PyQxli5MAQ==",
    paramValues: [
      {
        name: "ACODE",
        value: route.params.acode,
        type: "varchar",
      },
      {
        name: "FRACCION",
        value: article,
        type: "varchar",
      },
    ],
  };
  docTree.value = await getDinamicData(objt);
  isLoadingDocs.value = false;
}

const openModal = async (index: number) => {
  selectedArticleIndex.value = index;
  await getDocumentosList(articles.value[index].FRACCIONES);
  if (modalRef.value) {
    modalRef.value.showModal(); // Mostrar el modal explícitamente
  }
};

const closeModal = () => {
  if (modalRef.value) {
    modalRef.value.close(); // Cerrar el modal
  }
};

// Agrupar documentos por RootID
const groupedDocuments = computed(() => {
  if (!docTree.value.length) return [];
  const groups = docTree.value.reduce((acc, doc) => {
    if (!acc[doc.RootID]) {
      acc[doc.RootID] = {
        RootDescription: doc.RootDescription,
        documents: [],
      };
    }
    acc[doc.RootID].documents.push(doc);
    return acc;
  }, {});
  return Object.keys(groups).map((key) => ({
    RootID: key,
    RootDescription: groups[key].RootDescription,
    documents: groups[key].documents,
  }));
});
</script>

<template>
  <LoadingWholePage v-if="isLoading" />

  <div class="px-5 md:px-20 flex flex-col justify-center items-center " v-else>
    <button class="bg-primary rounded-md absolute top-24 left-5  md:top-32 md:left-10" @click="router.push('/transparencia')">
      <ChevronLeftIcon class="w-8 h-8 stroke-white" />
    </button>
    <h1 class="text-5xl font-bold text-center pt-16 pb-4 text-primary">{{ articleTitle }}</h1>
    <CiteDivider class="w-10 mb-10" />
    <p class="text-xl max-w-1/2 text-center">{{ articleContent }}</p>
    <svg class="h-2 w-20 bg-primary rounded-xl m-10"></svg>

    <div class="join join-vertical w-full">
      <div class="collapse collapse-arrow join-item border-base-300 border mb-2 rounded-xl" v-for="(article, index) in articles" :key="index">
        <input type="radio" name="my-accordion-4" class="rounded-xl" />
        <div class="collapse-title text-md font-medium">{{ article.FRACCIONES }}</div>
        <div class="collapse-content">
          <p class="text-sm">{{ article.DESC }}</p>
          <button class="btn bg-primary mt-5" @click="openModal(index)">Ver documentos</button>
        </div>
      </div>
    </div>

    <!-- Modal controlado por ref -->
    <dialog ref="modalRef" class="modal">
      <div class="modal-box">
        <h3 class="text-lg font-bold">{{ articles[selectedArticleIndex]?.FRACCIONES }}</h3>

        <div class="modal-action flex flex-col p-1 max-h-96  overflow-y-scroll overflow-x-hidden pr-2">
          <div class="collapse collapse-arrow border-base-300 border mb-2 rounded-xl ml-2 " v-for="group in groupedDocuments" :key="group.RootID">
            <input type="radio" :id="'collapse-' + group.RootID" name="my-accordion" class="rounded-xl" />
            <label :for="'collapse-' + group.RootID" class="collapse-title text-md font-medium">
              {{ group.RootDescription }}
            </label>
            <div class="collapse-content ">
              <ul class="overflow-y-scroll max-h-32  pb-10">
                <li v-for="doc in group.documents" :key="doc.DocumentID" class="text-sm flex items-center gap-2 mb-5">
                  <IconPdf v-if="doc.ICON === 'PDF'" class="w-5 h-5" />
                  <IconExcel v-if="doc.ICON === 'EXCEL'" class="w-5 h-5" />

                  <!-- Enlace al documento -->
                  <a :href="doc.LINK" target="_blank" class="cursor-pointer underline hover:text-primary transition">
                    {{ doc.FILENAME }}  [{{doc.ICON}}]
                  </a>
                </li>

              </ul>
            </div>
          </div>

          <form method="dialog" class="self-end">
            <button class="btn" @click="closeModal">Cerrar</button>
          </form>
        </div>
      </div>
    </dialog>

  </div>
</template>

<style scoped></style>
