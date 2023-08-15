<script setup>
import { ref, onMounted } from "vue";
import ReusableSlider from "../../../components/reusables/Sidebar.vue";
import { useDataBase } from "../../../features/pinia/firebaseDatabase";
import { useRoute } from "vue-router";

const database = useDataBase();
const currentId = ref(0);
const folderName = ref(null);
const route = useRoute();

onMounted(async () => {
  await database.setAllData("portfolio");
  currentId.value = database.getPortfolioData.length;
});

const handleSaveData = async () => {
  currentId.value++;
  await database.setData("portfolio", `${currentId.value}`, {
    id: currentId.value,
    name: folderName.value,
  });
  window.location.href = `${route.fullPath}`;
};
</script>

<template>
  <div>
    <ReusableSlider>
      <template #content>
        <div class="my-5">
          <table class="w-full text-md text-left bg-white text-black">
            <thead class="border bg-primary text-white">
              <tr>
                <th scope="col" class="px-6 border py-3">#</th>
                <th scope="col" class="px-6 border py-3">Folder</th>
                <th scope="col" class="px-6 border py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr
                class="bg-white border-b"
                v-for="folder in database.getPortfolioData"
                :key="folder.id"
              >
                <td class="px-6 border">{{ folder.id }}</td>
                <td class="px-6 border">
                  <div class="flex gap-3 items-center">
                    <img
                      src="../../../assets/images/folder.png"
                      class="h-[50px]"
                      alt=""
                    />
                    {{ folder.name }}
                  </div>
                </td>
                <td class="px-6 border">
                  <div class="flex items-center gap-3">
                    <a
                      :href="`/dashboard-detail?name=${folder.name}`"
                      class="cursor-pointer hover:bg-desktopHover"
                    >
                      Edit
                    </a>
                    <div class="cursor-pointer hover:bg-desktopHover">
                      Delete
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td colspan="3" class="py-3 cursor-pointer">
                  <form
                    @submit.prevent="handleSaveData"
                    class="flex justify-center"
                  >
                    <input
                      type="text"
                      class="px-2 border border-primary w-[20%]"
                      v-model="folderName"
                      required
                      placeholder="Enter foler name"
                    />
                    <button
                      type="submit"
                      class="flex justify-center bg-primary p-2"
                    >
                      added folder
                    </button>
                  </form>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </template>
    </ReusableSlider>
  </div>
</template>
