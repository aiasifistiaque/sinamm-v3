'use client';

import React, { useEffect, useState, useRef } from 'react';

const AutoCarousel = ({ images }: { images: string[] }) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const intervalRef = useRef<NodeJS.Timeout | null>(null);

	useEffect(() => {
		startAutoSlide();
		return stopAutoSlide;
	}, []);

	const startAutoSlide = () => {
		stopAutoSlide();
		intervalRef.current = setInterval(() => {
			setCurrentIndex(prev => (prev + 1) % images.length);
		}, 5000); // Change image every 5 seconds
	};

	const stopAutoSlide = () => {
		if (intervalRef.current) {
			clearInterval(intervalRef.current);
		}
	};

	return (
		<div className='relative w-full h-screen overflow-hidden'>
			{images.map((image, index) => (
				<div
					key={index}
					className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
						index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
					}`}
				>
					<img
						src={image}
						alt={`Slide ${index + 1}`}
						className='w-full h-full object-cover'
					/>
					{/* Optional: overlays */}
					<div className='absolute inset-0 z-20 bg-gradient-to-r from-black/60 to-transparent' />
					<div className='absolute inset-0 z-20 bg-gradient-to-b from-black/50 to-transparent' />
				</div>
			))}
		</div>
	);
};

export default AutoCarousel;
