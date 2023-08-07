<script setup>
import windowHeader from "../reusables/windowheader.vue";
import { useScreenStore } from "../../features/pinia/screen";

const screenStore = useScreenStore();
</script>

<template>
  <div
    @click="screenStore.increseZindex('about')"
    class="w-[60vw]  p-2 rounded-lg bg-white border-2 border-e-4 border-b-4 border-primary"
  >
    <windowHeader title="about.txt" window="about"></windowHeader>
    <div class=" overflow-auto h-[90vh]">
      <img src="../../assets/images/abouttext.jpg" class=" w-full" alt="">
    </div>
  </div>
</template>
