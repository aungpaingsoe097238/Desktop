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
    class="w-[150vh] p-2 rounded-lg bg-white border-2 border-e-4 border-b-4 border-red-600"
  >
    <windowHeader
      :title="`${data.data.name}`"
      :window="`portfolio-detail${index}`"
    ></windowHeader>
    <div>
      {{ data.data.name }}
    </div>
  </div>
</template>
