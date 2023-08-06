<script setup>
import windowHeader from "../reusables/windowHeader.vue";
import { useScreenStore } from "../../features/pinia/screen";

const screenStore = useScreenStore();
</script>

<template>
  <div
    @click="screenStore.increseZindex('skill')"
    class="w-[50vw] p-2 rounded-lg bg-white border-2 border-e-4 border-b-4 border-red-600"
  >
    <windowHeader title="Skill" window="skill"></windowHeader>
  </div>
</template>
