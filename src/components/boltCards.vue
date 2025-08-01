<script setup lang="ts">
import { ChevronRightIcon } from "@heroicons/vue/24/outline";
import { defineProps, VNode } from "vue";


type Props = {
  icon?: VNode | Function | string | null;
  title: string;
  link: string;
  cardContent: string;
};
const props = defineProps<Props>();
</script>

<template>
  <section class="creative-cards style-one">
    <div class="container">
      <div class="row">
        <div class="card-column">
          <div class="card-details">
            <div class="card-icons">
              <component :is="icon" class="stroke-black z-10"></component>
            </div>
            <h3>
              <a :href="props.link">{{ props.title }}</a>
            </h3>
            <p>
              {{ props.cardContent }}
            </p>
            <a class="read-more-btn cursor-pointer" :href="props.link">
              <ChevronRightIcon class="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
body {
  font-size: 17px;
  line-height: 30px;
  font-weight: 400;
  -moz-osx-font-smoothing: grayscale;
  word-break: break-word;
  -webkit-font-smoothing: antialiased;
  font-family: "Epilogue", sans-serif;
  margin: 0;
  background: #fff;
}
* {
  box-sizing: border-box;
}
.creative-cards {
  padding: 120px 0;
  position: relative;
}
.creative-cards .container {
  width: 100%;
  padding-right: 0.75rem;
  padding-left: 0.75rem;
  margin-right: auto;
  margin-left: auto;
}
.creative-cards .container .row {
  display: flex;
  flex-wrap: wrap;
}
.creative-cards .container .row .card-column {
  flex: 0 0 auto;
  width: 33.33333333%;
  text-align: center;
  max-width: 100%;
  padding-right: 15px;
  padding-left: 15px;
}
.card-details {
  width: 80%;
  margin: auto;
  position: relative;
  transition: 0.3s ease-in-out;
}
.card-details:before {
  content: "";
  width: 190px;
  height: 380px;
  background: #f7f6f2;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) skew(-20deg, 0deg);
  z-index: -1;
  transition: 0.3s ease-in-out;
}
.card-details:hover:before {
  background-color: #ffe2c8;
}

.card-icons {
  width: 140px;
  height: 150px;
  position: relative;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
.card-icons:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  border: 1px solid;
  width: 100%;
  height: 100%;
  transform: skew(-20deg, 0deg);
  background: #fff;
  border-color: #ff983f;
  transition: 0.3s ease-in-out;
}
.card-details:hover .card-icons:before {
  background-color: #ff983f;
}
.card-icons svg {
  position: relative;
  width: 70px;
  height: 70px;
}
.card-details h3 {
  margin-bottom: 15px;
  margin-top: 50px;
  font-weight: 700;
  font-size: 1.75rem;
  line-height: 1.2;
}
.card-details h3 a {
  color: #000;
  text-decoration: none;
}
.card-details p {
  font-size: 16px;
  line-height: 30px;
  color: #444;
  font-weight: 400;
  margin-bottom: 30px;
}
.read-more-btn {
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid;
  border-radius: 100%;
  margin: auto;
  background: #fff;
  transform: translateX(-10px);
  opacity: 0;
  visibility: hidden;
  border-color: #ff983f;
  transition: 0.3s ease-in-out;
  text-decoration: none;
}
.read-more-btn i {
  color: #000;
  font-size: 12px;
}
.card-details:hover .read-more-btn {
  transform: translateX(0);
  opacity: 1;
  visibility: visible;
}

/* ============= Responsive Ipad ==================== */
@media (max-width: 992px) {
  .creative-cards .container .row .card-column {
    flex: 0 0 auto;
    width: 50%;
    margin-bottom: 40px;
  }
}

/* ============= Responsive Iphone ==================== */
@media (max-width: 480px) {
  .creative-cards .container .row .card-column {
    flex: 0 0 auto;
    width: 100%;
    margin-bottom: 20px;
  }
  .card-details {
    width: 100%;
  }
  .read-more-btn {
    transform: translateX(0px);
    opacity: 1;
    visibility: visible;
  }
}
</style>
