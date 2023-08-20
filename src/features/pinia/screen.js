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
    let totalZIndex = 0;
    const findExistingWindow = windows.value.find((el) => el.window === window);
    for (const window of windows.value) {
      totalZIndex += window.zIndex;
    }
    if (!findExistingWindow) {
      windows.value.push({
        window: window,
        data: data,
        x: 300,
        y: 40,
        zIndex: totalZIndex,
      });
    } else {
      for (const window of windows.value) {
        totalZIndex += window.zIndex;
      }
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

  /**
   * increse zindex
   */
  const increseZindex = (window) => {
    const findExistingWindow = windows.value.find((el) => el.window === window);
    if (findExistingWindow) {
      let totalZIndex = 0;
      for (const window of windows.value) {
        totalZIndex += window.zIndex;
      }
      findExistingWindow.zIndex = totalZIndex + 10;
    }
  };

  return {
    windows,
    getWindows,
    setWindow,
    removeWidow,
    changeXY,
    increseZindex
  };
});
