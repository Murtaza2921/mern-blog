// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
console.log(import.meta.env.VITE_FIREBASE_API_KEY);
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-d43c1.firebaseapp.com",
  projectId: "mern-blog-d43c1",
  storageBucket: "mern-blog-d43c1.appspot.com",
  messagingSenderId: "605063598536",
  appId: "1:605063598536:web:af087934bfaf434f15f0fd",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
