<script setup>
import { ref } from "vue";
import About from "../components/windows/About.vue";
import Portfolio from "../components/windows/Portfolio.vue";
import Contact from "../components/windows/Contact.vue";

const windows = ref([]);

const handleShowWindow = (window) => {
  windows.value.push(window);
  console.log(windows.value);
};
</script>

<template>
  <div>
    <div class="relative mx-auto">
      <div
        class="cursor-pointer absolute hover:bg-gray-300 p-3 top-[40px] end-5 lg:end-16"
        @click="handleShowWindow('portfolio')"
      >
        <img src="../assets/images/porpleicon1-p-500.png" class="w-[60px]" alt="" />
      </div>
      <div
        class="cursor-pointer absolute hover:bg-gray-300 p-3 top-[140px] end-5 lg:end-16"
        @click="handleShowWindow('about')"
      >
        <img src="../assets/images/porpleicon2-p-500.png" class="w-[60px]" alt="" />
      </div>
      <div
        class="cursor-pointer absolute hover:bg-gray-300 p-3 top-[240px] end-5 lg:end-16"
        @click="handleShowWindow('contact')"
      >
        <img src="../assets/images/porpleicon3-p-500.png" class="w-[60px]" alt="" />
      </div>
    </div>

    <!-- Windows -->
    <div v-for="(window, index) in windows" :key="index">
      <About v-if="window === 'about'" :index="index" />
    </div>
    <div v-for="(window, index) in windows" :key="index">
      <Portfolio v-if="window === 'portfolio'" />
    </div>
    <div v-for="(window, index) in windows" :key="index">
      <Contact v-if="window === 'contact'" />
    </div>
  </div>
</template>
