/* eslint-disable react/prop-types */
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth"
import { createContext } from "react"
import auth from "../Firebase/firebase.config"


export const AuthContext = createContext(null)

export default function ContextProvider({children}) {
  const createUser =(email,password)=>{
   return createUserWithEmailAndPassword(auth,email,password)
  }
  const signInUser =(email,password) =>{
   return signInWithEmailAndPassword(auth,email,password)
  }
  const updateUserProfile =(user,update)=>{
    return updateProfile(user,update)
  }
    const authInfo={
        createUser,
        signInUser,
        updateUserProfile
        
    }
  return (
    <>
    <AuthContext.Provider value={authInfo} >
    {children}
    </AuthContext.Provider>
    </>
  )
}
