<script setup>
import { useScreenStore } from "../../features/pinia/screen";
import windowheader from "../reusables/windowHeader.vue";
import { defineProps } from "vue";
const screenStore = useScreenStore();

const { images } = defineProps({
  images: Array,
});
</script>

<template>
  <div class="w-screen lg:w-[50vw] p-2 rounded-lg bg-white border-2 border-e-4 border-b-4 border-primary">
    <windowheader @click="screenStore.increseZindex('about')" title="about.txt" window="about"></windowheader>
    <div class="overflow-auto max-h-[80vh] my-2">
      <div class=" flex flex-col gap-3 text-xl ">
        <div class=" text-2xl uppercase ">
          Aung Paing Soe @alpha
        </div>
        <div class=" text-2xl ">
          Profile
        </div>
        <div class=" opacity-70 ">
          With over 2+ years of experience in both back-end and front-end development, I specialize in creating responsive
          designs and real-time applications. I also have expertise in server deployment, and I'm a quick learner.
        </div>
        <div class=" text-2xl mt-4 ">
          Working Experience
        </div>
        <div class=" text-xl mt-3 ">
          Full-Stack Developer
        </div>
        <div>
          Jan,2023 - Present
        </div>
        <diV>
          UMG Myanmar
        </diV>
        <div>
          <ul class=" opacity-70 ">
            <li>
              - Spearheading the development and maintenance of both web back-end and front-end systems.
            </li>
            <li>
              - Creating and overseeing the development of a Video Learning Platform, while also maintaining a Loan
              Management Platform.
            </li>
            <li>
              - Handling deployment and maintenance processes on servers to ensure seamless functionality.
            </li>
            <li>
              - Engaging in discussions with system analysts and end-users to understand and address user requirements
              effectively.
            </li>
            <li>
              - Mentoring interns and junior team members, actively contributing to their skill improvement and
              professional development.
            </li>
          </ul>
        </div>
        <div class=" text-xl mt-3 ">
          Junior Web Developer
        </div>
        <div>
          Feb,2022 - 2023,Jan
        </div>
        <diV>
          Marathon Myanmar
        </diV>
        <div>
          <ul class=" opacity-70 ">
            <li>
              - Overseeing the maintenance of one or more e-commerce platforms.
            </li>
            <li>
              - Maintaining a delivery platform.
            </li>
          </ul>
        </div>
        <div class=" text-xl mt-3 ">
          IT Assistant
        </div>
        <div>
          Jan,2019 - Feb,2022
        </div>
        <diV>
          Marathon Myanmar
        </diV>
        <div>
          <ul class=" opacity-70 ">
            <li>
              - Overseeing the maintenance of one or more e-commerce platforms.
            </li>
            <li>
              - Maintaining a delivery platform.
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
