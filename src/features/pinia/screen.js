import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useScreenStore = defineStore("screen", () => {
  const windows = ref([]);

  /**
   * get all windows
   */
  const getWindows = computed(() => windows.value);

  /**
   * added windows
   */
  const setWindow = (window, data) => {
    const findExistingWindow = windows.value.find((el) => el.window === window);
    if (!findExistingWindow) {
      windows.value.push({
        window: window,
        data: data,
      });
    }
  };

  /**
   * close window
   */
  const removeWidow = (window) => {
    windows.value = windows.value.filter((item) => item.window !== window);
  };

  return { windows, getWindows, setWindow, removeWidow };
});
