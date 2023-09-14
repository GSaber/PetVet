// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0M7p00tVWo2UYjkhGsvmLNvFiLnMBN5s",
  authDomain: "petvet-app.firebaseapp.com",
  projectId: "petvet-app",
  storageBucket: "petvet-app.appspot.com",
  messagingSenderId: "383028359290",
  appId: "1:383028359290:web:00bf7389cb239b19a04bc3",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
// To apply the default browser preference instead of explicitly setting it.

auth.useDeviceLanguage();
export const provider = new GoogleAuthProvider();
