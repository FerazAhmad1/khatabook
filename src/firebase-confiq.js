import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDQCWs9SI07zAWukmPD860hEMGb4ks4E8o",
  authDomain: "khatabook-70c6a.firebaseapp.com",
  projectId: "khatabook-70c6a",
  storageBucket: "khatabook-70c6a.appspot.com",
  messagingSenderId: "959782706804",
  appId: "1:959782706804:web:d5a855ea1cc560d4a37b21",
};

const app = initializeApp(firebaseConfig);
// export const firedb = app.database().ref();
export const db = getFirestore(app);
