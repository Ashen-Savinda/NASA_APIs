import React from 'react';
import { useTheme } from '../context/ThemeContext'; 
import SpaceBG from './SpaceBG.jpg'; 

export default function About() {
  const { theme } = useTheme(); 

  return (
    <div
      className={`relative w-screen h-screen flex flex-col items-center p-4`}
      style={{
        fontFamily: 'Orbitron, sans-serif',
        backgroundImage: `url(${SpaceBG})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div
        className={`absolute inset-0 transition-all duration-300 ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-800'} ${theme === 'dark' ? 'opacity-50' : 'opacity-60'}`}
        style={{ zIndex: 1 }}
      ></div>

      <div className="relative z-10 w-full max-w-3xl">
        <h1 className={`text-3xl font-bold mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-white'}`}>
          About
        </h1>
        
        <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-200'}`}>
          Welcome to my NASA API-based application! This project was developed as part of an assignment for the BSc (Hons) in Information Technology program, specialized in Software Engineering at SLIIT.
        </p>
        
        <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-200'}`}>
          My goal with this application is to showcase my skills in front-end development, API integration, and application deployment. I have utilized NASA's public APIs to bring you fascinating astronomy-related data right to your fingertips.
        </p>
        
        <ul className={`list-disc pl-4 mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-200'}`}>
          <li>CSS Framework: Tailwind CSS</li>
          <li>Hosting: Netlify</li>
        </ul>
        
        <h2 className={`text-2xl font-bold mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-white'}`}>
          Features
        </h2>
        
        <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-200'}`}>
          My application allows users to view daily or historical astronomy-related data retrieved from NASA's APIs. Additionally, I offer user authentication.
        </p>
        
        <h2 className={`text-2xl font-bold mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-white'}`}>
          Testing
        </h2>
        
        <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-200'}`}>
          To ensure the quality and reliability of our application, I have conducted comprehensive unit tests using Jest. I have also made sure that the application is responsive and compatible with various devices and screen sizes.
        </p>
        
        <h2 className={`text-2xl font-bold mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-white'}`}>
          Documentation
        </h2>
        
        <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-200'}`}>
          For detailed information on how to set up, build, and use our application, please refer to the README file available in my GitHub repository.
        </p>
        
        <h2 className={`text-2xl font-bold mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-white'}`}>
          Contact Us
        </h2>
        
        <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-200'}`}>
          If you have any questions, feedback, or suggestions, feel free to reach out to me via email at ashensavindagunasekara@gmail.com.
        </p>
      </div>
    </div>
  );
}
