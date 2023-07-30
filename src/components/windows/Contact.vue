<script setup lang="ts">
import { ref} from "vue";
import { useDraggable } from "@vueuse/core";
const el = ref<HTMLElement | null>(null);

// `style` will be a helper computed for `left: ?px; top: ?px;`
const { x, y, style } = useDraggable(el, {
  initialValue: { x: 40, y: 40 },
});
</script>

<template>
  <div ref="el" class="fixed" :style="style">
    <div class="w-[500px] h-[200px] bg-white border border-slate-900">
      <div class="text-4xl">About</div>
    </div>
  </div>
</template>
