<script setup lang="ts">
import { ref } from "vue";
import { useDraggable } from "@vueuse/core";
import star from "../../assets/icons/star.vue";

const el = ref<HTMLElement | null>(null);

// `style` will be a helper computed for `left: ?px; top: ?px;`
const { x, y, style } = useDraggable(el, {
  initialValue: { x: 40, y: 100 },
});
</script>

<template>
  <div
    ref="el"
    :style="style"
    style="position: fixed"
    class=" bg-white border-2 border-e-4 border-b-4 py-4 px-9 border-primary rounded-xl"
  >
    <div class="text-primary text-2xl flex flex-col gap-4">
      <div class="flex justify-center items-center gap-2">
        <star />
        <div>Read Me</div>
        <star />
      </div>
      <div class=" flex flex-col gap-3">
        <div>Hi, My name is Alex Lynn.</div>
        <div>
          A <span class="text-blue-900">UI/UX Desinger & Instructor</span>
        </div>
        <div>Desinger based in Myanmar.</div>
        <div>Reach out to discuss on projects!</div>
      </div>
    </div>
  </div>
</template>
