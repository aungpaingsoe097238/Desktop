<script setup>
import Desktop from "../components/Desktop.vue";
import Mobile from "../components/Mobile.vue";
import { ref, onMounted, onUnmounted } from "vue";

const windowWidth = ref(window.innerWidth);
const windowHeight = ref(window.innerHeight);

const handleResize = () => {
  windowWidth.value = window.innerWidth;
  windowHeight.value = window.innerHeight;
};

onMounted(() => {
  window.addEventListener("resize", handleResize);
});

onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
});
</script>

<template>
  <div v-if="windowWidth > 760">
    <Desktop />
  </div>
  <div v-else>
    <Mobile />
  </div>
</template>
