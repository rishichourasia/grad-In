import { createAsyncThunk } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase-config";
import { createUser } from "./firestore-methods";

const loginUser = createAsyncThunk("login", async (loginCredentials) => {
  const { email, password } = loginCredentials;
  try {
    const {
      user: { uid },
    } = await signInWithEmailAndPassword(auth, email, password);
    console.error(uid);
    return uid;
  } catch (err) {
    throw err.message;
  }
});

const signUp = async (firstName, lastName, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    createUser(firstName, lastName, email, res.user.uid);
  } catch (err) {
    const errCode = err.code;
    const errorMessage = err.message;
    console.error(errCode, errorMessage);
  }
};

export { loginUser, signUp };
