import React, { Children } from 'react'
import ReactDOM from "react-dom/client";
import { StrictMode } from 'react'
import { BrowserRouter, createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import Layout from './Layout/Layout.jsx';
import { path } from 'motion/react-client';
import Home from './components/Home/Home.jsx';
import About from './components/about/About.jsx';
import Project from './components/Project/Project.js';
import Contact from './components/contact/Contact.jsx';

const router =createBrowserRouter([
{
  path:"/",
  element:<Home/>
},
{
  path:"/",
  element:<Layout/>,
  children:[
    {
      path:"about",
      element:<About/>
    },
    {
      path:"project",
      element:<Project/>
    },
    {
      path:"contact",
      element:<Contact/>
    }
  ]
}

  // {
  //   path:"/",
  //   element:<Layout/>,
  //   children:[
  //     {path:"",element:<About/>},
  //     {path:"Project",element:<Project/>},
  //     {path:"Contect",element:<Contact/>}

  //   ]
  // }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
   < RouterProvider router={router} /> 
  </StrictMode>
)

