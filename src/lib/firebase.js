import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore' 

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "react-chatapp-93eb7.firebaseapp.com",
  projectId: "react-chatapp-93eb7",
  storageBucket: "react-chatapp-93eb7.firebasestorage.app",
  messagingSenderId: "658606080140",
  appId: "1:658606080140:web:d2e1adb0157667090e7ba9"
};



const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db= getFirestore()