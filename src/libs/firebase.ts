// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyARJjZtDOcQSQAJMmp4ZzpQAegLuyZE5Q0",
  authDomain: "portfolio-86274.firebaseapp.com",
  projectId: "portfolio-86274",
  storageBucket: "portfolio-86274.appspot.com",
  messagingSenderId: "130601727809",
  appId: "1:130601727809:web:48657ee2417e858db893c0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const storage = getStorage(app)
