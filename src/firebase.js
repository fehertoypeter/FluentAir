// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, fetchSignInMethodsForEmail } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions"; // Importáld a functions modult
import { onAuthStateChanged, onIdTokenChanged } from "firebase/auth";

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
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();
const functions = getFunctions(app); // Inicializáld a functions modult

onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("User is logged in:", user.email);
  } else {
    console.log("User is logged out");
    localStorage.removeItem("token"); // Töröljük a tokent, ha kijelentkezik
  }
});

onIdTokenChanged(auth, async (user) => {
  if (user) {
    const token = await user.getIdToken();
    localStorage.setItem("token", token);
  } else {
    localStorage.removeItem("token");
  }
});

export { auth, db, googleProvider, functions, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, fetchSignInMethodsForEmail };