
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCX5tuEYmFAZN1GlA0e9Olys7q__Rd3MAk",
    authDomain: "prepforge-e6601.firebaseapp.com",
    projectId: "prepforge-e6601",
    storageBucket: "prepforge-e6601.firebasestorage.app",
    messagingSenderId: "1073218841718",
    appId: "1:1073218841718:web:c284e2032439be5e264357",
    measurementId: "G-K34CKDCT9B"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app)
export const db = getFirestore(app)