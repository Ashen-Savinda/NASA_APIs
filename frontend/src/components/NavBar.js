import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';
import { useLogout } from '../hooks/useLogout';
import { useTheme } from '../context/ThemeContext';
import { FiSun, FiMoon, FiLogOut, FiLogIn, FiUserPlus, FiMenu, FiX } from 'react-icons/fi';
import SpaceLogo from './SpaceLogo.png';

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { logout } = useLogout();
  const { user } = useAuthContext();
  const { theme, toggleTheme } = useTheme();

  const handleClick = () => {
    logout();
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`border-b-4 transition-all duration-300 ${theme === 'light' ? 'bg-gray-900 border-gray-300' : 'bg-gray-300 border-black'} font-bold`} style={{ fontFamily: 'Orbitron, sans-serif' }}>
      <div className="container mx-auto px-4">
        <nav className={`flex flex-col md:flex-row md:justify-between items-center py-4 transition-all duration-300 ${theme === 'light' ? 'text-gray-200' : 'text-gray-900'}`}>
          <div className="flex items-center justify-between w-full md:w-auto">
            <Link to="/" className={`flex items-center space-x-4 transition-all duration-300 ${theme === 'light' ? 'hover:text-gray-300' : 'hover:text-gray-700'}`}>
              <img src={SpaceLogo} alt="NASA Logo" className="h-20 rounded transition-all duration-300" />
              <h1 className="text-3xl font-extrabold tracking-widest flex items-center">
                NasaAPIs
              </h1>
            </Link>

            <button
              onClick={handleMenuToggle}
              className="md:hidden flex items-center justify-center px-4 py-2 rounded-md transition-all duration-300"
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <FiX size={25} /> : <FiMenu size={25} />}
            </button>
          </div>

          <div className={`flex-col md:flex-row md:flex md:items-center w-full md:w-auto md:space-x-4 ${isMenuOpen ? 'flex' : 'hidden'} md:flex`}>
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <button
                onClick={toggleTheme}
                className={`flex items-center justify-center px-4 py-2 rounded-md transition-all duration-300 ${theme === 'light' ? 'bg-gray-300 text-gray-900 hover:bg-gray-400' : 'bg-gray-700 text-gray-200 hover:bg-gray-600'}`}
                aria-label="Toggle Theme"
              >
                {theme === 'light' ? <FiMoon size={25} /> : <FiSun size={25} />}
              </button>

              {user ? (
                <button
                  onClick={handleClick}
                  className={`flex items-center px-4 py-2 rounded-md transition-all duration-300 ${theme === 'light' ? 'bg-red-500 text-gray-200 hover:bg-red-600' : 'bg-red-700 text-gray-200 hover:bg-red-800'}`}
                >
                  <FiLogOut size={20} className="mr-2" />
                  Log Out
                </button>
              ) : (
                <div className="flex space-x-4">
                  <Link to="/login">
                    <button
                      className={`flex items-center px-4 py-2 rounded-md transition-all duration-300 ${theme === 'light' ? 'bg-blue-500 text-gray-200 hover:bg-blue-600' : 'bg-blue-700 text-gray-200 hover:bg-blue-800'}`}
                    >
                      <FiLogIn size={20} className="mr-2" />
                      Log In
                    </button>
                  </Link>
                  <Link to="/signup">
                    <button
                      className={`flex items-center px-4 py-2 rounded-md transition-all duration-300 ${theme === 'light' ? 'bg-green-500 text-gray-200 hover:bg-green-600' : 'bg-green-700 text-gray-200 hover:bg-green-800'}`}
                    >
                      <FiUserPlus size={20} className="mr-2" />
                      Sign Up
                    </button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </nav>
        
        <div className={`border-t border-gray-700 py-2 transition-all duration-300 ${theme === 'light' ? 'text-gray-200' : 'text-gray-900'}`}>
          <ul className="flex justify-center md:space-x-12 text-lg">
            <li>
              <Link
                className={`block py-2 px-4 rounded transition-colors duration-300 ${theme === 'light' ? 'hover:text-gray-300 hover:bg-gray-800' : 'hover:text-gray-700 hover:bg-gray-400'}`}
                to="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className={`block py-2 px-4 rounded transition-colors duration-300 ${theme === 'light' ? 'hover:text-gray-300 hover:bg-gray-800' : 'hover:text-gray-700 hover:bg-gray-400'}`}
                to="/MarsRoverPhotos"
              >
                Mars Rover
              </Link>
            </li>
            <li>
              <Link
                className={`block py-2 px-4 rounded transition-colors duration-300 ${theme === 'light' ? 'hover:text-gray-300 hover:bg-gray-800' : 'hover:text-gray-700 hover:bg-gray-400'}`}
                to="/about"
              >
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
