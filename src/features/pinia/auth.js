import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useAuthStore = defineStore("auth", () => {
  const auth = ref(false);

  const getAuth = computed(() => auth.value);

  const setAuth = (status) => {
    auth.value = status;
  };

  return {
    auth,
    getAuth,
    setAuth,
  };
});
