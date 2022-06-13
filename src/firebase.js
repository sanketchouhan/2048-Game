// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0dR2kJh0is2tjE8HJhN6BR64BT37HgNM",
  authDomain: "common-bucket-3252b.firebaseapp.com",
  projectId: "common-bucket-3252b",
  storageBucket: "common-bucket-3252b.appspot.com",
  messagingSenderId: "933664549225",
  appId: "1:933664549225:web:d61965c737caf364b7f5f8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
export { db };
