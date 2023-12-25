// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4GOebKR3JT3B7LzDBYjbG11bRJ-z6Omk",
  authDomain: "task-auth-36d24.firebaseapp.com",
  projectId: "task-auth-36d24",
  storageBucket: "task-auth-36d24.appspot.com",
  messagingSenderId: "158079347535",
  appId: "1:158079347535:web:12e9f3dbcbfa4f1a24333a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;