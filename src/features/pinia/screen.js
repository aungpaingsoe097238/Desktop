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
  const setWindow = (window, data, index) => {
    const findExistingWindow = windows.value.find((el) => el.window === window);
    if (!findExistingWindow) {
      windows.value.push({
        window: window,
        data: data,
        x: 40,
        y: 40,
        zIndex: 0,
      });
    } else {
      findExistingWindow.zIndex = findExistingWindow.zIndex + 1;
    }
  };

  /**
   * close window
   */
  const removeWidow = (window) => {
    windows.value = windows.value.filter((item) => item.window !== window);
  };

  /**
   * change x y position by index
   */
  const changeXY = (x, y, index) => {
    const currentWindow = windows.value.find((window, i) => i === index);
    currentWindow.x = x;
    currentWindow.y = y;
  };

  return {
    windows,
    getWindows,
    setWindow,
    removeWidow,
    changeXY,
  };
});
