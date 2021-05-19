import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: "",
};

firebase.initializeApp(firebaseConfig);

//utils
const db = firebase.firestore();
const auth = firebase.auth();

//collections
const usersCollection = db.collection("users");

export { db, auth, usersCollection };
