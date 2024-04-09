/* eslint-disable react/prop-types */
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";

const googleProvider = new GoogleAuthProvider();
export const AuthContext = createContext(null);

export default function ContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading,setLoading] = useState(true)
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const updateUserProfile = (user, update) => {
    return updateProfile(user, update);
  };
  const googleLogin =()=>{
  return  signInWithPopup(auth,googleProvider)
  }
  const logOut =()=>{
    return signOut(auth)
  }
  

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        
        console.log("current user", currentUser);
        setUser(currentUser);
        setLoading(false)
      } else {
        setUser(null);
        setLoading(false)
      }
    });

    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    user,
    createUser,
    signInUser,
    updateUserProfile,
    googleLogin,
    logOut,
    loading,
    setLoading
  };
  return (
    <>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </>
  );
}
