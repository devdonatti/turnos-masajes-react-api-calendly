// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRmxBui9gFq7uemmNcbDKM3C2hhh5pj0E",
  authDomain: "turnos-masajes.firebaseapp.com",
  projectId: "turnos-masajes",
  storageBucket: "turnos-masajes.appspot.com",
  messagingSenderId: "375582306385",
  appId: "1:375582306385:web:a40ae297a2c04a496a4870",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
