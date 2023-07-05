import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'


const firebaseConfig: any = {
    apiKey: "AIzaSyDr2eVqQw0_4ex6vRZhzJHS3zrjJeVi0yw",
    authDomain: "udemy-vue-firebase-cours-1af1e.firebaseapp.com",
    projectId: "udemy-vue-firebase-cours-1af1e",
    storageBucket: "udemy-vue-firebase-cours-1af1e.appspot.com",
    messagingSenderId: "811828952469",
    appId: "1:811828952469:web:5c1e675fa19f30e2518a9c"
};

//init firebase
firebase.initializeApp(firebaseConfig)

const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, timestamp, projectAuth }