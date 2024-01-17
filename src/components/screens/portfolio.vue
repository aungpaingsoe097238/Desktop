<script setup>
import { ref } from "vue";
import windowHeader from "../reusables/windowHeader.vue";
import { useScreenStore } from "../../features/pinia/screen";
import { useDataBase } from "../../features/pinia/firebaseDatabase";

const database = useDataBase();
const screenStore = useScreenStore();
const portfolios = ref([
  {
    'name': "Coursia",
    "image": "/portfolio/coursia/image1.png",
    "image2": "/portfolio/coursia/image2.png",
    "video": "/portfolio/coursia/coursia.webm",
    "desc": `Udmey Style Video Learning Platform တစ်ခုဖြစ်ပါသည်။ဒီ Project မှာ Back-End အတွက် Laravel နှင့် Front-End အတွက် Vue.js, Nuxt.js တို့ကို
    အသုံးပြု၍ Develop လုပ်ထားပါသည်။ဒါ့အပြင် Video Service အတွက် Alibaba VOD ကိုအသုံးပြုထားပြီး Aliplayer ကိုလည်း Learning Page မှာထည့်သွင်း အသုံးပြုထားပါသည်။
    အကြောင်းအမျိုးမျိုးကြောင့် Release လုပ်လို့မရသေးပမဲ့ အကောင်းဆုံးဖန်တည်းထားသောလက်ယာတွေထဲက တစ်ခုဖြစ်ပါသည်။
    `,
    "techs": `PHP, Laravel, MySQL, JavaScript, Vue.js, Nuxt3, Alibaba VOD`
  },
  {
    "name": "Winfinance"
  },
  {
    "name": "SoulKingDom"
  },
  {
    "name": "TeaChat"
  },
  {
    "name": "Dashboard Frame"
  },
  {
    "name": "Pet Heaven"
  },
  {
    "name": "ELG"
  }
])

/**
 * show portfolio detail
 */
const handleShowPortfolioDetail = (folder, index) => {
  screenStore.setWindow(`portfolio-detail${index}`, folder);
};
</script>

<template>
  <div class="w-screen lg:w-[50vw] p-2 rounded-lg bg-white border-2 border-e-4 border-b-4 border-primary">
    <windowHeader @click="screenStore.increseZindex('portfolio')" title="Portfolio" window="portfolio"></windowHeader>
    <div class="flex justify-start flex-wrap my-4">
      <div class=" basis-1/3 lg:basis-1/5" v-for="(folder, index) in portfolios" :key="index"
        @click="$emit('portfolioDetail', { folder: folder, index: index })">
        <div class="text-center hover:bg-hover m-2" @click="handleShowPortfolioDetail(folder, index)">
          <img src="../../assets/images/folder.png" class="h-[80px] max-w-full cursor-pointer mx-auto" alt="" />
          <div class="text-primary tracking-tighter">{{ folder.name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
