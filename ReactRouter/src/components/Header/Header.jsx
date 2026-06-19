import React from 'react'
import {NavLink , Link} from 'react-router-dom'


function Header(){
  return (
    <>
    <header className='shadow sticky z-50 top-0'>
      <nav className='bg-white px-4 lg:px-6 py-2.5 border-gray-300'>
        <div className='flex flex-wrap items-center justify-between mx-auto '>
          <Link to="/"
          className='flex items-center'
          >
             <img src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png" className='mr-7 h-12' alt="LOGO" />
          </Link>
          <div>
            <Link
            to="#"
            className='text-black hover:bg-yellow-300 hover:text-taupe-900 focus:ring-4 font-medium rounded-lg text-sm px-4 lg:px-5 py-2'
            >
               Log in
            </Link>
            <Link
            to="#"
            className='text-black hover:bg-yellow-300 hover:text-taupe-900 focus:ring-4 font-medium rounded-lg text-sm px-4 lg:px-5 py-2'
            >
               Get Started
            </Link>
          </div>

          <div 
          className='hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1'
          id="mobile-menu-2"
          >
            <ul 
            className='flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 '
            >
              <li>
                <NavLink
                className={({isActive})=>{
                  `block py-2 pr-4 pl-3 duration-200 border-b ${isActive? "text-blue-800" : "text-green-600" } border-yellow-200 hover:bg-blue-500 lg:hover:bg-transparent lg:border-0 hover:text-orange-700  lg:p-0`
                }}
                >
                  Home
                </NavLink>
              </li>
            </ul>
          </div>
          
          
        </div>
      </nav>
    </header>
    </>
  )
}






export default Header