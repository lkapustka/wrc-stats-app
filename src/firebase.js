import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCUy9la4eQAzTQAgWV4x1xudqgBODKRpRM",
  authDomain: "wrc-stats-app.firebaseapp.com",
  projectId: "wrc-stats-app",
  storageBucket: "wrc-stats-app.appspot.com",
  messagingSenderId: "857403538811",
  appId: "1:857403538811:web:76a7e829d71e8030bf91de",
  measurementId: "G-HR9740MJ3H",
};

firebase.initializeApp(firebaseConfig);

//utils
const db = firebase.firestore();
const auth = firebase.auth();

//collections
const usersCollection = db.collection("users");

export { db, auth, usersCollection };
