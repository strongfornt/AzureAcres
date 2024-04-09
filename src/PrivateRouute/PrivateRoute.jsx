/* eslint-disable react/prop-types */
import { useContext } from "react"
import { AuthContext } from "../ContextProvider/ContextProvider"
import { Navigate } from "react-router-dom";

import { useLocation } from 'react-router-dom';
import Spiner from "../Spiner/Spiner";




export default function PrivateRoute({children}) {
    const location = useLocation()
    
const {user,loading} = useContext(AuthContext);
if(loading){
    return <Spiner/>
}
 
if(user) return children

  return <Navigate to='/login' state={location.pathname}  />
}
