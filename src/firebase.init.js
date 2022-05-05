// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVMiG_BlTCBT6zqnkwrUgvbpYC3lEQ4KQ",
  authDomain: "car-delarship-project.firebaseapp.com",
  projectId: "car-delarship-project",
  storageBucket: "car-delarship-project.appspot.com",
  messagingSenderId: "490897023261",
  appId: "1:490897023261:web:6b92eaa7c1a2530836c1f4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default auth;