import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'

//config fiel from firestore.com - project overview, settings
const firebaseConfig: any = {
    apiKey: "AIzaSyDr2eVqQw0_4ex6vRZhzJHS3zrjJeVi0yw",
    authDomain: "udemy-vue-firebase-cours-1af1e.firebaseapp.com",
    projectId: "udemy-vue-firebase-cours-1af1e",
    storageBucket: "udemy-vue-firebase-cours-1af1e.appspot.com",
    messagingSenderId: "811828952469",
    appId: "1:811828952469:web:5c1e675fa19f30e2518a9c"
};

//init firebase
firebase.initializeApp(firebaseConfig) //initialization of firebase

const projectFirestore = firebase.firestore() //comunicationg with the database, storing some values
const projectAuth = firebase.auth() // authentication for users
const timestamp = firebase.firestore.FieldValue.serverTimestamp //gets the time of when the data was created

export { projectFirestore, timestamp, projectAuth }