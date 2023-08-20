<script setup>
import windowHeader from "../reusables/windowHeader.vue";
import { useScreenStore } from "../../features/pinia/screen";
import { useDataBase } from "../../features/pinia/firebaseDatabase";

const database = useDataBase();
const screenStore = useScreenStore();

/**
 * show portfolio detail
 */
const handleShowPortfolioDetail = (folder, index) => {
  screenStore.setWindow(`portfolio-detail${index}`, folder);
};
</script>

<template>
  <div
    class="w-[50vw] p-2 rounded-lg bg-white border-2 border-e-4 border-b-4 border-primary"
  >
    <windowHeader
      @click="screenStore.increseZindex('portfolio')"
      title="Portfolio"
      window="portfolio"
    ></windowHeader>
    <div class="flex justify-center my-4">
      <div
        class="basis-1/4"
        v-for="(folder, index) in database.getPortfolioData"
        :key="index"
        @click="$emit('portfolioDetail', { folder: folder, index: index })"
      >
        <div
          class="text-center hover:bg-hover m-2"
          @click="handleShowPortfolioDetail(folder, index)"
        >
          <img
            src="../../assets/images/folder.png"
            class="h-[80px] max-w-full cursor-pointer mx-auto"
            alt=""
          />
          <div class="text-primary">{{ folder.name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
