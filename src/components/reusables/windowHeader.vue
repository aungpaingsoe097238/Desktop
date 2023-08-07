<script setup>
import { defineProps } from "vue";
import { useScreenStore } from "../../features/pinia/screen";

const screenStore = useScreenStore();

const { title, window } = defineProps({
  title: String,
  window: String,
});

const handleCloseWindow = () => {
  screenStore.removeWidow(window);
};
</script>

<template>
  <div>
    <div class="flex items-center gap-1 cursor-move">
      <div class="basis-1/2">
        <div class="flex gap-2 items-center h-[35px]">
          <div class="flex flex-col w-[30px] justify-between gap-1">
            <div class="border-2 border-primary"></div>
            <div class="border-2 border-primary"></div>
            <div class="border-2 border-primary"></div>
            <div class="border-2 border-primary"></div>
          </div>
          <div
            class="border-2 border-primary h-[26px] w-[35px] cursor-pointer hover:bg-primary"
            @click="handleCloseWindow"
          ></div>
          <div class="flex flex-col w-full gap-1">
            <div class="border-2 border-primary"></div>
            <div class="border-2 border-primary"></div>
            <div class="border-2 border-primary"></div>
            <div class="border-2 border-primary"></div>
          </div>
        </div>
      </div>
      <div class="text-2xl text-primary">
        {{ title }}
      </div>
      <div class="basis-1/2">
        <div class="flex flex-col gap-1">
          <div class="border-2 border-primary"></div>
          <div class="border-2 border-primary"></div>
          <div class="border-2 border-primary"></div>
          <div class="border-2 border-primary"></div>
        </div>
      </div>
    </div>
    <div class="flex flex-col w-full justify-between gap-1 mt-2">
      <div class="border border-primary"></div>
    </div>
  </div>
</template>
