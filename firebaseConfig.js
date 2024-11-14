// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCD5KgqZFjJbQ6nJFB2b4hQ-bIRGRVMRgs",
  authDomain: "valentinataleb-42af7.firebaseapp.com",
  projectId: "valentinataleb-42af7",
  storageBucket: "valentinataleb-42af7.firebasestorage.app",
  messagingSenderId: "535532918412",
  appId: "1:535532918412:web:64f4b93ee7985a75a44da9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };