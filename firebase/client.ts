import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBGNGunX833HPjHiLqCVJiObxSt5kB5KYA",
  authDomain: "ai-view-f6eac.firebaseapp.com",
  projectId: "ai-view-f6eac",
  storageBucket: "ai-view-f6eac.firebasestorage.app",
  messagingSenderId: "512217863459",
  appId: "1:512217863459:web:fabb8d97032b30d27a2896",
  measurementId: "G-QCY69D7HP1"
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app)