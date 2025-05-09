import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
 
const firebaseConfig = {
  apiKey: "AIzaSyAl9vElCHanAXyCTMF41y9VUP5y6IsVsSU",
  authDomain: "launchpad-c9242.firebaseapp.com",
  projectId: "launchpad-c9242",
  storageBucket: "launchpad-c9242.firebasestorage.app",
  messagingSenderId: "1017604307683",
  appId: "1:1017604307683:web:7157f501fa42bd3f5963d6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth      = getAuth(app);
export const db        = getFirestore(app);
export const storage   = getStorage(app);