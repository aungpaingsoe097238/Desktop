<script setup>
import { defineProps, ref } from "vue";

const folders = ref([
  { 'name': 'Folder1' },
  { 'name': 'Folder2' },
  { 'name': 'Folder3' },
  { 'name': 'Folder4' },
  { 'name': 'Folder5' },
  { 'name': 'Folder6' },
  { 'name': 'Folder7' },
  { 'name': 'Folder8' }
])

const { index } = defineProps({
  index: Number,
});


</script>

<template>
  <div class="bg-white rounded-sm border border-red-600 p-1">
    <slot name="header"></slot>
    <div class="flex flex-wrap">
      <div class=" basis-1/4" v-for=" (folder, index) in folders " :key="index">
        <div class=" text-center m-2 cursor-pointer hover:bg-slate-300">
          <img src="../../../assets/images/porpleicon4.png" class=" mx-auto h-[70px]" />
          <div>{{ folder.name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
