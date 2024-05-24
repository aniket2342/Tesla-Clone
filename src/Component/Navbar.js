import React from 'react'
import logo from '../tools/logonew.png'
import  { useState } from 'react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
    {/* <nav className="flex justify-between items-center p-4 bg-black fixed left-0 w-full z-10  top-0 ">
      <div>
        <img src={logo} className='w-20'></img>
      </div>
      <ul className="flex space-x-4 text-red-500">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav> */}
    

    

    <nav className="bg-black ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 fixed left-0 right-0 z-10">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={logo} className="h-8" alt="Flowbite Logo" />
        </a>
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-hamburger"
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className={`${isMenuOpen ? 'block' : 'hidden'} w-full bg-white h-screen rounded-lg`} id="navbar-hamburger">
          <ul className="flex flex-col font-medium mt-4 rounded-lg">
            <li>
              <a href="#" className="block py-2 px-3 text-black " aria-current="page">
                Vehicles
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-black">
                Energy
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-black">
                Charging
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-black">
                Discover
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-black">
                Shop
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-black">
               Support
              </a>
            </li>
            <li className='flex'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 mt-2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                </svg>

              <a href="#" className="block py-2 px-3 text-black">
                United States
              </a>
            </li>
            <li className='flex'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 mt-2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>

              <a href="#" className="block py-2 px-3 text-black">
                Account
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    </>
  )
}

export default Navbar