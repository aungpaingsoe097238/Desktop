<script setup>
import { defineProps } from "vue";
import { useScreenStore } from "../../../features/pinia/screen";

const screenStore = useScreenStore();
const { index } = defineProps({
  index: Number,
});
</script>

<template>
  <div class="bg-white rounded-sm border border-red-600 p-1">
    <slot name="header"></slot>
    <div class="">Skill {{ index }}</div>
  </div>
</template>
