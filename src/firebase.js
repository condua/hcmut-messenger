// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUxRmmy-aFEH5gaZ_6_b0qt2XV-ZhUzuk",
  authDomain: "chat-app-a9315.firebaseapp.com",
  databaseURL: "http://chat-app-a9315.firebaseio.com",
  projectId: "chat-app-a9315",
  storageBucket: "chat-app-a9315.appspot.com",
  messagingSenderId: "835030054146",
  appId: "1:835030054146:web:76cb4c11e7e9a13944fe1b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
