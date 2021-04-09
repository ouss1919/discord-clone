import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDc1cwJl51rPA6VWE8FuD9XS2bEYVfQ_mQ",
  authDomain: "discord-clone-bfbc2.firebaseapp.com",
  projectId: "discord-clone-bfbc2",
  storageBucket: "discord-clone-bfbc2.appspot.com",
  messagingSenderId: "820243719986",
  appId: "1:820243719986:web:1f1cab7d276c2e2b7c592b"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};

export default db;