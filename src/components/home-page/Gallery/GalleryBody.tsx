'use client';
import React, { useState, useRef, useEffect } from 'react';
import { useGetAllQuery } from '@/store/services/commonApi';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const GalleryBody = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const containerRef = useRef(null);

  const { data, isLoading } = useGetAllQuery({
    path: 'banners',
    filters: {
      show: true,
      bannerPosition: 'body',
      bannerType: 'image',
    },
  });

  const allImages = data?.doc?.flatMap((item: any) => item?.images || []) || [];

  const handleImageChange = (index: number) => {
    setCurrentImage(index);
    setTranslateX(0);
  };

  const getPrevIndex = () => {
    return currentImage === 0 ? allImages.length - 1 : currentImage - 1;
  };

  const getNextIndex = () => {
    return currentImage === allImages.length - 1 ? 0 : currentImage + 1;
  };

  const goToPrevious = () => {
    handleImageChange(getPrevIndex());
  };

  const goToNext = () => {
    handleImageChange(getNextIndex());
  };

  // Touch/Mouse drag handlers
  const handleDragStart = (clientX: number) => {
    setIsDragging(true);
    setStartX(clientX);
    setTranslateX(0);
  };

  const handleDragMove = (clientX: number) => {
    if (!isDragging) return;
    
    const diff = clientX - startX;
    setTranslateX(diff);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    
    const threshold = 100; // minimum distance to trigger slide change
    
    if (Math.abs(translateX) > threshold) {
      if (translateX > 0) {
        goToPrevious();
      } else {
        goToNext();
      }
    }
    
    setIsDragging(false);
    setStartX(0);
    setTranslateX(0);
  };

  // Mouse events
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    handleDragStart(e.clientX);
  };

  const handleMouseMove = (e: MouseEvent) => {
    handleDragMove(e.clientX);
  };

  const handleMouseUp = () => {
    handleDragEnd();
  };

  // Touch events
  const handleTouchStart = (e: React.TouchEvent) => {
    handleDragStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleDragMove(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    handleDragEnd();
  };

  // Add global mouse event listeners
  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, startX]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (allImages.length <= 1) return;
      
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        goToPrevious();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        goToNext();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [currentImage, allImages.length]);

  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto pt-8 px-4">
        <div className="w-full max-w-4xl mx-auto p-6">
          <div className="relative overflow-hidden rounded-lg shadow-lg bg-gray-200 animate-pulse">
            <div className="h-96 w-full bg-gray-300"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!allImages || allImages.length === 0) {
    return (
      <div className="max-w-7xl mx-auto pt-8 px-4">
        <div className="w-full max-w-4xl mx-auto p-6">
          <div className="text-center text-gray-500">
            No images available
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="px-4 w-full">
      <div className="relative overflow-hidden shadow-lg rounded-lg">
        {/* Image Container */}
        <div 
          ref={containerRef}
          className="relative h-[600px] w-full cursor-grab active:cursor-grabbing select-none"
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          style={{
            transform: isDragging ? `translateX(${translateX}px)` : 'translateX(0)',
            transition: isDragging ? 'none' : 'transform 0.3s ease-out'
          }}
        >
          {allImages.map((image: any, index: number) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                index === currentImage ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={image?.url || image}
                alt={image?.alt || `Gallery image ${index + 1}`}
                className="w-full h-full object-cover pointer-events-none"
                loading={index === 0 ? 'eager' : 'lazy'}
                draggable={false}
              />
            </div>
          ))}
        </div>

        {/* Navigation Arrows - Only show if more than 1 image */}
       {allImages.length > 1 && (
          <>
            {/* Previous Button - Bottom Left Corner */}
            <button
              onClick={goToPrevious}
              className="absolute right-12 bottom-2 bg-gray-500 bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 z-10 group"
              aria-label="Previous image"
            >
              <ChevronLeft size={20} className="group-hover:scale-110 transition-transform" />
            </button>

            {/* Next Button - Bottom Right Corner */}
            <button
              onClick={goToNext}
              className="absolute right-2 bottom-2 bg-gray-500 bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 z-10 group"
              aria-label="Next image"
            >
              <ChevronRight size={20} className="group-hover:scale-110 transition-transform" />
            </button>
          </>
        )}
        {/* Dot Navigation - Only show if more than 1 image */}
        {/* {allImages.length > 1 && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10">
            <div className="flex space-x-3">
              {allImages.map((_: any, index: number) => (
                <button
                  key={index}
                  onClick={() => handleImageChange(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 ${
                    index === currentImage
                      ? 'bg-blueBgNew shadow-lg scale-110'
                      : 'bg-blueBgNew bg-opacity-50 hover:bg-opacity-80'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        )} */}

        {/* Drag Indicator */}
        {isDragging && (
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-gray-500 bg-opacity-70 text-white px-4 py-2 rounded-full text-sm z-10 backdrop-blur-sm">
            {translateX > 100 ? '← Previous' : translateX < -100 ? 'Next →' : 'Drag to navigate'}
          </div>
        )}
      </div>

      {/* Image Counter - Only show if more than 1 image */}
      {allImages.length > 1 && (
        <div className="text-center mt-4">
          <span className="text-gray-600 text-sm">
            {currentImage + 1} / {allImages.length}
          </span>
        </div>
      )}
    </section>
  );
};

export default GalleryBody;


// 'use client';
// import React, { useState } from 'react';
// import { useGetAllQuery } from '@/store/services/commonApi';

// const GalleryBody = () => {
//   const [currentImage, setCurrentImage] = useState(0);

//   const { data, isLoading } = useGetAllQuery({
//     path: 'banners',
//     filters: {
//       show: true,
//       bannerPosition: 'body',
//       bannerType: 'image',
//     },
//   });

//   const allImages = data?.doc?.flatMap((item: any) => item?.images || []) || [];

//   const handleImageChange = (index: number) => {
//     setCurrentImage(index);
//   };

//   const getPrevIndex = () => {
//   return currentImage === 0 ? allImages.length - 1 : currentImage - 1;
// };

// const getNextIndex = () => {
//   return currentImage === allImages.length - 1 ? 0 : currentImage + 1;
// };

//   // if (isLoading) {
//   //   return (
//   //     <div className="max-w-7xl mx-auto pt-8 px-4">
//   //       <div className="w-full max-w-4xl mx-auto p-6">
//   //         <div className="relative overflow-hidden rounded-lg shadow-lg bg-gray-200 animate-pulse">
//   //           <div className="h-96 w-full bg-gray-300"></div>
//   //         </div>
//   //       </div>
//   //     </div>
//   //   );
//   // }

//   // if (!allImages || allImages.length === 0) {
//   //   return (
//   //     <div className="max-w-7xl mx-auto pt-8 px-4">
//   //       <div className="w-full max-w-4xl mx-auto p-6">
//   //         <div className="text-center text-gray-500">
//   //           No images available
//   //         </div>
//   //       </div>
//   //     </div>
//   //   );
//   // }

//   return (
//       <section className="px-4 w-full">
//         <div className="relative overflow-hidden shadow-lg">
//           {/* Image Container */}
//           <div className="relative h-[600px] w-full">
//             {allImages.map((image: any, index: number) => (
//               <div
//                 key={index}
//                 className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
//                   index === currentImage ? 'opacity-100' : 'opacity-0'
//                 }`}
//               >
//                 <img
//                   src={image?.url || image}
//                   alt={image?.alt || `Gallery image ${index + 1}`}
//                   className="w-full h-full object-cover"
//                   loading={index === 0 ? 'eager' : 'lazy'}
//                 />
//               </div>
//             ))}
//           </div>

//           {allImages.length > 1 && (
//             <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
//               <div className="flex space-x-3">
//                 {allImages.map((_: any, index: number) => (
//                   <button
//                     key={index}
//                     onClick={() => handleImageChange(index)}
//                     className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 ${
//                       index === currentImage
//                         ? 'bg-blueBgNew shadow-lg scale-110'
//                         : 'bg-blueBgNew bg-opacity-50 hover:bg-opacity-80'
//                     }`}
//                     aria-label={`Go to slide ${index + 1}`}
//                   />
//                 ))}
//               </div>
//             </div>
//           )}
//         </div>

//         {/* Optional: Image Counter - Only show if more than 1 image */}
//         {allImages.length > 1 && (
//           <div className="text-center mt-4">
//             <span className="text-gray-600 text-sm">
//               {currentImage + 1} / {allImages.length}
//             </span>
//           </div>
//         )}

//           {/* Bullet Navigation - Only show if more than 1 image */}
//           {/* {allImages.length > 1 && (
//             <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
//               <div className="flex space-x-3">
//                 <button
//                   onClick={() => handleImageChange(getPrevIndex())}
//                   className="w-3 h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 bg-blueBgNew bg-opacity-50 hover:bg-opacity-80"
//                   aria-label="Previous image"
//                 />
                
//                 <button
//                   onClick={() => handleImageChange(currentImage === getPrevIndex() ? getNextIndex() : getPrevIndex())}
//                   className="w-3 h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 bg-blueBgNew shadow-lg scale-110"
//                   aria-label="Current image"
//                 />
                
//                 <button
//                   onClick={() => handleImageChange(getNextIndex())}
//                   className="w-3 h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 bg-blueBgNew bg-opacity-50 hover:bg-opacity-80"
//                   aria-label="Next image"
//                 />
//               </div>
//             </div>
//           )} */}
//         {/* </div> */}
//       </section>
//   );
// };

// export default GalleryBody;