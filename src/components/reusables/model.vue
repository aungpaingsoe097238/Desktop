<script setup>
import { ref, defineProps, watch, computed } from "vue";
import { useScreenStore } from "../../features/pinia/screen";

const screenStore = useScreenStore();
const { index } = defineProps({
  index: Number,
});

const currentWindow = computed(() => {
  return screenStore.getWindows.find((window, i) => i === index);
});
</script>

<template>
  <div
    ref="el"
    :style="{ zIndex: currentWindow.zIndex }"
    style="position: fixed"
  >
    <slot name="window"></slot>
  </div>
</template>
