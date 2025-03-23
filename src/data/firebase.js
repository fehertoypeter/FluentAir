// src/firebase.js
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA49GbTdm0iU_MuyxP5khJPk7_6UIvOR90",
  authDomain: "fluentair-d4ff3.firebaseapp.com",
  projectId: "fluentair-d4ff3",
  storageBucket: "fluentair-d4ff3.appspot.com",
  messagingSenderId: "702539926600",
  appId: "1:702539926600:web:37c43029f4082752e11c7d",
  measurementId: "G-T5QG2HPQ1Z",
};

const app = initializeApp(firebaseConfig);

export { app };
