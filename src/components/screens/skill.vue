<script setup>
import windowHeader from "../reusables/windowHeader.vue";
import { useScreenStore } from "../../features/pinia/screen";
import { defineProps } from "vue";
const screenStore = useScreenStore();

const { images } = defineProps({
  images: Array,
});
</script>

<template>
  <div
    class="w-[50vw] p-2 rounded-lg bg-white border-2 border-e-4 border-b-4 border-primary"
  >
    <windowHeader
      @click="screenStore.increseZindex('skill')"
      title="Skill"
      window="skill"
    ></windowHeader>
    <div class="overflow-auto h-[85vh] my-2">
      <img
        v-for="image in images"
        :key="image.id"
        :src="image.url"
        class="w-full"
        alt=""
      />
    </div>
  </div>
</template>
