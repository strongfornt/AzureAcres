import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../MainLayout/RootLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import GetInTouch from "../Pages/GetInTouch/GetInTouch";
import PrivateRoute from "../PrivateRouute/PrivateRoute";
import UpProfile from "../Pages/Profile/UpProfile";
import Banner from "../Components/Banner/Banner";

export const router = createBrowserRouter([
  {
    path: "/",
    element:<RootLayout/>,
    children:[
        {
            path:'/',
            element:<Home/>
        },
        {
          path:'/login',
          element:<Login/>
        },
        {
          path:'/register',
          element:<Register/>
        },
        {
          path:'/GetTouch',
          element:<PrivateRoute><GetInTouch/></PrivateRoute>
        },
        {
          path:'/profile',
          element:<PrivateRoute>
            <UpProfile/>
          </PrivateRoute>
        }
      
        
    ]
  },
]);
