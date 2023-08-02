import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useScreenStore = defineStore("screen", () => {
  const screens = ref([]);

  const getScreens = computed(() => {
    let uniqueSet = new Set(screens.value);
    let uniqueArray = Array.from(uniqueSet);
    return uniqueArray;
  });

  const setScreens = (screen) => {
    const findSameScreen = screens.value.find((item) => item === screen);
    if (!findSameScreen) {
      screens.value.push(screen);
    } else {
      let elementToMove = findSameScreen;
      let newPosition = screens.value.length;
      let indexToMove = screens.value.indexOf(elementToMove);
      screens.value.splice(indexToMove, 1);
      screens.value.splice(newPosition, 0, elementToMove);
    }
  };

  const removeScreen = (index) => {
    screens.value = screens.value.filter((item, i) => i !== index);
  };

  return {
    screens,
    getScreens,
    setScreens,
    removeScreen
  };
});
