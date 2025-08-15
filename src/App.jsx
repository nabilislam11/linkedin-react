import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Registration from '../src/pages/Registration';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Signin from './pages/Signin';
import ForgotPassword from './pages/ForgotPassword';
import RootLayout from './pages/RootLayout';
import Home from './pages/Home';
const router = createBrowserRouter([
  {
    path: "/registration",
    element: <Registration/> ,
  },
  {
    path: "/signin",
    element: <Signin/> ,
  },
  {
    path: "/forgotpassword",
    element: <ForgotPassword/> ,
  },
  {
    path: "/",
    element:<RootLayout/>,
    children:[{
      index:true,
      element:<Home/>,
    },
 
  ]
  }
]);
function App() {

  return (
    <>
       <RouterProvider router={router} />
    </>
  )
}

export default App
