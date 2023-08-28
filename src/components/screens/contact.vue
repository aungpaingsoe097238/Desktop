<script setup>
import windowHeader from "../reusables/windowHeader.vue";
import { useScreenStore } from "../../features/pinia/screen";
const screenStore = useScreenStore();
</script>

<template>
  <div
    class="w-screen lg:w-[60vw] p-2 rounded-lg bg-white border-2 border-e-4 border-b-4 border-primary"
  >
    <windowHeader
      @click="screenStore.increseZindex('contact')"
      title="Contact"
      window="contact"
    ></windowHeader>
    <div class="p-4">
      <div class="flex gap-3 mb-3">
        <div>
          <img
            src="../../assets/images/profile.png"
            class="w-full h-full object-cover rounded-md"
            alt=""
          />
        </div>
        <div>
          <div class="flex flex-col gap-3">
            <div class="flex gap-3">
              <a href="https://www.behance.net/alexlynn3" target="_blank">
                <img
                  src="../../assets/images/behance.png"
                  class="w-full cursor-pointer hover:opacity-80"
                  alt=""
                />
              </a>
              <a href="https://www.figma.com/@alexlynn" target="_blank">
                <img
                  src="../../assets/images/figma.png"
                  class="w-full cursor-pointer hover:opacity-80"
                  alt=""
                />
              </a>
            </div>
            <a
              href="https://www.linkedin.com/in/lynnhtetthant/"
              target="_blank"
            >
              <img
                src="../../assets/images/Linkedin.png"
                class="w-full cursor-pointer hover:opacity-80"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
      <div class="flex gap-3">
        <div class="flex flex-col gap-3">
          <div>
            <img
              src="../../assets/images/nephophile.png"
              class="w-full cursor-pointer hover:opacity-80"
              alt=""
            />
          </div>
          <a href="https://www.udemy.com/user/lynn-htet-7/" target="_blank">
            <img
              src="../../assets/images/udemy.png"
              class="w-full cursor-pointer hover:opacity-80"
              alt=""
            />
          </a>
        </div>
        <a href="https://goo.gl/maps/2f4fr1SSQ9whHkeK7" target="_blank">
          <img
            src="../../assets/images/yangon.png"
            class="w-full cursor-pointer hover:opacity-80"
            alt=""
          />
        </a>
        <a href="mailto:alexlynn@naver.com">
          <img
            src="../../assets/images/email.png"
            class="w-full cursor-pointer hover:opacity-80"
            alt=""
          />
        </a>
      </div>
    </div>
  </div>
</template>
