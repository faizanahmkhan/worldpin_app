// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDup2fbRFtoKXA4GX9ezHBOiXwi9QyTUr8",
  authDomain: "worldpin-f05bd.firebaseapp.com",
  projectId: "worldpin-f05bd",
  storageBucket: "worldpin-f05bd.appspot.com",
  messagingSenderId: "981900291209",
  appId: "1:981900291209:web:309b8688cccf17c2432a58"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)