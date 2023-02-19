// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import { initializeApp } from "firebase/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBC-OfMN-3jqBfnHs8HR_tGy0V9uEo2xhY",
    authDomain: "linkedin-clone-32531.firebaseapp.com",
    projectId: "linkedin-clone-32531",
    storageBucket: "linkedin-clone-32531.appspot.com",
    messagingSenderId: "1042658346754",
    appId: "1:1042658346754:web:2c8618bc89cad8f3bfa41b",
    measurementId: "G-8GRGKC74S4"
  };

  const fireBaseApp = firebase.initializeApp (firebaseConfig);
  const db = firebase.firestore();
  const auth = firebase.auth();

  export {db,auth}