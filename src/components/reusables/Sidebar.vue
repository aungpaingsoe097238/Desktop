<script setup></script>

<template>
  <div class="flex h-screen overflow-auto justify-end me-[10%]">
    <div class="w-[10%] fixed left-0 mt-1 h-screen overflow-auto bg-background">
      <div class="flex flex-col mt-5">
        <a
          href="/dashboard-portfolio"
          class="w-full cursor-pointer hover:bg-desktopHover p-2 text-xl"
        >
          Portfolio
        </a>
        <a 
          href="/dashboard-about"
          class="w-full cursor-pointer hover:bg-desktopHover p-2 text-xl"
        >
          About
        </a>
        <a
          href="/dashboard-skill"
          class="w-full cursor-pointer hover:bg-desktopHover p-2 text-xl"
        >
          Skill
        </a>
        <a
          href="/"
          class="w-full cursor-pointer hover:bg-desktopHover p-2 text-xl"
        >
          Contact
        </a>
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
