import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAnZxgS5BmoWmdxzSpFHpu6g4_Zwb8Zruw",
  authDomain: "expenses-tracker-d24c2.firebaseapp.com",
  projectId: "expenses-tracker-d24c2",
  storageBucket: "expenses-tracker-d24c2.appspot.com",
  messagingSenderId: "702727034616",
  appId: "1:702727034616:web:58f9bc6cf1aa3db6380d0d",
  measurementId: "G-Q1JJQ8F3XL",
};

firebase.initializeApp(firebaseConfig);

const projectAuth = firebase.auth();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.Timestamp;

export { projectAuth, projectFirestore, timestamp };
