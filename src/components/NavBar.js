import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';
import { useLogout } from '../hooks/useLogout';
import { useTheme } from '../context/ThemeContext';

export default function NavBar() {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  const { theme, toggleTheme } = useTheme();

  const handleClick = () => {
    logout();
  };

  return (
    <div className={`bg-${theme === 'light' ? 'gray-900' : 'gray-200'} font-bold`}>
      <div className="container mx-auto px-4">
        <nav className={`flex justify-between items-center py-4 ${theme === 'light' ? 'text-white' : 'text-gray-900'}`}>
          <h1 className="text-3xl font-bold">
            <Link to="/" className={`hover:${theme === 'light' ? 'text-gray-300' : 'text-gray-700'}`}>
              NasaAPI
            </Link>
          </h1>

          <div className='flex'>

            <button onClick={toggleTheme} className={`bg-${theme === 'light' ? 'gray-200' : 'gray-700'} text-${theme === 'light' ? 'gray-900' : 'white'} hover:bg-${theme === 'light' ? 'gray-400' : 'gray-600'} hover:text-${theme === 'light' ? 'gray-900' : 'white'} px-4 py-2 rounded-md mr-6`}>
              {theme === 'light' ? 'Light' : 'Dark'} Mode
            </button>

            {user ? (
              <button onClick={handleClick} className={`text-gray-300 hover:text-gray-100 px-4 py-2 ${theme === 'light' ? 'hover:text-gray-300' : 'text-gray-900 hover:text-gray-700'}`}>
                Log Out
              </button>
            ) : (
              <div>
                <button className={`text-gray-300 hover:text-gray-100 px-4 py-2 ${theme === 'light' ? 'hover:text-gray-300' : 'text-gray-900 hover:text-gray-700'}`}>
                  <Link to="/login">
                    Log In
                  </Link>
                </button>
                <button className={`text-gray-300 hover:text-gray-100 px-4 py-2 ${theme === 'light' ? 'hover:text-gray-300' : 'text-gray-900 hover:text-gray-700'}`}>
                  <Link to="/signup">
                    Sign Up
                  </Link>
                </button>
              </div>
            )}
          </div>
        </nav>
        <ul className={`flex justify-center border-t border-gray-700 py-2 ${theme === 'light' ? 'text-white' : 'text-gray-900'}`}>
          <li className="mr-12">
            <Link className={`hover:${theme === 'light' ? 'text-gray-300' : 'text-gray-700'}`} to="/">
              Home
            </Link>
          </li>
          <li className="mr-12">
            <Link className={`hover:${theme === 'light' ? 'text-gray-300' : 'text-gray-700'}`} to="/MarsRoverPhotos">
              Mars Rover
            </Link>
          </li>
          {/* <li className="mr-12">
            <Link className={`hover:${theme === 'light' ? 'text-gray-300' : 'text-gray-700'}`} to="/EarthImagery">Earth Imagery</Link>
          </li> */}
          <li>
            <Link className={`hover:${theme === 'light' ? 'text-gray-300' : 'text-gray-700'}`} to="/about">
              About
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
