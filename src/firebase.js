import firebase from "firebase/compat/app";
import "firebase/compat/auth"; 
import "firebase/com/firestore"; 

const firebaseConfig = {
    apiKey: "AIzaSyCOgeHIemUnU18LKdqX6Az-hBoQMb0jquc",
    authDomain: "react--clone-18857.firebaseapp.com",
    projectId: "react--clone-18857",
    storageBucket: "react--clone-18857.appspot.com",
    messagingSenderId: "429920665269",
    appId: "1:429920665269:web:ef6e92d5f5eb5a1c5788fc"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig); 

  const db = firebaseApp.firestore(); 
  const auth = firebase.auth(); 

  export {db, auth};  