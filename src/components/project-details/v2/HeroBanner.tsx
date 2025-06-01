/* eslint-disable @next/next/no-img-element */
'use client';
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-fade'; // Just include this CSS — Swiper handles the fade logic

interface GallerySliderProps {
	data: {
		images: string[];
	} | null;
}

const HeroSlider = ({ data }: GallerySliderProps) => {
	const swiperRef = useRef<SwiperCore | null>(null);
	const [isBeginning, setIsBeginning] = useState(true);
	const [isEnd, setIsEnd] = useState(false);

	// Register autoplay module
	SwiperCore.use([Autoplay]);

	if (!data?.images?.length) {
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
				{data.images.map((image, index) => (
					<SwiperSlide key={index}>
						<div className='w-full h-[30vh] lg:h-[80vh]'>
							<img
								src={image}
								alt={`Slide ${index + 1}`}
								// className='h-full w-full object-cover rounded-[12px]'
								className='h-full w-full object-cover'
								onError={() => console.error(`Failed to load image: ${image}`)}
							/>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default HeroSlider;
