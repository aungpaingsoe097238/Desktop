<script setup>
import windowHeader from "../reusables/windowHeader.vue";
import { useScreenStore } from "../../features/pinia/screen";

const screenStore = useScreenStore();

/**
 * increase zIndex for this window
 */
 const handleIncreseZindex = (window, data = null) => {
  screenStore.setWindow(window, data);
};
</script>

<template>
  <div
    @click="handleIncreseZindex('contact')"
    class="w-[100vh] p-2 rounded-lg bg-white border-2 border-e-4 border-b-4 border-red-600"
  >
    <windowHeader title="Contact" window="contact"></windowHeader>
  </div>
</template>
