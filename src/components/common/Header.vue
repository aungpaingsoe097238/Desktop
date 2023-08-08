<template>
  <nav class="w-full z-40 fixed top-0 py-3 bg-primary text-white">
    <div class="w-[90%] mx-auto flex items-center justify-between">
      <div class="text-xl font-bold cursor-pointer">
        <div @click="showMenus = !showMenus">Menu</div>
      </div>
      <div class="text-xl font-bold">{{ currentDateTime }}</div>
    </div>
  </nav>
  <!-- Menu -->
  <div v-if="showMenus" class="absolute z-40 p-2 top-9 text-xl bg-primary text-white my-5 ms-[4%]">
    <div
      class="py-1 px-3 hover:bg-desktopHover hover:text-primary cursor-pointer"
      @click="handleShowWindow('portfolio')"
    >
      Portfolio
    </div>
    <div
      class="py-1 px-3 hover:bg-desktopHover hover:text-primary cursor-pointer"
      @click="handleShowWindow('about')"
    >
      About
    </div>
    <div
      class="py-1 px-3 hover:bg-desktopHover hover:text-primary cursor-pointer"
      @click="handleShowWindow('skill')"
    >
      Skill
    </div>
    <div
      class="py-1 px-3 hover:bg-desktopHover hover:text-primary cursor-pointer"
      @click="handleShowWindow('contact')"
    >
      Contact
    </div>
    <div class="py-1 px-3 hover:bg-desktopHover hover:text-primary cursor-pointer">
      Shutdown
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useScreenStore } from "../../features/pinia/screen";
const showMenus = ref(false);
const currentDateTime = ref("");
const screenStore = useScreenStore();

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

/**
 * added window to store
 */
const handleShowWindow = (window, data = null) => {
  screenStore.setWindow(window, data);
  showMenus.value = false
};
</script>
