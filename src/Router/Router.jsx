import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../MainLayout/RootLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import GetInTouch from "../Pages/GetInTouch/GetInTouch";
import PrivateRoute from "../PrivateRouute/PrivateRoute";
import UpProfile from "../Pages/Profile/UpProfile";

import CardDetails from "../Components/ResidenceCard/CardDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("/hospitality.json"),
      },
      {
        path: "/cardDetails/:id",
        element:<PrivateRoute><CardDetails /></PrivateRoute> ,
        // eslint-disable-next-line no-unused-vars
        loader: ({ params }) => fetch("/hospitality.json"),
      },

      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/GetTouch",
        element: (
          <PrivateRoute>
            <GetInTouch />
          </PrivateRoute>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <UpProfile />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
