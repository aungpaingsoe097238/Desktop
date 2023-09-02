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
              <a href="https://www.facebook.com/aung.p.soe.5437" target="_blank">
                <img
                  src="../../assets/images/facebook.png"
                  class="w-full cursor-pointer hover:opacity-80 rounded-lg border-primary border"
                  alt=""
                />
              </a>
              <a href="https://github.com/aungpaingsoe097238" target="_blank">
                <img
                  src="../../assets/images/github.png"
                  class="w-full cursor-pointer hover:opacity-80 rounded-lg border border-primary"
                  alt=""
                />
              </a>
            </div>
            <a
              href="https://www.linkedin.com/in/aungpaingsoe097238"
              target="_blank"
            >
              <img
                src="../../assets/images/Linkedin.png"
                class="w-full cursor-pointer hover:opacity-80 border border-primary rounded-lg"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
      <div class="flex gap-3">
        <div class="flex flex-col gap-3">
          <a href="https://www.instagram.com/aung.p.soe.532/" target="_blank">
            <img
              src="../../assets/images/instagram.png"
              class="w-full cursor-pointer hover:opacity-80 border border-primary rounded-lg"
              alt=""
            />
          </a>
        </div>
        <a href="https://goo.gl/maps/2f4fr1SSQ9whHkeK7" target="_blank">
          <img
            src="../../assets/images/yangon.png"
            class="w-full cursor-pointer hover:opacity-80 border border-primary rounded-lg"
            alt=""
          />
        </a>
        <a href="mailto:aungpaingsoe097238@gmail.com">
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
