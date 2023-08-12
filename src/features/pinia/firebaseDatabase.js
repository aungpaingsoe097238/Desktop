import { defineStore } from "pinia";
import { app } from "../../firebase";
import {
  getFirestore,
  doc,
  setDoc,
  getDocs,
  query,
  collection,
  getDoc,
  addDoc,
  runTransaction,
  deleteDoc,
} from "firebase/firestore";
import { ref as Ref, computed } from "vue";

export const useDataBase = defineStore("database", () => {
  const database = getFirestore(app);
  const data = Ref([]);

  /**
   * get all data
   */
  const getAllData = computed(() => {
    return data.value;
  });

  /**
   * Save data
   */
  const setData = async (path, child, payload) => {
    await setDoc(doc(database, path, child), payload);
    data.value.push(payload);
  };

  /**
   * Load all data
   */
  const setAllData = async (path) => {
    const q = query(collection(database, path));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      const findSameData = data.value.find((item) => item === doc.data());
      if (!findSameData) {
        data.value.push(doc.data());
      }
    });
  };

  /**
   * Delete data
   */
  const deleteData = async (path, imageId) => {
    await deleteDoc(doc(database, path, `${imageId}`));
  };

  /**
   * Editing data
   */
  const editData = async (path, imageId, payload) => {
    await setDoc(doc(database, path, imageId), payload);
    data.value.push(payload);
  };

  return {
    data,
    setAllData,
    setData,
    getAllData,
    deleteData,
    editData,
  };
});
