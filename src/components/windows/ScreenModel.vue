<script setup lang="ts">
import { ref, defineProps, defineEmits } from "vue";
import { useDraggable } from "@vueuse/core";
import About from "./screens/About.vue";
import Portfolio from "./screens/Portfolio.vue";
import Contact from "./screens/Contact.vue";
import ScreenHeader from '../reusables/ScreenHeader.vue';

const emit = defineEmits(["close"]);

const { index } = defineProps({
  index: Number,
  window: String,
});

const el = ref<HTMLElement | null>(null);

// `style` will be a helper computed for `left: ?px; top: ?px;`
const { x, y, style } = useDraggable(el, {
  initialValue: { x: 40, y: 40 },
});

const handleCloseScreen = (index) => {
  emit("close", index);
};
</script>

<template>
  <div ref="el" class="fixed w-full lg:w-[50%]" :class="`z-[${index}00]`" :style="style">
    <div>
      <Portfolio v-if="window === 'portfolio'" :index="index">
        <template #header>
          <ScreenHeader>
            <template #close-btn>
              <div @click="handleCloseScreen(index)" class=" cursor-pointer border-2 border-red-600 w-[35px]"></div>
            </template>
            <template #title>
              Portfolio
            </template>
          </ScreenHeader>
        </template>
      </Portfolio>
      <About v-if="window === 'about'" :index="index">
        <template #header>
          <ScreenHeader>
            <template #close-btn>
              <div @click="handleCloseScreen(index)" class=" cursor-pointer border-2 border-red-600 w-[35px]"></div>
            </template>
            <template #title>
              About
            </template>
          </ScreenHeader>
        </template>
      </About>
      <Contact v-if="window === 'contact'" :index="index">
        <template #header>
          <ScreenHeader>
            <template #close-btn>
              <div @click="handleCloseScreen(index)" class=" cursor-pointer border-2 border-red-600 w-[35px]"></div>
            </template>
            <template #title>
              Contact 
            </template>
          </ScreenHeader>
        </template>
      </Contact>
    </div>
  </div>
</template>
