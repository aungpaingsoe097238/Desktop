<script setup>
import { defineProps, ref } from "vue";
import { useScreenStore } from "../../../features/pinia/screen";

const screenStore = useScreenStore();
const portfolios = ref([
  { name: "Folder1" },
  { name: "Folder2" },
  { name: "Folder3" },
  { name: "Folder4" },
  { name: "Folder5" },
  { name: "Folder6" },
  { name: "Folder7" },
  { name: "Folder8" },
]);

const { index } = defineProps({
  index: Number,
});

const handlePortfolioDetail = (portfolio, index) => {
  screenStore.setPortfolioDetail(portfolio);
};
</script>

<template>
  <div class="bg-white rounded-sm border border-red-600 p-1">
    <slot name="header"></slot>
    <div class="flex flex-wrap">
      <div
        class="basis-1/4"
        v-for="(portfolio, index) in portfolios"
        :key="index"
      >
        <div
          class="text-center m-2 cursor-pointer hover:bg-slate-300"
          @click="handlePortfolioDetail(portfolio, index)"
        >
          <img
            src="../../../assets/images/porpleicon4.png"
            class="mx-auto h-[70px]"
          />
          <div>{{ portfolio.name }}</div>
        </div>
      </div>
    </div>

  </div>
</template>
