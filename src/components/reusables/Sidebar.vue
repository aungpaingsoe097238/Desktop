<script setup>
import { useRoute } from "vue-router";

const route = useRoute();

const handleLogout = () => {
  localStorage.removeItem("token");
  window.location.href = "/";
};
</script>

<template>
  <div class="flex h-screen overflow-auto justify-end me-[10%]">
    <div class="w-[10%] fixed left-0 mt-1 h-screen overflow-auto bg-background">
      <div class="flex flex-col mt-5">
        <a
          href="/dashboard-portfolio"
          class="w-full cursor-pointer hover:bg-desktopHover p-2 text-xl"
          :class="{
            'bg-desktopHover': route.fullPath === '/dashboard-portfolio',
          }"
        >
          Portfolio
        </a>
        <a
          href="/dashboard-about"
          class="w-full cursor-pointer hover:bg-desktopHover p-2 text-xl"
          :class="{ 'bg-desktopHover': route.fullPath === '/dashboard-about' }"
        >
          About
        </a>
        <a
          href="/dashboard-skill"
          class="w-full cursor-pointer hover:bg-desktopHover p-2 text-xl"
          :class="{ 'bg-desktopHover': route.fullPath === '/dashboard-skill' }"
        >
          Skill
        </a>
        <a
          href="/dashobard-contact"
          class="w-full cursor-pointer hover:bg-desktopHover p-2 text-xl"
          :class="{
            'bg-desktopHover': route.fullPath === '/dashboard-contact',
          }"
        >
          Contact
        </a>
        <div
          class="border border-primary rounded-md p-2 m-2 text-xl hover:bg-primary cursor-pointer"
          @click="handleLogout()"
        >
          Logout
        </div>
      </div>
    </div>
    <div class="w-[80%] ps-3">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<style scoped>
.router-link-active {
  background: #cc6b49;
}
</style>
