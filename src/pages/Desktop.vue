<script setup>
import { computed, ref } from "vue";
import { useScreenStore } from "../features/pinia/screen";
import draggable from "../components/reusables/draggable.vue";
import portfolio from "../components/screens/portfolio.vue";
import portfolioDetial from "../components/screens/portfolioDetail.vue";
import about from "../components/screens/about.vue";
import skill from "../components/screens/skill.vue";
import contact from "../components/screens/contact.vue";
import info from "../components/reusables/info.vue";
const screenStore = useScreenStore();
const windows = computed(() => screenStore.getWindows);

/**
 * added window to store
 */
const handleShowWindow = (window, data = null) => {
  screenStore.setWindow(window, data);
};

/*
 * show portfolio detail
 */
const showPortfolioDetail = (data) => {
  screenStore.setWindow(`portfolio-detail${data.index}`, data);
};
</script>

<template>
  <div>
    <div class="w-[90%] mx-auto h-screen flex justify-end">
      <div class="flex flex-col gap-2 mt-5">
        <div
          class="flex flex-col text-center justify-center gap-2 hover:bg-desktopHover p-2 cursor-pointer"
          @click="handleShowWindow('portfolio')"
        >
          <img
            src="../assets/images/pc.png"
            class="w-[60px] mx-auto"
            alt=""
          />
          <div class="px-3 bg-white text-primary">Portfolio</div>
        </div>
        <div
          class="flex flex-col text-center justify-center gap-2 hover:bg-desktopHover p-2 cursor-pointer"
          @click="handleShowWindow('about')"
        >
          <img
            src="../assets/images/about-txt.png"
            class="w-[60px] mx-auto"
            alt=""
          />
          <div class="px-3 bg-white text-primary">about.txt</div>
        </div>
        <div
          class="flex flex-col text-center justify-center gap-2 hover:bg-desktopHover p-2 cursor-pointer"
          @click="handleShowWindow('skill')"
        >
          <img
            src="../assets/images/porpleicon1-p-500.png"
            class="w-[60px] mx-auto"
            alt=""
          />
          <div class="px-3 bg-white text-primary">Skill</div>
        </div>
        <div
          class="flex flex-col text-center justify-center gap-2 hover:bg-desktopHover p-2 cursor-pointer"
          @click="handleShowWindow('contact')"
        >
          <img
            src="../assets/images/porpleicon1-p-500.png"
            class="w-[60px] mx-auto"
            alt=""
          />
          <div class="px-3 bg-white text-primary">Contact</div>
        </div>
      </div>
    </div>

    <info></info>

    <draggable v-for="(window, index) in windows" :key="index" :index="index">
      <template #window>
        <portfolio
          v-if="window.window === 'portfolio'"
          @portfolioDetail="showPortfolioDetail"
        ></portfolio>
        <about v-if="window.window === 'about'"></about>
        <skill v-if="window.window === 'skill'"></skill>
        <contact v-if="window.window === 'contact'"></contact>
        <portfolioDetial
          v-if="window.window === 'portfolio-detail0'"
          index="0"
        ></portfolioDetial>
        <portfolioDetial
          v-if="window.window === 'portfolio-detail1'"
          index="1"
        ></portfolioDetial>
        <portfolioDetial
          v-if="window.window === 'portfolio-detail2'"
          index="2"
        ></portfolioDetial>
        <portfolioDetial
          v-if="window.window === 'portfolio-detail3'"
          index="3"
        ></portfolioDetial>
      </template>
    </draggable>
  </div>
</template>
