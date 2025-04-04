import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, serverTimestamp } from 'firebase/firestore';
import { getFunctions } from 'firebase/functions'; // no emulator

// ✅ Your Firebase project config
const firebaseConfig = {
  apiKey: "AIzaSyA49GbTdm0iU_MuyxP5khJPk7_6UIvOR90",
  authDomain: "fluentair-d4ff3.firebaseapp.com",
  projectId: "fluentair-d4ff3",
  storageBucket: "fluentair-d4ff3.firebasestorage.app",
  messagingSenderId: "702539926600",
  appId: "1:702539926600:web:37c43029f4082752e11c7d",
  measurementId: "G-T5QG2HPQ1Z"
};

// ✅ Initialize Firebase App
const app = initializeApp(firebaseConfig);

// ✅ Firebase Services
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);
const timestamp = serverTimestamp();
const functions = getFunctions(app, 'us-central1'); // ✅ Set region for production

export {
  auth,
  provider,
  db,
  timestamp,
  functions
};
