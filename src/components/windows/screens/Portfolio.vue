<script setup>
import { defineProps } from "vue";

const { index } = defineProps({
    index : Number
});

</script>

<template>
  <div>Portfolio {{ index }}</div>
</template>
