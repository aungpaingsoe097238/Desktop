import { defineStore } from "pinia";
import { app } from "../../firebase";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
import { ref as Ref, computed } from "vue";

export const useStorageStore = defineStore("storage", () => {
  const storage = getStorage(app);
  const uuid = uuidv4();
  const url = Ref(null);

  /**
   * Save Image
   */
  const setImage = async (file) => {
    try {
      const storageRef = ref(storage, `about/${uuid}.jpg`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      await new Promise((resolve, reject) => {
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log("Upload is " + progress + "% done");
            switch (snapshot.state) {
              case "paused":
                console.log("Upload is paused");
                break;
              case "running":
                console.log("Upload is running");
                break;
            }
          },
          (error) => {
            reject(error);
          },
          async () => {
            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
            url.value = downloadURL; // Store the URL in your Ref object
            resolve();
          }
        );
      });

      return url.value; // Return the download URL
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  };

  return {
    setImage,
    url,
  };
});
