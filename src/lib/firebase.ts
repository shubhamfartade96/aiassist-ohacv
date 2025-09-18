import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  projectId: "aiassist-ohacv",
  appId: "1:859976139586:web:de9476b15abfb610ef3edb",
  storageBucket: "aiassist-ohacv.firebasestorage.app",
  apiKey: "AIzaSyCLOgEkXpgmsAx4SHZcwmMDF1WbRzgSOQI",
  authDomain: "aiassist-ohacv.firebaseapp.com",
  measurementId: "",
  messagingSenderId: "859976139586"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
