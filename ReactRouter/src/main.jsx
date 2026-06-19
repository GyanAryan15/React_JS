import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom' 
import Layout from "../src/Layout/Layout"
import './index.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import About from './components/About/About'
import Home from './components/Home/Home'
const router  = createBrowserRouter([
  {
    path:"/",
    element:<Layout />,
    children:[{
      path:"",
      element:<Home />
    },
    {
      path:"",
      element:<About/>
    }]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)