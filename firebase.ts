
// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAnalytics  } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQTzC1gTPVTxHkuQM_kywCCPsl_gtm1ZI",
  authDomain: "workout-89aa2.firebaseapp.com",
  projectId: "workout-89aa2",
  storageBucket: "workout-89aa2.firebasestorage.app",
  messagingSenderId: "917074779294",
  appId: "1:917074779294:web:900d0495834ed4afd4ef8f",
  measurementId: "G-1P9927Y68L"
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const db =getFirestore(app);
export{db};