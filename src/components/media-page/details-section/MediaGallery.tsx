import React from 'react';

const MediaGallery = ({ data: news }: any) => {
  return (
    <div className="container max-w-7xl mx-auto px-5 my-16">
      <h1 className="font-primary  text-2xl font-bold">Gallery Image</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5 w-full">
        {news?.newsGallery?.map((image: string, index: number) => (
          <img
            key={index}
            src={image}
            alt={`News gallery image ${index + 1}`} 
            className="rounded-card h-52 w-full object-cover hover:scale-105 transition-transform duration-300"
          />
        ))}
      </div>
    </div>
  );
};

export default MediaGallery;