import React, { useEffect, useState } from "react";
import PhotoCard from "./PhotoCard";
import { useTheme } from '../context/ThemeContext'; 
import SpaceBG from './SpaceBG.jpg';
import LoadingSpinner from './LoadingSpinner';

const api_key = process.env.REACT_APP_NASA_KEY;

export default function MarsRoverPhotos() {
  const { theme } = useTheme(); 
  const [photoData, setPhotoData] = useState(null);

  useEffect(() => {
    fetchPhoto();

    async function fetchPhoto() {
      const response = await fetch(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=1&api_key=${api_key}`
      );
      const data = await response.json();
      console.log("photos", data);
      setPhotoData(data.photos);
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

      <div className="relative z-10 w-full">
        <header className="p-4">
          <h1 className={`transition-colors text-center duration-300 text-3xl font-bold text-${theme === 'dark' ? 'gray-300' : 'white'} mb-4 mt-5`}>
            Curiosity Rover Photos
          </h1>
        </header>
        <main className="container mx-auto py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {photoData.map((photo) => (
              <PhotoCard key={photo.id} photo={photo} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
