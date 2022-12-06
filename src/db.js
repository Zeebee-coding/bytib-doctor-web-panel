import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
var firebaseConfig = {
    apiKey: 'AIzaSyAQAJGWelgvBlulVLaW4UDmcq4qvyi1hpc',
    authDomain: 'bytib-13a2f.firebaseapp.com',
    databaseURL:
      'https://bytib-13a2f-default-rtdb.europe-west1.firebasedatabase.app',
    projectId: 'bytib-13a2f',
    storageBucket: 'bytib-13a2f.appspot.com',
    messagingSenderId: '739336689230',
    appId: '1:739336689230:web:b4c8f4dff97cc1ed8a151f',
    measurementId: 'G-1D9L1GP987',
};
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app)
const database = getFirestore(app);
export default db;

