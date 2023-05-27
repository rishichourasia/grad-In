import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCBH4WfE3f5KoKx87flaRpUvhoV45h4upY",
  authDomain: "tradepeer-6632f.firebaseapp.com",
  projectId: "tradepeer-6632f",
  storageBucket: "tradepeer-6632f.appspot.com",
  messagingSenderId: "383360271390",
  appId: "1:383360271390:web:3819045885e1b48d07da0f"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);

export { app, auth, db };
