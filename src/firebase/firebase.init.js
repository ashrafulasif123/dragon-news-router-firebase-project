// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDkqIrarVTh73bLO-azGyMO3T_BlzR-Mh8",
    authDomain: "dragon-news-firebase-pro-24a9d.firebaseapp.com",
    projectId: "dragon-news-firebase-pro-24a9d",
    storageBucket: "dragon-news-firebase-pro-24a9d.firebasestorage.app",
    messagingSenderId: "959492642139",
    appId: "1:959492642139:web:8ccda427df0aa84f69367e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);