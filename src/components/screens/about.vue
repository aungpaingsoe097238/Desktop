<script setup>
import windowHeader from "../reusables/windowHeader.vue";
import { useScreenStore } from "../../features/pinia/screen";

const screenStore = useScreenStore();
</script>

<template>
  <div
    @click="screenStore.increseZindex('about')"
    class="w-[60vw] h-[90vh] p-2 rounded-lg bg-white border-2 border-e-4 border-b-4 border-red-600"
  >
    <windowHeader title="About" window="about"></windowHeader>
    <div>
      <div>
        <div>LYNN HTET THANT @ALEX LYNN</div>
        <div>UI/UX DESIGNER</div>
        <div>
          More than 3 years experience in UI/UI Designer in Yangon. Creating the
          user interface for an app, website or other interactive mdeia.
          Responsible for understanding what users want from device and then
          desiging it so I can find all of its features easily without any
          hassle.
        </div>
      </div>
      <div>
        <div>WORKING EXPERIENCE</div>
        <div>
          <div>October 2022 - Present</div>
          <div>
            UI/UX Designer
          </div>
          <div>
            UMG Myanmar - Yangon
          </div>
        </div>
      </div>
      <div>
        https://www.ungmyanmar.com/
      </div>
      <div>
        <div>
          - Optimizing the user experience
        </div>
        <div>
          - Developing and maintaining the user interface
        </div>
        <div>
          - Following SEO best practices
        </div>
      </div>
      <div>
        <div>June 2021 - REs</div>
      </div>
    </div>
  </div>
</template>
