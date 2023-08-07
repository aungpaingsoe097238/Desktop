<template>
  <div class="h-screen flex justify-center flex-col items-center w-screen bg-primary">
    <div class=" text-4xl text-white">Loading...</div>
    <div class="progress-bar-container">
      <div class="progress-bar" :style="{ width: progress + '%' }"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const progress = ref(0);

onMounted(() => {
  const interval = setInterval(() => {
    if (progress.value < 100) {
      progress.value += 10;
    } else {
      clearInterval(interval);
    }
  }, 300);
});
</script>

<style>
.progress-bar-container {
  width: 200px;
  height: 8px;
  background-color: #f1f1f1;
  border-radius: 10px;
  margin-top: 20px;
}

.progress-bar {
  height: 100%;
  background-color: #4caf50;
  border-radius: 10px;
}
</style>
