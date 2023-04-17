// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp, setLogLevel } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRhVM3fw8hZ2d7viC3O9X-Pi-2aCrdU2w",
  authDomain: "daily-record-e8c1d.firebaseapp.com",
  databaseURL: 'https://daily-record-e8c1d.firebaseio.com',
  projectId: "daily-record-e8c1d",
  storageBucket: "daily-record-e8c1d.appspot.com",
  messagingSenderId: "226693687112",
  appId: "1:226693687112:web:880a6b841ba101dd8c757d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig, {
  experimentalForceLongPolling: true, // this line
  useFetchStreams: false, // and this line
});

const db = getFirestore(app);
// setLogLevel('debug');
export { db };
