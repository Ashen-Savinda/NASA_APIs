import React from 'react';

const PhotoCard = ({ photo }) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg bg-gray-900">
      <img src={photo.img_src} alt={photo.camera.full_name} className="object-cover w-full h-full" />
      <div className="absolute bottom-0 left-0 right-0 bg-gray-900 bg-opacity-75">
        <div className="px-4 py-3">
          <p className="mt-1 text-sm font-semibold text-white">{photo.camera.full_name}</p>
        </div>
      </div>
    </div>
  );
};

export default PhotoCard;
