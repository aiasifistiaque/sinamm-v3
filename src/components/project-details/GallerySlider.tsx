// 'use client';
// import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
// import React, { useRef, useState } from 'react';
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import SwiperCore from 'swiper';

// const GallerySlider = ({ data }: any) => {
// 	const swiperRef = useRef<SwiperCore>(null);
// 	const [isBeginning, setIsBeginning] = useState(true);
// 	const [isEnd, setIsEnd] = useState(false);
// 	const CustomPrevArrow = ({
// 		onClick,
// 		disabled,
// 	}: {
// 		onClick: () => void;
// 		disabled?: boolean;
// 	}) => (
// 		<div
// 			className={`flex items-center justify-center bg-white w-[2.4rem] md:w-[3rem] h-[2.4rem] md:h-[3rem] rounded-full cursor-pointer absolute top-1/2 -translate-y-1/2 left-4 lg:left-8 z-10 ${
// 				disabled ? 'opacity-50 pointer-events-none' : ''
// 			}`}
// 			onClick={onClick}
// 		>
// 			<IoIosArrowBack color='#004ab3' size={15} />
// 		</div>
// 	);

// 	const CustomNextArrow = ({
// 		onClick,
// 		disabled,
// 	}: {
// 		onClick: () => void;
// 		disabled?: boolean;
// 	}) => (
// 		<div
// 			className={`flex items-center justify-center bg-white w-[2.4rem] md:w-[3rem] h-[2.4rem] md:h-[3rem] rounded-full cursor-pointer absolute top-1/2 -translate-y-1/2 right-4 lg:right-8 z-10 ${
// 				disabled ? 'opacity-50 pointer-events-none' : ''
// 			}`}
// 			onClick={onClick}
// 		>
// 			<IoIosArrowForward color='#004ab3' size={15} />
// 		</div>
// 	);

// 	return (
// 		<div className=''>
// 			<div className='relative w-full'>
// 				<Swiper
// 					spaceBetween={15}
// 					slidesPerView={2}
// 					modules={[Navigation]}
// 					navigation
// 					// onSwiper={(swiper: any) => {
// 					// 	swiperRef.current = swiper;

// 					// 	// Delay the boundary check to ensure Swiper has mounted and measured slides
// 					// 	setTimeout(() => {
// 					// 		setIsBeginning(swiper.isBeginning);
// 					// 		setIsEnd(swiper.isEnd);
// 					// 	}, 0);
// 					// }}
// 					// onSlideChange={swiper => {
// 					// 	setIsBeginning(swiper.isBeginning);
// 					// 	setIsEnd(swiper.isEnd);
// 					// }}
// 					// style={{ overflow: 'visible' }}
// 					breakpoints={{
// 						768: {
// 							slidesPerView: 2,
// 							spaceBetween: 5,
// 						},

// 						0: {
// 							slidesPerView: 1,
// 							spaceBetween: 5,
// 						},
// 					}}
// 				>
// 					{data?.images?.map((sliderData: any, i: number) => (
// 						<SwiperSlide key={i}>
// 							<div className='h-auto md:h-[455px]'>
// 								<img
// 									src={sliderData}
// 									alt='img'
// 									className='h-full object-cover'
// 								/>
// 							</div>
// 						</SwiperSlide>
// 					))}
// 				</Swiper>
// 				{/* <CustomNextArrow
// 					onClick={() => swiperRef.current?.slideNext()}
// 					disabled={isEnd}
// 				/>
// 				<CustomPrevArrow
// 					onClick={() => swiperRef.current?.slidePrev()}
// 					disabled={isBeginning}
// 				/> */}
// 			</div>
// 		</div>
// 	);
// };

// export default GallerySlider;
'use client';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import React, { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import 'swiper/css';

// Define types for the data prop
interface GallerySliderProps {
	data: {
		images: string[];
	} | null; // Allow null to handle loading/undefined states
}

// Define types for arrow props
interface ArrowProps {
	onClick: () => void;
	disabled?: boolean;
}

const GallerySlider = ({ data }: GallerySliderProps) => {
	const swiperRef = useRef<SwiperCore | null>(null);
	const [isBeginning, setIsBeginning] = useState(true);
	const [isEnd, setIsEnd] = useState(false);

	// Debug data and swiper state
	// useEffect(() => {
	// 	console.log('Data:', data);
	// 	console.log('Images:', data?.images);
	// 	console.log('Swiper instance:', swiperRef.current);
	// 	console.log('isBeginning:', isBeginning, 'isEnd:', isEnd);
	// }, [data, isBeginning, isEnd]);

	// Custom Previous Arrow
	const CustomPrevArrow = ({ onClick, disabled }: ArrowProps) => (
		<div
			className={`flex items-center justify-center bg-[#1c398e] w-[2.4rem] md:w-[3rem] h-[2.4rem] md:h-[3rem] rounded-full cursor-pointer absolute top-1/2 -translate-y-1/2 left-4 lg:left-8 z-10 ${
				disabled ? 'opacity-50 pointer-events-none' : ''
			}`}
			onClick={onClick}
		>
			<IoIosArrowBack color='#fff' size={15} />
		</div>
	);

	// Custom Next Arrow
	const CustomNextArrow = ({ onClick, disabled }: ArrowProps) => (
		<div
			className={`flex items-center justify-center bg-[#1c398e] w-[2.4rem] md:w-[3rem] h-[2.4rem] md:h-[3rem] rounded-full cursor-pointer absolute top-1/2 -translate-y-1/2 right-4 lg:right-8 z-10 ${
				disabled ? 'opacity-50 pointer-events-none' : ''
			}`}
			onClick={onClick}
		>
			<IoIosArrowForward color='#fff' size={15} />
		</div>
	);

	// Handle case where data or images is not available
	if (!data?.images?.length) {
		return <div>No images available</div>;
	}

	return (
		<div className='relative w-full h-full col-span-3'>
			<Swiper
				spaceBetween={15}
				slidesPerView={3}
				onSwiper={swiper => {
					swiperRef.current = swiper;
					// Update boundary states immediately
					setIsBeginning(swiper.isBeginning);
					setIsEnd(swiper.isEnd);
				}}
				onSlideChange={swiper => {
					setIsBeginning(swiper.isBeginning);
					setIsEnd(swiper.isEnd);
				}}
				onInit={swiper => {
					// Ensure boundaries are set after Swiper initializes
					setIsBeginning(swiper.isBeginning);
					setIsEnd(swiper.isEnd);
				}}
				breakpoints={{
					1024: {
						slidesPerView: 3,
						spaceBetween: 15,
					},
					768: {
						slidesPerView: 2,
						spaceBetween: 5,
					},
					0: {
						slidesPerView: 1,
						spaceBetween: 5,
					},
				}}
			>
				{data.images.map((image, index) => (
					<SwiperSlide key={index}>
						<div className='w-full h-full'>
							<img
								src={image}
								alt={`Slide ${index + 1}`}
								className='h-full w-full object-cover rounded-[12px]'
								onError={() => console.error(`Failed to load image: ${image}`)}
							/>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
			<CustomPrevArrow
				onClick={() => swiperRef.current?.slidePrev()}
				disabled={isBeginning}
			/>
			<CustomNextArrow
				onClick={() => swiperRef.current?.slideNext()}
				disabled={isEnd}
			/>
		</div>
	);
};

export default GallerySlider;
