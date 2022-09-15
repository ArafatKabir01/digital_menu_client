// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDSVhpYDQxYuvbmU2IT6GO-aXjR-CbnCIw",
    authDomain: "digital-menu-3d876.firebaseapp.com",
    projectId: "digital-menu-3d876",
    storageBucket: "digital-menu-3d876.appspot.com",
    messagingSenderId: "671488338005",
    appId: "1:671488338005:web:3958876642a4fdfd7d4cdc",
    measurementId: "G-5TYMSSYPE4"
};

// Initialize Firebase
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth