// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClAeX5WrPn0Nrv-4LxHxRBuyZRqCqvcMs",
  authDomain: "foody-8350a.firebaseapp.com",
  projectId: "foody-8350a",
  storageBucket: "foody-8350a.appspot.com",
  messagingSenderId: "236611857390",
  appId: "1:236611857390:web:75ab2f052879332c0cfcff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const fileStorage = getStorage(app);


