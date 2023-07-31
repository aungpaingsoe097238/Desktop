<script setup lang="ts">
import { ref, defineProps } from "vue";
import { useDraggable } from "@vueuse/core";
import About from "./screens/About.vue";
import Portfolio from "./screens/Portfolio.vue";
import Contact from "./screens/Contact.vue";

const { index } = defineProps({
  index: Number,
  window: String,
});

const el = ref<HTMLElement | null>(null);

// `style` will be a helper computed for `left: ?px; top: ?px;`
const { x, y, style } = useDraggable(el, {
  initialValue: { x: 40, y: 40 },
});
</script>

<template>
  <div ref="el" class="fixed" :class="`z-[${index}00]`" :style="style">
    <div class="w-[80vh] h-[60vh] bg-white border border-slate-900">
      <About v-if="window === 'about'" :index="index"></About>
      <Portfolio v-if="window === 'portfolio'" :index="index"></Portfolio>
      <Contact v-if="window === 'contact'" :index="index"></Contact>
    </div>
  </div>
</template>
