// Import the functions you need from the SDKs you need
import firebase,{initializeApp} from 'firebase/app';

import 'firebase/auth';
import 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyCH-hM2UJ1CrZvPLmcJYt2ISuLBCfhGPew",
  authDomain: "my-androi-3c2a9.firebaseapp.com",
  projectId: "my-androi-3c2a9",
  storageBucket: "my-androi-3c2a9.appspot.com",
  messagingSenderId: "762343481465",
  appId: "1:762343481465:web:d9ce29e7a6b2d8c6ca74a8",
  measurementId: "G-FENBQ7MLL9"
};

// Initialize Firebase

export const FirebaseApp =  firebase.initializeApp(firebaseConfig);
export const FirebaseAuth = firebase.auth();
export const firestore = firebase.firestore();