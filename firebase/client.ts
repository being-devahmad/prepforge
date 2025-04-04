
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    // apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY!,
    // authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN!,
    // projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID!,
    // storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET!,
    // messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID!,
    // appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID!,
    // measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID!,

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