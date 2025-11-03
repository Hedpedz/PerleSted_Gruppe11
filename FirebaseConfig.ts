// Import the functions you need from the SDKs you need
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { initializeApp } from "firebase/app";
import { getReactNativePersistence, initializeAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAP9VqX4E7FHPBNwSiso2PdBSIeOlmn_iw",
  authDomain: "perlested.firebaseapp.com",
  databaseURL: "https://perlested-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "perlested",
  storageBucket: "perlested.firebasestorage.app",
  messagingSenderId: "427045034277",
  appId: "1:427045034277:web:4cf21959c2c7a6454322cc",
  measurementId: "G-HH27ZTHRK7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
