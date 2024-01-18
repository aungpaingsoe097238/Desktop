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
    "video": "/portfolio/coursia/coursia.webm",
    "desc": `Udmey Style Video Learning Platform တစ်ခုဖြစ်ပါသည်။ဒီ Project မှာ Back-End အတွက် Laravel နှင့် Front-End အတွက် Vue.js, Nuxt.js တို့ကို
    အသုံးပြု၍ Develop လုပ်ထားပါသည်။ဒါ့အပြင် Video Service အတွက် Alibaba VOD ကိုအသုံးပြုထားပြီး Aliplayer ကိုလည်း Learning Page မှာထည့်သွင်း အသုံးပြုထားပါသည်။
    အကြောင်းအမျိုးမျိုးကြောင့် Release လုပ်လို့မရသေးပမဲ့ အကောင်းဆုံးဖန်တည်းထားသောလက်ယာတွေထဲက တစ်ခုဖြစ်ပါသည်။
    `,
    "techs": `PHP, Laravel, MySQL, JavaScript, Vue.js, Nuxt3, Alibaba Oss, Alibaba VOD`,
    "link": 'https://demo.coursia.ai'
  },
  {
    'name': "Winfinance",
    "image": "/portfolio/winfinance/image.jpg",
    "video": "/portfolio/winfinance/winf.webm",
    "desc": `Loan Management Platform project တစ်ခုဖြစ်ပါသည်။ဒီ Project မှာ Front-End ကော Back-End ကောကိုတာ၀န်ယူ Maintain လုပ်ခဲ့ရပါသည်။
    Odoo api များကို handle လုပ်ခြင်း Mobile platform အတွက် api ထုတ်ပေးခြင်းများဆောင်ရွက်ခဲ့ပါသည်။`,
    "techs": `PHP, Laravel, MySQL, JavaScript, Vue.js, Alibaba Oss`,
    'link': 'https://play.google.com/store/apps/details?id=mm.com.winfinance.app&pcampaignid=web_share'
  },
  {
    "name": "SoulKingDom",
    "image": "/portfolio/soulking/image.png",
    "video": "/portfolio/soulking/soulking.webm",
    "desc": `ဒီ Project မှာ Front-End ပိုင်းကိုသာတာ၀န်ယူ Maintain လုပ်ခဲ့ပါတယ်။လက်ရှိတော့ Go Live မှာပါ။`,
    "techs": `Go, Next.js, PostgressSQL`,
    "link": "https://soulkingdom.net"
  },
  {
    "name": "Pet Heaven",
    "image": "/portfolio/pet/pet.png",
    "video": "/portfolio/pet/pet.webm",
    "desc": `SG ကကျောင်းသူတစ်ယောက်အတွက် ရေးပေးခဲ့သော Static Site တစ်ခုဖြစ်ပါသည်။ Ui only ပါ။`,
    "techs": `React.js, React Redux`,
    "link": "https://pet-uwn7.onrender.com"
  },
  {
    "name": "ELG",
    "image": "/portfolio/elg/elg.png",
    "video": "/portfolio/elg/elg.webm",
    "desc": `Online Video Learning Platform ဖြစ်ပြီး ္Profile Site, User Site, Admin Panel သုံးခုလုံးကိုတာ၀န်ယူရေးသားထားသော Project ဖြစ်သည်။
     API ပိုင်းကိုတော့ပါ၀င်ရေးသားခဲ့ခြင်းမရှိပါ။   
    `,
    "techs": `Vue, PrimeVue, BootStrap, TailWind, Laravel, MySQL, AWS S3`,
    "link": "https://demo.eglearningguide.com"
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
    <div class="flex h-[50vh] justify-start flex-wrap my-4">
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
