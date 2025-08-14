import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Registration from '../src/pages/Registration';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
const router = createBrowserRouter([
  {
    path: "/registration",
    element: <Registration/> ,
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
