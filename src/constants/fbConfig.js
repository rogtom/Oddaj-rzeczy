import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyANlWyeTmiPZd66N9vgOMSxXiKvJE4efYE",
    authDomain: "give-away-34823.firebaseapp.com",
    projectId: "give-away-34823",
    storageBucket: "give-away-34823.appspot.com",
    messagingSenderId: "1050985641313",
    appId: "1:1050985641313:web:bd7ed7a53926b0f2b74120",
    measurementId: "G-67YP9F639F"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });


export default firebase;