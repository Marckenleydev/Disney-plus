import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAiAVG4I1ru4nkuiD1jBkfFEdejdvXL0ek",
    authDomain: "disney--clone-a3956.firebaseapp.com",
    projectId: "disney--clone-a3956",
    storageBucket: "disney--clone-a3956.appspot.com",
    messagingSenderId: "984637736940",
    appId: "1:984637736940:web:4d2ceae04981da2525a2c9",
    measurementId: "G-WS4RJF9N24"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();
export { auth, provider, storage };
export default db;