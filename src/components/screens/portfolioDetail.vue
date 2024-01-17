<script setup>
import windowHeader from "../reusables/windowHeader.vue";
import { useScreenStore } from "../../features/pinia/screen";
import { defineProps, computed, onMounted, ref } from "vue";
import { app } from "../../firebase";
import {
  getFirestore,
  doc,
  setDoc,
  getDocs,
  query,
  collection,
  getDoc,
  addDoc,
  runTransaction,
  deleteDoc,
} from "firebase/firestore";

const db = getFirestore(app);
const images = ref([]);
const screenStore = useScreenStore();
const { index } = defineProps({
  index: Number,
});

const data = computed(() => {
  return screenStore.getWindows.find(
    (window) => window.window === `portfolio-detail${index}`
  );
});

onMounted(async () => {
  const q = query(collection(db, data.value.data.name));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    images.value.push(doc.data());
  });
});
</script>

<template>
  <div class="w-screen lg:w-[70vw] p-2 rounded-lg bg-white border-2 border-e-4 border-b-4 border-primary">
    <windowHeader @click="screenStore.increseZindex(`portfolio-detail${index}`)" :title="`${data.data.name}`"
      :window="`portfolio-detail${index}`"></windowHeader>
    <div class="h-[80vh] overflow-auto">
      <div class="p-3">
        <div class="text-3xl">{{ data.data.name }}</div>
        <div class="my-5">
          <img :src="data.data.image" class=" w-full md:w-[95%] md:mx-auto border border-primary" />
        </div>
        <div class="my-10">
          Description: {{ data.data.desc }}
        </div>
        <div class="my-10">
          <video :src="data.data.video" class=" w-full md:w-[95%] md:mx-auto border border-primary" controls />
        </div>
        <div>
          Technologies: {{ data.data.techs }}
        </div>
      </div>
    </div>
  </div>
</template>
