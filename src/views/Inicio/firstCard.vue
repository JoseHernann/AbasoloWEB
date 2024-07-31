<script setup lang="ts">
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
  <div class="card">
    <component :is="props.icon" class="stroke-1"/>
    <p class="heading">
      {{ props.title }}
    </p>
    <p>
      {{ props.cardContent }}
    </p>
    <p>{{ props.link }}
    </p></div>
</template>

<style scoped>
.card {
  position: relative;
  width: 290px;
  height: 354px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: end;
  padding: 12px;
  gap: 12px;
  border-radius: 8px;
  cursor: pointer;
  color: #000000;
}

.card::before {
  content: '';
  position: absolute;
  inset: 0;
  left: -5px;
  margin: auto;
  width: 300px;
  height: 364px;
  border-radius: 10px;
  background: linear-gradient(129deg, #fd8324 31%, #ff4e00 104%);
  z-index: -10;
  pointer-events: none;
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

@media (max-width: 768px) {
  .card:before {
    width: 239px;

  }

}

.card::after {
  content: "";
  z-index: -1;
  position: absolute;
  inset: 0;
  background: linear-gradient(129deg, #fd8324 31%, #ff4e00 104%);
  transform: translate3d(0, 0, 0) scale(1);
  filter: blur(40px);
}

.heading {
  font-size: 20px;
  text-transform: capitalize;
  font-weight: 700;
}

.card p:not(.heading) {
  font-size: 14px;
}

.card p:last-child {
  color: #fd8324;
  font-weight: 600;
}

.card:hover::after {
  filter: blur(30px);
}

.card:hover::before {
  transform: rotate(-90deg) scaleX(1.34) scaleY(0.77);
}


</style>