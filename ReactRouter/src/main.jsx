import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, Routes, createBrowserRouter, createRoutesFromElements } from 'react-router-dom' 
import Layout from "../src/Layout/Layout"
import './index.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import About from './components/About/About'
import Home from './components/Home/Home'
import Contact from './components/Contact/Contact'


// const router  = createBrowserRouter([
//   {
//     path:"/",
//     element:<Layout />,
//     errorElement: <div className="text-center text-3xl font-bold py-20 text-red-800">Oops! Page Not Found 🚫</div>,
//     children:[{
//       path:"",
//       element:<Home />
//     },
//     {
//       path:"about",
//       element:<About/>
//     },
//   {
//     path:"contact",
//       element:<Contact/>
//   }]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path="" element={<Home />} />
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Route>
  )
)



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)