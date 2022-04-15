import firebase from "firebase";




const firebaseConfig = {
  apiKey: "AIzaSyDMK4xs9PsdQ6XSIWkkxa_pXygxggbYlko",
  authDomain: "linkedin-clone-390e2.firebaseapp.com",
  projectId: "linkedin-clone-390e2",
  storageBucket: "linkedin-clone-390e2.appspot.com",
  messagingSenderId: "632351202752",
  appId: "1:632351202752:web:9fc5e075a877b851673c25",
  measurementId: "G-JMHC2XTSY9"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
