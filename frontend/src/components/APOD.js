// NasaPhoto.js

import React, { useEffect, useState } from 'react';
import { useTheme } from '../context/ThemeContext'; 

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
        console.log('Fetched data:', data); // Add this line to check fetched data
        setPhotoData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  }, []);
  
  

  if (!photoData) {
    return <div data-testid="loading-state" className={`bg-${theme === 'dark' ? 'gray-400' : 'gray-800'} text-${theme === 'dark' ? 'gray-800' : 'white'} min-h-screen`}></div>;
  }

  return (
    <div>
      <h1 data-testid="photo-title" className={`bg-${theme === 'dark' ? 'gray-400' : 'gray-800'} text-${theme === 'dark' ? 'gray-800' : 'white'} text-3xl font-bold p-4`}>Astronomy Picture of the Day.</h1>
      <div className={`min-h-screen flex justify-center items-center bg-${theme === 'dark' ? 'gray-400' : 'gray-800'} py-4`}>
        <div className={`max-w-3xl bg-${theme === 'dark' ? 'gray-100' : 'gray-700'} shadow-lg rounded-lg overflow-hidden`}>
          <div className="relative">
            {photoData && (
              photoData.media_type === "image" ? (
                <img src={photoData.url} alt={photoData.title} className="w-full h-full object-cover" />
              ) : (
                <iframe
                  title={photoData.title}
                  src={photoData.url}
                  className="w-full h-64"
                  style={{ border: 'none' }}
                  gesture="media"
                  allow="encrypted-media"
                  allowFullScreen />
              )
            )}
          </div>

          <div className="p-4">
          <h1 data-testid="photo-title" className={`text-xl font-bold text-${theme === 'dark' ? 'gray-800' : 'white'}`}>{photoData?.title}</h1>
            <p className={`text-${theme === 'dark' ? 'gray-600' : 'gray-300'}`}><b>{photoData.date}</b></p>
            <p className={`text-${theme === 'dark' ? 'gray-800' : 'white'}`}>{photoData.explanation}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
