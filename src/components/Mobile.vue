<script setup>
import star from "../assets/icons/star.vue";
import { useScreenStore } from "../features/pinia/screen";
import { useDataBase } from "../features/pinia/firebaseDatabase";
import model from "./reusables/model.vue";
import portfolio from "./screens/portfolio.vue";
import portfolioDetial from "./screens/portfolioDetail.vue";
import about from "./screens/about.vue";
import skill from "./screens/skill.vue";
import contact from "./screens/contact.vue";
import { computed, onMounted } from "vue";

const screenStore = useScreenStore();
const database = useDataBase();
const windows = computed(() => screenStore.getWindows);

/**
 * Load About data
 */
onMounted(async () => {
  await database.setAllData("about");
});

/**
 * Load Portfolio data
 */
onMounted(async () => {
  if (database.getPortfolioData.length === 0) {
    await database.setAllData("portfolio");
  }
});

/**
 * Load About skill
 */
onMounted(async () => {
  await database.setAllData("skill");
});

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
  <div class="  text-[12px] text-center bg-white text-primary ">
    For better performance, please view using computer
  </div>
  <div class="mx-auto flex justify-end">

    <div
      class="w-full bg-white border-2 border-e-4 border-b-4 flex justify-center items-center p-2 border-primary rounded-xl mt-4 ms-1 me-1"
    >
      <div class="text-primary text-2xl flex flex-col gap-4">
        <div class="flex justify-center items-center gap-2">
          <star />
          <div>Read Me</div>
          <star />
        </div>
        <div class="flex flex-col gap-3">
          <div>Hi, My name is Alex Lynn.</div>
          <div>
            A <span class="text-blue-900">UI/UX Desinger & Instructor</span>
          </div>
          <div>Desinger based in Myanmar.</div>
          <div>Reach out to discuss on projects!</div>
        </div>
      </div>
    </div>

    <div class="flex flex-col">
      <div
        class="flex flex-col text-center justify-center gap-2 hover:bg-desktopHover p-2 cursor-pointer"
        @click="handleShowWindow('portfolio')"
      >
        <img src="../assets/images/pc.png" class="w-[60px] mx-auto" alt="" />
        <div class="px-3 bg-white text-primary">Portfolio</div>
      </div>
      <div
        class="flex flex-col text-center justify-center gap-2 hover:bg-desktopHover p-2 cursor-pointer"
        @click="handleShowWindow('about')"
      >
        <img src="../assets/images/about.png" class="w-[60px] mx-auto" alt="" />
        <div class="px-3 bg-white text-primary">about.txt</div>
      </div>
      <div
        class="flex flex-col text-center justify-center gap-2 hover:bg-desktopHover p-2 cursor-pointer"
        @click="handleShowWindow('skill')"
      >
        <img src="../assets/images/skill.png" class="w-[60px] mx-auto" alt="" />
        <div class="px-3 bg-white text-primary">Skill</div>
      </div>
      <div
        class="flex flex-col text-center justify-center gap-2 hover:bg-desktopHover p-2 cursor-pointer"
        @click="handleShowWindow('contact')"
      >
        <img
          src="../assets/images/contact.png"
          class="w-[60px] mx-auto"
          alt=""
        />
        <div class="px-3 bg-white text-primary">Contact</div>
      </div>
    </div>

    <model v-for="(window, index) in windows" :key="index" :index="index">
      <template #window>
        <portfolio
          v-if="window.window === 'portfolio'"
          @portfolioDetail="showPortfolioDetail"
        ></portfolio>
        <about
          v-if="window.window === 'about'"
          :images="database.getAboutData"
        ></about>
        <skill
          v-if="window.window === 'skill'"
          :images="database.getSkillData"
        ></skill>
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
        <portfolioDetial
          v-if="window.window === 'portfolio-detail4'"
          index="4"
        ></portfolioDetial>
        <portfolioDetial
          v-if="window.window === 'portfolio-detail5'"
          index="5"
        ></portfolioDetial>
        <portfolioDetial
          v-if="window.window === 'portfolio-detail6'"
          index="6"
        ></portfolioDetial>
        <portfolioDetial
          v-if="window.window === 'portfolio-detail7'"
          index="7"
        ></portfolioDetial>
        <portfolioDetial
          v-if="window.window === 'portfolio-detail8'"
          index="8"
        ></portfolioDetial>
        <portfolioDetial
          v-if="window.window === 'portfolio-detail9'"
          index="9"
        ></portfolioDetial>
        <portfolioDetial
          v-if="window.window === 'portfolio-detail10'"
          index="10"
        ></portfolioDetial>
        <portfolioDetial
          v-if="window.window === 'portfolio-detail11'"
          index="11"
        ></portfolioDetial>
        <portfolioDetial
          v-if="window.window === 'portfolio-detail12'"
          index="12"
        ></portfolioDetial>
        <portfolioDetial
          v-if="window.window === 'portfolio-detail13'"
          index="13"
        ></portfolioDetial>
        <portfolioDetial
          v-if="window.window === 'portfolio-detail14'"
          index="14"
        ></portfolioDetial>
        <portfolioDetial
          v-if="window.window === 'portfolio-detail15'"
          index="15"
        ></portfolioDetial>
        <portfolioDetial
          v-if="window.window === 'portfolio-detail16'"
          index="16"
        ></portfolioDetial>
        <portfolioDetial
          v-if="window.window === 'portfolio-detail17'"
          index="17"
        ></portfolioDetial>
        <portfolioDetial
          v-if="window.window === 'portfolio-detail18'"
          index="18"
        ></portfolioDetial>
        <portfolioDetial
          v-if="window.window === 'portfolio-detail19'"
          index="19"
        ></portfolioDetial>
        <portfolioDetial
          v-if="window.window === 'portfolio-detail20'"
          index="20"
        ></portfolioDetial>
        <portfolioDetial
          v-if="window.window === 'portfolio-detail21'"
          index="21"
        ></portfolioDetial>
        <portfolioDetial
          v-if="window.window === 'portfolio-detail22'"
          index="22"
        ></portfolioDetial>
        <portfolioDetial
          v-if="window.window === 'portfolio-detail23'"
          index="23"
        ></portfolioDetial>
        <portfolioDetial
          v-if="window.window === 'portfolio-detail24'"
          index="24"
        ></portfolioDetial>
        <portfolioDetial
          v-if="window.window === 'portfolio-detail25'"
          index="25"
        ></portfolioDetial>
        <portfolioDetial
          v-if="window.window === 'portfolio-detail26'"
          index="26"
        ></portfolioDetial>
        <portfolioDetial
          v-if="window.window === 'portfolio-detail27'"
          index="27"
        ></portfolioDetial>
        <portfolioDetial
          v-if="window.window === 'portfolio-detail28'"
          index="28"
        ></portfolioDetial>
        <portfolioDetial
          v-if="window.window === 'portfolio-detail29'"
          index="29"
        ></portfolioDetial>
        <portfolioDetial
          v-if="window.window === 'portfolio-detail30'"
          index="30"
        ></portfolioDetial>
      </template>
    </model>
  </div>
</template>
