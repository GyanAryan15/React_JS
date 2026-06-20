import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter, Routes, Route } from 'react-router-dom' 
import Layout from "../src/Layout/Layout"
import './index.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import About from './components/About/About'
import Home from './components/Home/Home'
import Contact from './components/Contact/Contact'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        
        <Route path='/' element={<Layout/>}>
          <Route path="" element={<Home />} />
          <Route path='about' element={<About/>}/>
          <Route path='contact' element={<Contact/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)