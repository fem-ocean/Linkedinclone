import firebase from "firebase/compat/app";
// import { getFirestore } from "firebase/firestore/lite";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { GoogleAuthProvider } from "firebase/auth";
// import { getStorage } from "firebase/storage";



const firebaseConfig = {
  apiKey: "AIzaSyDMK4xs9PsdQ6XSIWkkxa_pXygxggbYlko",
  authDomain: "linkedin-clone-390e2.firebaseapp.com",
  projectId: "linkedin-clone-390e2",
  storageBucket: "linkedin-clone-390e2.appspot.com",
  messagingSenderId: "632351202752",
  appId: "1:632351202752:web:9fc5e075a877b851673c25",
  measurementId: "G-JMHC2XTSY9",
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider(); //we are initializing d provider usingnew

const storage = firebase.storage(); //storing of pictures and video

export { auth, provider, storage };
export default db;
