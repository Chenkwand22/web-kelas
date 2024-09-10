// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"

import {getAuth, GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAjZIjC1IvVd23oJJ3djyRNmw0Wo7hXl4Q",
  authDomain: "techofnetwork-2766c.firebaseapp.com",
  projectId: "techofnetwork-2766c",
  storageBucket: "techofnetwork-2766c.appspot.com",
  messagingSenderId: "625218521047",
  appId: "1:625218521047:web:d74814ff4dd727ac11ed92",
  measurementId: "G-HWDF9T14G3"


};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();