<script setup>
import windowHeader from "../reusables/windowHeader.vue";
import { useScreenStore } from "../../features/pinia/screen";

const screenStore = useScreenStore();
</script>

<template>
  <div
    @click="screenStore.increseZindex('contact')"
    class="w-[50vw] p-2 rounded-lg bg-white border-2 border-e-4 border-b-4 border-primary"
  >
    <windowHeader title="Contact" window="contact"></windowHeader>
  </div>
</template>
