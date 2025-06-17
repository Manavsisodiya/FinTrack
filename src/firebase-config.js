// firebase-config.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAiP6LWNNJ6oKystBS8ARC959W7_g4qj1U",
  authDomain: "fintrack-18092.firebaseapp.com",
  projectId: "fintrack-18092",
  storageBucket: "fintrack-18092.firebasestorage.app",
  messagingSenderId: "661562188894",
  appId: "1:661562188894:web:de0fae8e3eacdc6e3bc0cf",
  measurementId: "G-R6Y9JB82Q5"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
