import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBoXshxHUphC0lxydXiQGEc9OZCNRVVjgk",
    authDomain: "whatsapp-2-713fd.firebaseapp.com",
    projectId: "whatsapp-2-713fd",
    storageBucket: "whatsapp-2-713fd.appspot.com",
    messagingSenderId: "517026625057",
    appId: "1:517026625057:web:94e8e15a7a595feae49560"
  };

const app = !firebase.apps.length ?
firebase.initializeApp(firebaseConfig) :
firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider }