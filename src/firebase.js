import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/storage';


// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2nBQ1fdRezEvtQW3uf2Lj4Z3F6su0Whk",
  authDomain: "architec-7dd1f.firebaseapp.com",
  projectId: "architec-7dd1f",
  storageBucket: "architec-7dd1f.appspot.com",
  messagingSenderId: "759108364735",
  appId: "1:759108364735:web:ab02dbc2c7ba441aa4190a",
  measurementId: "G-8TKZE5GP6R"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore(app);
const auth = firebase.auth(app);
const storage = firebase.storage(app);




export { db, auth, storage };