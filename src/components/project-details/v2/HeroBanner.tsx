/* eslint-disable @next/next/no-img-element */
'use client';
import React, { useRef, useState, useMemo, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-fade'; // Just include this CSS — Swiper handles the fade logic
import { useGetByIdQuery } from '@/store/services/commonApi';

interface GallerySliderProps {
	data?: {
		images: string[];
	} | null;
	image: string;
	id: string;
}

const HeroSlider = ({ data, image, id }: GallerySliderProps) => {
	const swiperRef = useRef<SwiperCore | null>(null);
	const [isBeginning, setIsBeginning] = useState(true);
	const [isEnd, setIsEnd] = useState(false);

	const { data: galleryData, isFetching } = useGetByIdQuery({
		path: 'project-galleries',
		id: id,
	});

	// Create images array with initial image first, then gallery images when available
	const allImages = useMemo(() => {
		const images = [image]; // Start with the initial image
		
		// Add gallery images when query completes
		if (galleryData?.images && Array.isArray(galleryData.images)) {
			// Filter out duplicates and add unique gallery images
			const uniqueGalleryImages = galleryData.images.filter(
				(galleryImg: string) => galleryImg !== image
			);
			images.push(...uniqueGalleryImages);
		}
		
		return images;
	}, [image, galleryData?.images]);

	// Update swiper when new images are loaded
	useEffect(() => {
		if (swiperRef.current && !isFetching && galleryData?.images) {
			// Update swiper slides when gallery images are loaded
			swiperRef.current.update();
		}
	}, [galleryData?.images, isFetching]);

	// Register autoplay module
	SwiperCore.use([Autoplay]);

	// Always show at least the initial image
	if (!image) {
		return <div>No images available</div>;
	}

	return (
		// <div className='relative w-full'>
		<div className='relative w-full overflow-hidden'>
			<Swiper
				effect='fade'
				fadeEffect={{ crossFade: true }}
				slidesPerView={1}
				spaceBetween={0}
				autoplay={{
					delay: 6000,
					disableOnInteraction: false,
				}}
				onSwiper={swiper => {
					swiperRef.current = swiper;
					setIsBeginning(swiper.isBeginning);
					setIsEnd(swiper.isEnd);
				}}
				onSlideChange={swiper => {
					setIsBeginning(swiper.isBeginning);
					setIsEnd(swiper.isEnd);
				}}
				onInit={swiper => {
					setIsBeginning(swiper.isBeginning);
					setIsEnd(swiper.isEnd);
				}}>
				{allImages?.map((imageUrl, index) => (
					<SwiperSlide key={`${imageUrl}-${index}`}>
						<div className='w-full h-[30vh] lg:h-[80vh]'>
							<img
								src={imageUrl}
								alt={`Slide ${index + 1}`}
								className='h-full w-full object-cover'
								onError={() => console.error(`Failed to load image: ${imageUrl}`)}
							/>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default HeroSlider;
