<script setup>
import windowHeader from "../reusables/windowHeader.vue";
import { useScreenStore } from "../../features/pinia/screen";
import { defineProps, computed } from "vue";

const screenStore = useScreenStore();
const { index } = defineProps({
  index: Number,
});

const data = computed(() => {
  return screenStore.getWindows.find(
    (window) => window.window === `portfolio-detail${index}`
  );
});

</script>

<template>
  <div
    @click="screenStore.increseZindex(`portfolio-detail${index}`)"
    class="w-[60vw] p-2 rounded-lg bg-white border-2 border-e-4 border-b-4 border-primary"
  >
    <windowHeader
      :title="`${data.data.name}`"
      :window="`portfolio-detail${index}`"
    ></windowHeader>
    <div class="h-[70vh] overflow-auto">
      <img
        src="../../assets/images/img1.jpg"
        class="w-full"
        alt=""
      />
      <img
        src="../../assets/images/img2.jpg"
        class="w-full"
        alt=""
      />
    </div>
  </div>
</template>
