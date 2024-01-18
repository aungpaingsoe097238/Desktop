<script setup>
import windowHeader from "../reusables/windowHeader.vue";
import { useScreenStore } from "../../features/pinia/screen";
import { defineProps } from "vue";
const screenStore = useScreenStore();

const { images } = defineProps({
  images: Array,
});
</script>

<template>
  <div class="w-screen lg:w-[50vw] p-2 rounded-lg bg-white border-2 border-e-4 border-b-4 border-primary">
    <windowHeader @click="screenStore.increseZindex('skill')" title="Skill" window="skill"></windowHeader>
    <div class="overflow-auto h-[80vh] my-2">
      <div>
        <div class=" text-3xl">My Skills</div>
        <div class=" text-xl mt-3 ">
          Front-End Development
        </div>

        <div class=" mt-3 opacity-70 ">
          Expect in building responsive and interactive UIs using HTML5, CSS3, SASS, Tailwind CSS, and Bootstrap 5.
          Vue.js Master: Developed complex single-page applications using Vue.js, Vuex, Vueuse, and Pinia.
          ReactJS Pro: Leveraged ReactJS and Redux Toolkit to build performant and scalable web applications.
          React Native Enthusiast: Created native mobile apps for iOS and Android using React Native.
          CSS Frameworks: Proficient in Tailwind CSS, Bootstrap 5, and PrimeVue for rapid UI development.
          Motion Design: Utilized Framer Motion to create smooth and engaging animations.
        </div>

        <div class=" text-xl mt-3 ">
          Back-End Development
        </div>

        <div class=" mt-3 opacity-70 ">
          PHP Expert: Developed server-side applications using PHP and Laravel, with experience in REST APIs and
          database
          integrations.
          Node.js Pro: Built real-time applications and microservices using Node.js and Express.js.
        </div>

        <div class=" text-xl mt-3">
          Version Control and Deployment
        </div>

        <div class=" mt-3 opacity-70 ">
          Git Savvy: Experienced with Git, Github, Bitbucket, and Gitlab for version control and collaboration.
          Deployment Master: Deployed and maintained applications on various platforms, including cloud servers.
        </div>

        <div class=" mt-3 text-xl">
          Project Management & Collaboration
        </div>

        <div class=" mt-3 opacity-70 ">
          Agile Adept: Utilized Jira to manage project workflows, prioritize tasks, and track progress effectively.
        </div>
      </div>
    </div>
  </div>
</template>
