import React from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout"

export default function NavBar() {

  const { logout } = useLogout()
  const { user } = useAuthContext();

  const handleClick = () => {
    logout()
}

  return (
    <div className="bg-gray-900 font-bold">
      <div className="container mx-auto px-4">
        <nav className="flex justify-between items-center py-4">
          <h1 className="text-3xl font-bold text-white"><a href="/" className="hover:text-gray-300">NasaAPI</a></h1>
          {user ? <button onClick={handleClick} className="text-gray-300 hover:text-gray-100" href="/login">Log Out</button> : <div>
            <a className="text-gray-300 hover:text-gray-100 mr-6" href="/login">Log In</a>
            <a className="text-gray-300 hover:text-gray-100" href="/signup">Sign Up</a>
          </div>}
        </nav>
        <ul className="flex justify-center border-t border-gray-700 py-2">
          <li className="mr-12">
            <Link className="text-gray-300 hover:text-gray-100" to="/">Home</Link>
          </li>
          <li className="mr-12">
            <Link className="text-gray-300 hover:text-gray-100" to="/MarsRoverPhotos">Mars Rover</Link>
          </li>
          {/* <li className="mr-12">
            <Link className="text-gray-300 hover:text-gray-100" to="/EarthImagery">Earth Imagery</Link>
          </li> */}
          <li>
            <Link className="text-gray-300 hover:text-gray-100" to="/about">About</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
