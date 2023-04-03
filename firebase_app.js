// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHnmTz1WlY7D4c1C2pBUSy85ENoz7u6mM",
  authDomain: "hangman-uni-plovdiv.firebaseapp.com",
  projectId: "hangman-uni-plovdiv",
  storageBucket: "hangman-uni-plovdiv.appspot.com",
  messagingSenderId: "349163285049",
  appId: "1:349163285049:web:117b4842788b2844c33be8",
  measurementId: "G-DRCX3TQMCN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);