<script setup>
import { app } from "../firebase.js";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { ref } from "vue";
import { useRouter } from "vue-router";
const auth = getAuth(app);
const email = ref(null);
const password = ref(null);
const router = useRouter();

const handleLogin = () => {
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      const user = userCredential.user;
      if (user.accessToken) {
        router.push("/dashboard-portfolio");
        (email.value = null), (password.value = null);
      }
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      router.push("/login");
    });
};
</script>

<template>
  <div class="flex h-screen justify-center items-center">
    <div
      class="w-full lg:w-[30%] mx-auto bg-white border-primary border-2 border-e-4 border-b-4 rounded-lg"
    >
      <form @submit.prevent="handleLogin" class="flex flex-col gap-3 p-3">
        <div class="text-3xl mx-auto">Login</div>
        <div>
          <input
            type="text"
            class="w-full p-2 border border-primary rounded-lg"
            placeholder="Enter your email"
            v-model="email"
          />
        </div>
        <div>
          <input
            type="password"
            class="w-full p-2 border border-primary rounded-lg"
            placeholder="Enter your password"
            v-model="password"
          />
        </div>
        <div class="text-end">
          <button
            type="submit"
            class="bg-primary rounded-sm text-white px-3 py-2 shadow-sm"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
