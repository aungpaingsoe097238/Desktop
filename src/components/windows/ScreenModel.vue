<script setup lang="ts">
import { ref, defineProps, defineEmits } from "vue";
import { useDraggable } from "@vueuse/core";
import About from "./screens/About.vue";
import Portfolio from "./screens/Portfolio.vue";
import Contact from "./screens/Contact.vue";
import Skill from "./screens/Skill.vue";
import PortfolioDetail from "./screens/PortfolioDetail.vue";
import ScreenHeader from "../reusables/ScreenHeader.vue";
import { useScreenStore } from "../../features/pinia/screen";

const screenStore = useScreenStore();

const { index } = defineProps({
  index: Number,
  screen: String,
});

const emit = defineEmits(["portfilioDetail"]);

const el = ref<HTMLElement | null>(null);

// `style` will be a helper computed for `left: ?px; top: ?px;`
const { x, y, style } = useDraggable(el, {
  initialValue: { x: 40, y: 40 },
});

const handleCloseScreen = (index) => {
  screenStore.removeScreen(index);
};

/**
 * Portfolio Detail
 */
const portfilioDetail = (portfolio) => {
  emit("portfilioDetail", portfolio);
};
</script>

<template>
  <div
    ref="el"
    class="fixed w-full lg:w-[50%]"
    :class="`z-[${index}00]`"
    :style="style"
  >
    <div>
      <Portfolio
        v-if="screen === 'portfolio'"
        :index="index"
        @portfilioDetail="portfilioDetail"
      >
        <template #header>
          <ScreenHeader>
            <template #close-btn>
              <div
                @click="handleCloseScreen(index)"
                class="cursor-pointer border-2 border-red-600 w-[35px]"
              ></div>
            </template>
            <template #title> Portfolio </template>
          </ScreenHeader>
        </template>
      </Portfolio>
      <About v-if="screen === 'about'" :index="index">
        <template #header>
          <ScreenHeader>
            <template #close-btn>
              <div
                @click="handleCloseScreen(index)"
                class="cursor-pointer border-2 border-red-600 w-[35px]"
              ></div>
            </template>
            <template #title> About </template>
          </ScreenHeader>
        </template>
      </About>
      <skill v-if="screen === 'skill'" :index="index">
        <template #header>
          <ScreenHeader>
            <template #close-btn>
              <div
                @click="handleCloseScreen(index)"
                class="cursor-pointer border-2 border-red-600 w-[35px]"
              ></div>
            </template>
            <template #title> Skill </template>
          </ScreenHeader>
        </template>
      </skill>
      <Contact v-if="screen === 'contact'" :index="index">
        <template #header>
          <ScreenHeader>
            <template #close-btn>
              <div
                @click="handleCloseScreen(index)"
                class="cursor-pointer border-2 border-red-600 w-[35px]"
              ></div>
            </template>
            <template #title> Contact </template>
          </ScreenHeader>
        </template>
      </Contact>
      <PortfolioDetail v-if="screen === 'portfolio-detail'" :index="index">
        <template #header>
          <ScreenHeader>
            <template #close-btn>
              <div
                @click="handleCloseScreen(index)"
                class="cursor-pointer border-2 border-red-600 w-[35px]"
              ></div>
            </template>
            <template #title> {{ screenStore.getScreenData?.name }} </template>
          </ScreenHeader>
        </template>
      </PortfolioDetail>
    </div>
  </div>
</template>
