import React, { useEffect, useState } from "react";
import PhotoCard from "./Photo";
const api_key = process.env.REACT_APP_NASA_KEY;
console.log("key", process.env.REACT_APP_NASA_KEY);

export default function NasaPhoto() {
  const [photoData, setPhotoData] = useState(null);

  useEffect(() => {
    fetchPhoto();

    async function fetchPhoto() {
      const response = await fetch(
        `https://api.nasa.gov/EPIC/archive/natural/2019/05/30/png/epic_1b_20190530011359.png?api_key=${api_key}`
      );
      const data = await response.json();
      console.log("RES",data);
      setPhotoData(data);
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
                      <PhotoCard key={photo.identifier} photo={photo} />
                  ))}
              </div>
          </main>
      </div>
  );
}
