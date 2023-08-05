<script setup lang="ts">
import { ref, defineProps, watch, computed } from "vue";
import { useDraggable } from "@vueuse/core";
import { useScreenStore } from "../../features/pinia/screen";

const screenStore = useScreenStore();
const { index } = defineProps({
  index: Number,
});
const el = ref<HTMLElement | null>(null);

const currentWindow = computed(() => {
  return screenStore.getWindows.find((window, i) => i === index);
});

// `style` will be a helper computed for `left: ?px; top: ?px;`
const { x, y, style } = useDraggable(el, {
  initialValue: { x: currentWindow.value.x, y: currentWindow.value.y },
});

// Function to be called when x or y changes
const onXYChange = () => {
  screenStore.changeXY(x, y, index);
};

// Watch x and y for changes and call the onXYChange function
watch([x, y], () => {
  onXYChange();
});
</script>

<template>
  <div ref="el" :style="style, { zIndex : currentWindow.zIndex }" style="position: fixed">
    <slot name="window"></slot>
  </div>
</template>
