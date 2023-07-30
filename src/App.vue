<script setup>
import Header from './components/common/Header.vue'
</script>

<template>
  <div class="app">
    <Header></Header>
    <routerView class=" mt-12"></routerView>
  </div>
</template>

<style scoped>
.app {
  width: 100%;
  height: 100vh;
  background-image: url('./assets/images/webbg-light.jpg');
  position: fixed;
}
</style>