import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCIJkAFBcX-nong48Jt5d85uTnwkW8hbdk",
    authDomain: "challenge-82441.firebaseapp.com",
    databaseURL: "https://challenge-82441.firebaseio.com",
    projectId: "challenge-82441",
    storageBucket: "challenge-82441.appspot.com",
    messagingSenderId: "847375483504",
    appId: "1:847375483504:web:6da4af0cff5d4fb51feab5",
    measurementId: "G-P45SH203P7"
  };

  // this will set up everything
const firebaseApp = firebase.initializeApp(firebaseConfig);

// initialize firebase

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};