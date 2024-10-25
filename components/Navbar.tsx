/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'

function Navbar() {
    const [isOpen, setIsopen] = useState(false);

    const handleClick = () =>{
        setIsopen(!isOpen);
    }
  return (
<>



<nav className="bg-white border-gray-100  border-b-2 shadow-md z-20 top-0 start-0 fixed w-full">
    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="/bgOki.jpg" className=" h-10 w-16 rounded-xl" alt="Logo entreprise" />
        </a>
        <button data-collapse-toggle="mega-menu-full" type="button" onClick={handleClick} className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden" aria-controls="mega-menu-full" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            {!isOpen&&(
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
                <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"></path>
                </svg>)}
            {isOpen&&(
                
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
    <path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"></path>
    </svg>
            )}
        </button>
        
        <div id="mega-menu-full" className="items-center justify-between font-medium hidden w-full md:flex md:w-auto md:order-1">
            <ul className="flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
                <li>
                    <a href="/" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0" aria-current="page">Accueil</a>
                </li>
              
                <li>
                    <a href="#services" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">Services</a>
                </li>
                <li>
                    <a href="#pourquoiNous" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 ">Pourquoi Nous ?</a>
                </li>
                <li>
                    <a href="#contact" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 ">Contact</a>
                </li>
            </ul>
        </div>
        
    </div>
    {isOpen&&(<div><ul className="flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
                <li>
                    <a href="/" onClick={handleClick} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0" aria-current="page">Accueil</a>
                </li>
              
                <li>
                    <a href="#services" onClick={handleClick} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">Services</a>
                </li>
                <li>
                    <a href="#pourquoiNous" onClick={handleClick} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 ">Pourquoi Nous ?</a>
                </li>
                <li>
                    <a href="#contact" onClick={handleClick} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 ">Contact</a>
                </li>
            </ul></div>)}
</nav>

</>
  );
}
export default Navbar