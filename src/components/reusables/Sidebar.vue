<script setup></script>

<template>
  <div class="flex h-screen overflow-auto justify-end">
    <div class="w-[20%] fixed left-0 h-screen overflow-auto bg-background">
      <div class="flex flex-col">
        <RouterLink
          to="/dashboard-portfolio"
          class="w-full cursor-pointer hover:bg-desktopHover p-2 text-xl"
        >
          Portfolio
        </RouterLink>
        <RouterLink
          to="/dashboard-about"
          class="w-full cursor-pointer hover:bg-desktopHover p-2 text-xl"
        >
          About
        </RouterLink>
        <RouterLink
          to="/dashboard-skill"
          class="w-full cursor-pointer hover:bg-desktopHover p-2 text-xl"
        >
          Skill
        </RouterLink>
        <RouterLink
          to="/"
          class="w-full cursor-pointer hover:bg-desktopHover p-2 text-xl"
        >
          Contact
        </RouterLink>
      </div>
    </div>
    <div class="w-[80%] ps-3">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<style scoped>
.router-link-active {
  background: #CC6B49
}
</style>
