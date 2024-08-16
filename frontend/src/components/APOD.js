import React, { useEffect, useState } from 'react';
import { useTheme } from '../context/ThemeContext'; 
import SpaceBG from './SpaceBG.jpg';
import LoadingSpinner from './LoadingSpinner';

const api_key = process.env.REACT_APP_NASA_KEY;

export default function NasaPhoto() {
  const { theme } = useTheme(); 
  const [photoData, setPhotoData] = useState(null);

  useEffect(() => {
    fetchPhoto();
  
    async function fetchPhoto() {
      try {
        const response = await fetch(
          `https://api.nasa.gov/planetary/apod?api_key=${api_key}`
        );
        const data = await response.json();
        console.log('Fetched data:', data); 
        setPhotoData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  }, []);
  
  if (!photoData) {
    return (
      <div 
        data-testid="loading-state" 
        className={`transition-all duration-300 bg-${theme === 'dark' ? 'gray-400' : 'gray-800'} text-${theme === 'dark' ? 'gray-800' : 'white'} min-h-screen flex items-center justify-center`}
      >
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div
      className={`relative min-h-screen flex flex-col items-center bg-${theme === 'dark' ? 'gray-400' : 'gray-800'} py-4`}
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

      <div className="relative z-10">
        <h1
          data-testid="page-title"
          className={`transition-colors duration-300 text-3xl text-center font-bold text-${theme === 'dark' ? 'gray-300' : 'white'} mb-12 mt-5`}
        >
          Astronomy Picture of the Day
        </h1>

        <div
          className={`relative transition-all mb-12 duration-300 max-w-3xl bg-${theme === 'dark' ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.3)'} shadow-2xl rounded-3xl overflow-hidden transform hover:scale-105 hover:shadow-3xl backdrop-filter backdrop-blur-lg border ${theme === 'dark' ? 'border-gray-300' : 'border-gray-700'}`}
          style={{ marginTop: '20px' }}
        >
          <div className="relative group">
            
            <div className="w-full ">
              {photoData && (
                photoData.media_type === "image" ? (
                  <img 
                    src={photoData.url} 
                    alt={photoData.title} 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <iframe
                    title={photoData.title}
                    src={photoData.url}
                    className="w-full h-full"
                    style={{ border: 'none' }}
                    gesture="media"
                    allow="encrypted-media"
                    allowFullScreen
                  />
                )
              )}
            </div>

            
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gray-800 bg-opacity-80 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300 p-6">
              <div className="w-full">
                <h1
                  data-testid="photo-title"
                  className={`transition-colors duration-300 text-2xl font-bold text-${theme === 'dark' ? 'gray-200' : 'white'} mb-4`}
                >
                  {photoData?.title}
                </h1>
                <p
                  className={`transition-colors duration-300 text-${theme === 'dark' ? 'gray-600' : 'gray-600'} mb-2`}
                >
                  <b>{photoData.date}</b>
                </p>
                <p
                  className={`transition-colors duration-300 text-${theme === 'dark' ? 'gray-300' : 'white'} leading-relaxed`}
                >
                  {photoData.explanation}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
