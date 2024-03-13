import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import Item from "../JSX/Item";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJ7ECigDatTEdG8Y4iBDgC-0j5FYnqyOA",
  authDomain: "reactcodermartin.firebaseapp.com",
  projectId: "reactcodermartin",
  storageBucket: "reactcodermartin.appspot.com",
  messagingSenderId: "827252702623",
  appId: "1:827252702623:web:80ebfe49796951978551aa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)


export default db;