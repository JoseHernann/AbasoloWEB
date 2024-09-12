<template>
  <li>
    <div>{{ node.CHILD }}</div>
    <ul v-if="node.children && node.children.length">
      <TreeNodes v-for="child in node.children" :key="child.ID" :node="child" />
    </ul>
  </li>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  node: {
    type: Object,
    required: true
  }
});
</script>

<style scoped>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
li {
  margin-left: 20px;
}
</style>
