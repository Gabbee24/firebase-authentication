import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBBRG2LaU3_ORVVEVNsSPKaIX5REmnJw5U",
  authDomain: "auth-development-fcc52.firebaseapp.com",
  projectId: "auth-development-fcc52",
  storageBucket: "auth-development-fcc52.appspot.com",
  messagingSenderId: "52104409728",
  appId: "1:52104409728:web:49f72f403ec84b88082c65"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);