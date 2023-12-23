// import firebase from 'firebase/app';
// import 'firebase/auth';

// const firebaseConfig = {
//     apiKey: "AIzaSyBIXZR_SpZBXVpQl79mGlcv7BXwyhWKQy8",
//     authDomain: "recipes-555.firebaseapp.com",
//     projectId: "recipes-555",
//     storageBucket: "recipes-555.appspot.com",
//     messagingSenderId: "672226570280",
//     appId: "1:672226570280:web:da0e53cf1fe40c76fa451d"
//   };

//   //check if not initialized yet
//   if (!firebase.apps.length) {
//       firebase.initializeApp(firebaseConfig);
//   }

//   //export default firebase;
//   export default firebase;

//   export const auth = firebase.auth();


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIXZR_SpZBXVpQl79mGlcv7BXwyhWKQy8",
  authDomain: "recipes-555.firebaseapp.com",
  projectId: "recipes-555",
  storageBucket: "recipes-555.appspot.com",
  messagingSenderId: "672226570280",
  appId: "1:672226570280:web:da0e53cf1fe40c76fa451d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);