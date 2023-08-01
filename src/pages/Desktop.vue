<script setup>
import { ref, computed } from "vue";
import ScreenModel from "../components/windows/ScreenModel.vue";

const windows = ref([]);

/*
 * Show Screen
 */
const handleShowWindow = (window) => {
  windows.value.push(window);
};

/**
 * Filter dupclicate array value
 */
const uniqueWindows = computed(() => {
  let uniqueSet = new Set(windows.value);
  let uniqueArray = Array.from(uniqueSet);
  return uniqueArray;
});

/*
 * Close Screen
 */
const close = (index) => {
  windows.value = windows.value.filter((window, i) => i !== index);
};
</script>

<template>
  <div>
    <div class="relative mx-auto">
      <div
        class="cursor-pointer absolute hover:bg-gray-300 p-3 top-[40px] end-5 lg:end-16"
        @click="handleShowWindow('portfolio')"
      >
        <img
          src="../assets/images/porpleicon1-p-500.png"
          class="w-[60px]"
          alt=""
        />
      </div>
      <div
        class="cursor-pointer absolute hover:bg-gray-300 p-3 top-[140px] end-5 lg:end-16"
        @click="handleShowWindow('about')"
      >
        <img
          src="../assets/images/porpleicon2-p-500.png"
          class="w-[60px]"
          alt=""
        />
      </div>
      <div
        class="cursor-pointer absolute hover:bg-gray-300 p-3 top-[240px] end-5 lg:end-16"
        @click="handleShowWindow('contact')"
      >
        <img
          src="../assets/images/porpleicon3-p-500.png"
          class="w-[60px]"
          alt=""
        />
      </div>
    </div>

    <!-- Windows -->
    <div v-for="(window, index) in uniqueWindows" :key="index">
      <ScreenModel :window="window" :index="index" @close="close" />
    </div>
  </div>
</template>
