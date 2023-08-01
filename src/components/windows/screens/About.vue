<script setup>
import { defineProps } from "vue";
const { index } = defineProps({
  index: Number,
});

</script>

<template>
  <div class="bg-white rounded-sm border border-red-600 p-1">
    <slot name="header"></slot>
    <div class="">About {{ index }}</div>
  </div>
</template>
