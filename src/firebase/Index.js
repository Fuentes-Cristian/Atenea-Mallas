// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByDdJ3UOSRuT9QLb4GUvmhhIUUpV0fO7c",
  authDomain: "atenea-mallas.firebaseapp.com",
  projectId: "atenea-mallas",
  storageBucket: "atenea-mallas.appspot.com",
  messagingSenderId: "844454085543",
  appId: "1:844454085543:web:b98029f2c81f9191b3ec82",
  measurementId: "G-ECEQRWNB8F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)