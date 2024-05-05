import React from 'react';

const PhotoCard = ({ photo }) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg bg-gray-900">
      <img src={photo.image} alt={photo.image}  className="object-cover w-full h-full" />
      <div className="absolute bottom-0 left-0 right-0 bg-gray-900 bg-opacity-75">
        
      </div>
    </div>
  );
};

export default PhotoCard;