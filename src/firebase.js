import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAWCfFV1wT4ghgBKy42MLx_SPBPXX4Rgug",
  authDomain: "portfolio-d2e2c.firebaseapp.com",
  databaseURL: "https://portfolio-d2e2c-default-rtdb.firebaseio.com",
  projectId: "portfolio-d2e2c",
  storageBucket: "portfolio-d2e2c.appspot.com",
  messagingSenderId: "494212111153",
  appId: "1:494212111153:web:0b50c6e178bab976d7ee10",
  measurementId: "G-SP24KZSMTZ"
};

export const app = initializeApp(firebaseConfig);
