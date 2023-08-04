<script setup lang="ts">
import { ref, defineProps } from "vue";
import { useDraggable } from "@vueuse/core";

const { index } = defineProps({
  index: Number,
});
const el = ref<HTMLElement | null>(null);

// `style` will be a helper computed for `left: ?px; top: ?px;`
const { x, y, style } = useDraggable(el, {
  initialValue: { x: 40, y: 40 },
});
</script>

<template>
  <div ref="el" :class="`z-[1${index}]`" :style="style" style="position: fixed" >
    <slot name="window"></slot>
  </div>
</template>
