import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDuq0u4d4RCuUHPMRC-sqV7KzWIp64Kfq8",
  authDomain: "favorites-b2cac.firebaseapp.com",
  projectId: "favorites-b2cac",
  storageBucket: "favorites-b2cac.appspot.com",
  messagingSenderId: "438172505514",
  appId: "1:438172505514:web:00a4f3cc74be249942c7d3"
};

export const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth();
export const firebaseDB = getFirestore(app);
export const firebaseStorage = getStorage(app);