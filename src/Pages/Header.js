import React, { useState } from 'react';
import logo from '../images/logo.png';
import { MenuIcon, XIcon } from '@heroicons/react/outline';


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="sticky top-0 w-full bg-white text-blue-600 z-50">
      <nav className="container mx-auto flex justify-between items-center p-2">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-40 mr-4" />
        </div>
        <div className="block lg:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? (
              <XIcon className="h-8 w-8 text-blue-600" />
            ) : (
              <MenuIcon className="h-8 w-8 text-blue-600" />
            )}
          </button>
        </div>
        <ul className="hidden lg:flex lg:space-x-4">
          <li><a href="/" className="block p-4 text-blue-600 hover:bg-red-500 hover:text-white">Home</a></li>
          <li><a href="/stegicov19" className="block p-4 text-blue-600 hover:bg-red-500 hover:text-white">STeGI-COV-19</a></li>
        </ul>
      </nav>
      <div className={`fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={toggleMenu}></div>
      <div className={`fixed inset-y-0 left-0 bg-blue-600 z-50 w-64 transform transition-transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex justify-between items-center p-4 border-b border-blue-700">
          <button onClick={toggleMenu} className="focus:outline-none">
            <p>Menu</p>
            <XIcon className="h-8 w-8 text-white" />
          </button>
        </div>
        <ul className="flex flex-col space-y-4 p-4">
        <li><a href="/" className="block p-4 text-white hover:bg-red-500 hover:text-white">Home</a></li>
          <li><a href="/stegicov19" className="block p-4 text-white hover:bg-red-500 hover:text-white">STeGI-COV-19</a></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
