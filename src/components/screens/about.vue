<script setup>
import { useScreenStore } from "../../features/pinia/screen";
import windowheader from "../reusables/windowHeader.vue";
import { defineProps } from "vue";
const screenStore = useScreenStore();

const { images } = defineProps({
  images: Array,
});
</script>

<template>
  <div
    class="w-screen lg:w-[50vw] p-2 rounded-lg bg-white border-2 border-e-4 border-b-4 border-primary"
  >
    <windowheader
      @click="screenStore.increseZindex('about')"
      title="about.txt"
      window="about"
    ></windowheader>
    <div class="overflow-auto h-[80vh] my-2">
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
