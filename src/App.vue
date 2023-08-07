<script setup>
import { ref, onMounted } from "vue";
import Header from "./components/common/Header.vue";

const screenLoader = ref(true);
const progress = ref(0);

onMounted(() => {
  const interval = setInterval(() => {
    if (progress.value < 100) {
      progress.value += 10;
    } else {
      clearInterval(interval);
      screenLoader.value = false;
    }
  }, 200);
});
</script>

<template>
  <div
    v-if="screenLoader"
    class="h-screen flex justify-center flex-col items-center w-screen bg-[#ebd1ae]"
  >
    <div class="text-4xl text-white">Loading...</div>
    <div class="progress-bar-container">
      <div class="progress-bar" :style="{ width: progress + '%' }"></div>
    </div>
  </div>
  <div class="app" v-else>
    <Header></Header>
    <routerView class="mt-12"></routerView>
  </div>
</template>

<style scoped>
.app {
  width: 100%;
  height: 100vh;
  background-image: url("./assets/images/background.png");
  position: fixed;
  background-size: cover;
}

* {
  font-family: "game";
}

.progress-bar-container {
  width: 200px;
  height: 8px;
  background-color: #f1f1f1;
  border-radius: 10px;
  margin-top: 20px;
}

.progress-bar {
  height: 100%;
  background-color: #CC6B49;
  border-radius: 10px;
}
</style>
