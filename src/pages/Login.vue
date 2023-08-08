<script setup>
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { ref } from "vue";
import { useRouter } from "vue-router";

const firebaseConfig = {
  apiKey: "AIzaSyAKS1uKR-Vdhg_poUn3Sz47h_R8HV84Z8w",
  authDomain: "fb-testing-4d315.firebaseapp.com",
  databaseURL: "https://fb-testing-4d315-default-rtdb.firebaseio.com",
  projectId: "fb-testing-4d315",
  storageBucket: "fb-testing-4d315.appspot.com",
  messagingSenderId: "523525819842",
  appId: "1:523525819842:web:6b827f49670b8e543c5a5b",
};
const app = initializeApp(firebaseConfig);
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
