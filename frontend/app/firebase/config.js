// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDL84Uah_raPMyVOcXpnVzoyINQPF9ex5I',
  authDomain: 'daily-record-6bf65.firebaseapp.com',
  projectId: 'daily-record-6bf65',
  storageBucket: 'daily-record-6bf65.appspot.com',
  messagingSenderId: '291971950305',
  appId: '1:291971950305:web:ec9b211905bab912fcf9a0',
  measurementId: 'G-BL493FX448',
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore(app);

export { db };
