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
const router = createBrowserRouter([
  {
    path: "/registration",
    element: <Registration/> ,
  },
  {
    path: "/signin",
    element: < Signin/> ,
  },
]);
function App() {

  return (
    <>
       <RouterProvider router={router} />
    </>
  )
}

export default App
