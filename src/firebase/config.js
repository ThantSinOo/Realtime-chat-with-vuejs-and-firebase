// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqyyzR5S-WP_ZZ3fpqpS3liGujK1gdW3w",
  authDomain: "realtime-chat-84a1b.firebaseapp.com",
  projectId: "realtime-chat-84a1b",
  storageBucket: "realtime-chat-84a1b.appspot.com",
  messagingSenderId: "1068830507333",
  appId: "1:1068830507333:web:6d9e4d991faf76221b3e2c"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);
// let db = firebase.firestore;
let db = firebase.firestore();
let auth = firebase.auth();
let timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {db,auth, timestamp};    

