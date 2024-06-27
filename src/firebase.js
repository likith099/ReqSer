// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByWL1ZZNBq2xVkBxGYhRfdxTzUF-hUsJI",
  authDomain: "request-app-ed30e.firebaseapp.com",
  projectId: "request-app-ed30e",
  storageBucket: "request-app-ed30e.appspot.com",
  messagingSenderId: "452369646671",
  appId: "1:452369646671:web:637cd455d908139ece563a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();