
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {Timestamp, writeBatch, collection, where, doc } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBf-zDgzsz7zuXACzFn6UCLQczpLy8CQwc",
  authDomain: "corralonweb-21bc6.firebaseapp.com",
  projectId: "corralonweb-21bc6",
  storageBucket: "corralonweb-21bc6.appspot.com",
  messagingSenderId: "756649107021",
  appId: "1:756649107021:web:f2db69383871003035c604"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

const batch = writeBatch(db);
const citiesRef = collection(db, "cities");
const query = where("state", "==", "CA");
const docRef = doc(citiesRef, "SF");
const timestamp = Timestamp.fromDate(new Date());


