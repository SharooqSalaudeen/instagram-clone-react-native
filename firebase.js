import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

export const firebaseConfig = {
  apiKey: "AIzaSyALj2kp0pEj6CJxGTQ93fCbwrdZrJphNSY",
  authDomain: "instagram-app-clone-365a0.firebaseapp.com",
  projectId: "instagram-app-clone-365a0",
  storageBucket: "instagram-app-clone-365a0.appspot.com",
  messagingSenderId: "470801893277",
  appId: "1:470801893277:web:0875e8101a6c9b6839d174",
};

// Initialize Firebase
let app;
if (!firebase.apps.length) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}
const db = app.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
