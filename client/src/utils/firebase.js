
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
authDomain: "aiinterviewer-cfb34.firebaseapp.com",
  projectId: "aiinterviewer-cfb34",
  storageBucket: "aiinterviewer-cfb34.firebasestorage.app",
  messagingSenderId: "536418770927",
  appId: "1:536418770927:web:267eb12d64cea8aff7e01a",
  measurementId: "G-HTHWGDXP6T"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}