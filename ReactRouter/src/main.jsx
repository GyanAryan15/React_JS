/**
 * @file main.jsx
 * @description Main entry point for the React application. Configures the root DOM rendering 
 * and the application's routing hierarchy using React Router v6.
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from "../src/Layout/Layout";
import './index.css';
// Note: Header and Footer are typically rendered inside the Layout component, 
// so they might not need to be imported here unless used outside the router.
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';

/**
 * The root DOM node where the React application will be mounted.
 * We cast this as an HTMLElement to satisfy TypeScript's strict null checking.
 * * @constant {HTMLElement}
 */
//const rootElement = document.getElementById('root') as HTMLElement;

/**
 * Initializes the React root and renders the application tree.
 * Wraps the app in React.StrictMode for development checks and BrowserRouter for DOM routing.
 */
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Parent Layout Route */}
        <Route path='/' element={<Layout />}>
          {/* Nested Child Routes */}
          <Route index element={<Home />} /> 
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);