<script setup>
import { computed } from "vue";
import ScreenModel from "../components/windows/ScreenModel.vue";
import { useScreenStore } from "../features/pinia/screen";

const screenStore = useScreenStore();
const screens = computed(() => screenStore.getScreens);

/*
 * Show Screen
 */
const handleShowScreen = (screen) => {
  screenStore.setScreens(screen);
};

const portfilioDetail = (portfolio) => {
  screenStore.setScreens("portfolio-detail", portfolio);
};
</script>

<template>
  <div>
    <div class="w-[90%] mx-auto h-screen flex justify-end">
      <div class="flex flex-col gap-2 mt-5">
        <div
          class="flex flex-col text-center justify-center gap-2 hover:bg-slate-200 p-2 cursor-pointer"
          @click="handleShowScreen('portfolio')"
        >
          <img
            src="../assets/images/porpleicon1-p-500.png"
            class="w-[60px] mx-auto"
            alt=""
          />
          <div class="px-3 bg-slate-100 text-rose-700">Portfolio</div>
        </div>
        <div
          class="flex flex-col text-center justify-center gap-2 hover:bg-slate-200 p-2 cursor-pointer"
          @click="handleShowScreen('about')"
        >
          <img
            src="../assets/images/porpleicon1-p-500.png"
            class="w-[60px] mx-auto"
            alt=""
          />
          <div class="px-3 bg-slate-100 text-rose-700">About Me</div>
        </div>
        <div
          class="flex flex-col text-center justify-center gap-2 hover:bg-slate-200 p-2 cursor-pointer"
          @click="handleShowScreen('skill')"
        >
          <img
            src="../assets/images/porpleicon1-p-500.png"
            class="w-[60px] mx-auto"
            alt=""
          />
          <div class="px-3 bg-slate-100 text-rose-700">Skill</div>
        </div>
        <div
          class="flex flex-col text-center justify-center gap-2 hover:bg-slate-200 p-2 cursor-pointer"
          @click="handleShowScreen('contact')"
        >
          <img
            src="../assets/images/porpleicon1-p-500.png"
            class="w-[60px] mx-auto"
            alt=""
          />
          <div class="px-3 bg-slate-100 text-rose-700">Contact</div>
        </div>
      </div>
    </div>

    <!-- Screens model -->
    <div v-for="(screen, index) in screens" :key="index">
      <ScreenModel
        :screen="screen"
        :index="index"
        @portfilioDetail="portfilioDetail"
      />
    </div>
  </div>
</template>
