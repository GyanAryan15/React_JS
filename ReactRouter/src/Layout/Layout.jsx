/**
 * @file Layout.tsx
 * @description Defines the root layout wrapper for the application. 
 * Renders persistent UI elements like the Header and Footer around dynamic nested routes.
 */

import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

/**
 * Layout Component
 * 
 * Acts as the structural parent for all application pages. The `<Outlet />` 
 * component acts as a placeholder that automatically swaps in the matching 
 * child route components (e.g., Home, About, Contact) between the static 
 * Header and Footer.
 * 
 * @returns {React.ReactElement} The rendered layout containing the header, dynamic route content, and footer.
 */
function Layout() {
  return (
    <>
      <Header />
      {/* 
        Outlet renders the current matching child route from React Router. 
        If the path is "/", it renders <Home />. If "/about", it renders <About />.
      */}
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;