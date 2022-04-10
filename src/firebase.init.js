// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD42uMJ88i6TgKYGvLuSN6Nkz34HYHk564",
    authDomain: "router-firebase-intregat-dd44c.firebaseapp.com",
    projectId: "router-firebase-intregat-dd44c",
    storageBucket: "router-firebase-intregat-dd44c.appspot.com",
    messagingSenderId: "39432343651",
    appId: "1:39432343651:web:82ed52a938ef615fa0e856"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;