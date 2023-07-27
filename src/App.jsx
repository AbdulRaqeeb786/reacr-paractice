import { useState } from 'react'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import Contact from './pages/Contact';
import LatestNews from './pages/LatestNews';
import About from  './pages/About';
import Blog from  './pages/Blog';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/contact",
    element: <Contact/>,
  },
  {
    path: "/latestnews",
    element: <LatestNews/>,
  },
  {
    path: "/about",
    element: <About/>,
  },
  {
    path: "/blog",
    element: <Blog/>,
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
