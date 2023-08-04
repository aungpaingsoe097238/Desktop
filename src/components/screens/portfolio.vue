<script setup>
import { ref } from "vue";
import windowHeader from "../reusables/windowHeader.vue";
import { useScreenStore } from "../../features/pinia/screen";

const screenStore = useScreenStore();
const folders = ref([
  { name: "FolderOne" },
  { name: "FolderTwo" },
  { name: "FolderThree" },
  { name: "FolderFour" },
]);

/**
 * show portfolio detail
 */
const handleShowPortfolioDetail = (folder, index) => {
  screenStore.setWindow(`portfolio-detail${index}`, folder);
};
</script>

<template>
  <div
    class="w-[100vh] p-2 rounded-lg bg-white border-2 border-e-4 border-b-4 border-red-600"
  >
    <windowHeader title="Portfolio" window="portfolio"></windowHeader>
    <div class="flex justify-center my-4">
      <div
        class="basis-1/4"
        v-for="(folder, index) in folders"
        :key="index"
        @click="$emit('portfolioDetail', { folder: folder, index: index })"
      >
        <div
          class="text-center hover:bg-gray-100 m-2"
          @click="handleShowPortfolioDetail(folder, index)"
        >
          <img
            src="../../assets/images/porpleicon4.png"
            class="h-[80px] max-w-full cursor-pointer mx-auto"
            alt=""
          />
          <div>{{ folder.name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
