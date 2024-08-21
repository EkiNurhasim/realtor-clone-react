// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEpXG6WbkbOQhjX3I8HnFfdXw-XgFwARc",
  authDomain: "realtor-clone-react-1c58d.firebaseapp.com",
  projectId: "realtor-clone-react-1c58d",
  storageBucket: "realtor-clone-react-1c58d.appspot.com",
  messagingSenderId: "1008999500510",
  appId: "1:1008999500510:web:e765ac0ed0c465f78ad04f",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
