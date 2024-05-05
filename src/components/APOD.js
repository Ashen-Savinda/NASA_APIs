import React, { useEffect, useState } from "react";
const api_key = process.env.REACT_APP_NASA_KEY;
console.log("key", process.env.REACT_APP_NASA_KEY);

export default function NasaPhoto() {
  const [photoData, setPhotoData] = useState(null);

  useEffect(() => {
    fetchPhoto();

    async function fetchPhoto() {
      const response = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${api_key}`
      );
      const data = await response.json();
      console.log(data);
      setPhotoData(data);
    }
  }, []);

  if (!photoData) {
    return <div className="bg-gray-800 text-white min-h-screen"></div>;
  }

  return (
    <><h1 className="bg-gray-800 text-white text-3xl font-bold py-4">Astronomy Picture of the Day.</h1>
    <div className="min-h-screen flex justify-center items-center bg-gray-800 py-4">
      <div className=" max-w-3xl bg-gray-400 shadow-lg rounded-lg overflow-hidden">
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
          <h1 className="text-xl font-bold">{photoData.title}</h1>
          <p className="text-gray-600"><b>{photoData.date}</b></p>
          <p className="text-gray-800">{photoData.explanation}</p>
        </div>
      </div>
    </div></>
  );
}
