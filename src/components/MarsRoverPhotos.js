import React, { useEffect, useState } from "react";
import PhotoCard from "./PhotoCard";

const api_key = process.env.REACT_APP_NASA_KEY;

export default function MarsRoverPhotos() {
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
    return <div className="bg-gray-800 text-white min-h-screen"></div>;
  }

  return (
    <div className="bg-gray-800 text-white min-h-screen">
          <header className="p-4">
              <h1 className="text-3xl font-bold">Curiosity Rover Photos</h1>

          </header>
          <main className="container mx-auto py-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                  {photoData.map((photo) => (
                      <PhotoCard key={photo.id} photo={photo} />
                  ))}
              </div>
          </main>
      </div>
      
  );
}
