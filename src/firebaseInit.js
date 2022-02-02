// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhxpGYGvuRirIYcKh2dm9DBVMtyJQU1ew",
  authDomain: "crown-clothing-58907.firebaseapp.com",
  projectId: "crown-clothing-58907",
  storageBucket: "crown-clothing-58907.appspot.com",
  messagingSenderId: "370354961865",
  appId: "1:370354961865:web:9de0b2280a7939a653fc18",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth();
const provider = new GoogleAuthProvider();
// provider.setCustomParameters({'prom'})
const signInWithGoogle = () => signInWithPopup(auth, provider);

async function createUserProfileDocument(userAuth, additionalDetails) {
  if (!userAuth) {
    return;
  }

  const userRef = doc(db, `users/${userAuth.uid}`);
  const snapShot = await getDoc(userRef);

  if (!snapShot.exists()) {
    const createdAt = new Date();
    const { displayName, email } = userAuth;
    try {
      await setDoc(userRef, {
        displayName,
        createdAt,
        email,
        ...additionalDetails,
      });
    } catch (error) {
      console.log("user err", error);
    }
  }

  return userRef;
}

export { provider, auth, signInWithGoogle, createUserProfileDocument };
export default db;
