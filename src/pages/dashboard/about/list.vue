<script setup>
import { ref, onMounted } from "vue";
import ReusableSlider from "../../../components/reusables/Sidebar.vue";
import { useStorageStore } from "../../../features/pinia/firebaseStorage";
import { useDataBase } from "../../../features/pinia/firebaseDatabase";
import { useRoute } from "vue-router";

const storage = useStorageStore();
const database = useDataBase();
const imageInput = ref(null);
const imageUrl = ref(null);
const currentImageId = ref(0);
const route = useRoute();

onMounted(async () => {
  await database.setAllData("about");
  currentImageId.value = database.getAboutData.length;
});

/**
 * Choose Image File
 */
const handleChooseImageUi = () => {
  imageInput.value.click();
};

/**
 * Save to Storage
 */
const handleChooseImage = async (event) => {
  const selectedImage = event.target.files[0];
  currentImageId.value++;
  imageUrl.value = await storage.setImage(selectedImage);
  handleSaveData(currentImageId.value);
};

/**
 * Save to Database
 */
const handleSaveData = async (currentImageId) => {
  await database.setData("about", `${currentImageId}`, {
    id: currentImageId,
    url: imageUrl.value,
  });
  window.location.href = `${route.fullPath}`;
};

/**
 * Delete Database
 */
const handleDeleteData = async (imageId) => {
  await database.deleteData("about", imageId);
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
                <th scope="col" class="px-6 border py-3">Image</th>
                <th scope="col" class="px-6 border py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr
                class="bg-white border-b"
                v-for="image in database.getAboutData"
                :key="image.id"
              >
                <td class="px-6 border">{{ image.id }}</td>
                <td class="px-6 border">
                  <img :src="image.url" class="h-[50px]" alt="" />
                </td>
                <td class="px-6 border">
                  <div class="flex items-center gap-3">
                    <div
                      class="cursor-pointer hover:bg-desktopHover"
                      @click="handleDeleteData(image.id)"
                    >
                      Delete
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td
                  colspan="3"
                  class="py-3 cursor-pointer hover:bg-desktopHover"
                  @click="handleChooseImageUi"
                >
                  <div class="flex justify-center">added image</div>
                  <input
                    type="file"
                    accept="image/*"
                    class="hidden"
                    @change="handleChooseImage"
                    ref="imageInput"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </template>
    </ReusableSlider>
  </div>
</template>
