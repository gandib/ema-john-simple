// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCtsxyhWb0-X-Ca0WC-rCKU7VhNT9eye_I",
    authDomain: "ema-john-simple-a9365.firebaseapp.com",
    projectId: "ema-john-simple-a9365",
    storageBucket: "ema-john-simple-a9365.appspot.com",
    messagingSenderId: "1019043161360",
    appId: "1:1019043161360:web:4faf01324bbf5a7c9e3195"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;