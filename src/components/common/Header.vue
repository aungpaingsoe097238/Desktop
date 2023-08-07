<template>
  <nav class="w-full fixed top-0 py-3 bg-primary text-white">
    <div class="w-[90%] mx-auto flex items-center justify-between">
      <div class="text-xl font-bold">Menu</div>
      <div class="text-xl font-bold">{{ currentDateTime }}</div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted } from "vue";

const currentDateTime = ref("");

const getFormattedDateTime = () => {
  const date = new Date();
  const day = date.getDate().toString().padStart(2, "0");
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const month = monthNames[date.getMonth()];
  const year = date.getFullYear();
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const seconds = date.getSeconds().toString().padStart(2, "0");

  return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
};

onMounted(() => {
  currentDateTime.value = getFormattedDateTime();
  setInterval(() => {
    currentDateTime.value = getFormattedDateTime();
  }, 1000); // Update time every second
});
</script>
