// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0rj7i1z67WS7vkYfM5BZOZ2CK0OBoPHE",
  authDomain: "gadget-heaven-570f9.firebaseapp.com",
  projectId: "gadget-heaven-570f9",
  storageBucket: "gadget-heaven-570f9.firebasestorage.app",
  messagingSenderId: "494667052129",
  appId: "1:494667052129:web:263b1313025b9033ec2620"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);