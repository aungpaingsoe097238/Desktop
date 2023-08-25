<script setup>
import star from "../assets/icons/star.vue";
import { useScreenStore } from "../features/pinia/screen";
import { useDataBase } from "../features/pinia/firebaseDatabase";
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
    <!-- <div v-for="(window, index) in windows" :key="index" :index="index">
        {{ window }}
    </div> -->
  </div>
</template>
