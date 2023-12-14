<script setup>
import { ref } from 'vue';

defineProps({
  msg: String,
});

const count = ref(0);
</script>

<template>
  <div class="container" style="text-align:center">
    <img src="../assets/images/img1.jpg" alt="Logo" style="width: 100%; margin: 1rem auto;">
    <h1>Home</h1>

   
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
