/* eslint-disable @next/next/no-img-element */
'use client';
import React, { FC, useState } from 'react';
import RootLayout from '../layout/RootLayout/RootLayout';
import { useGetByIdQuery } from '@/store/services/commonApi';
import { Card } from '../ui/card';
import { Carousel } from '../ui/carousel/carouselMain';
import { CarouselContent } from '../ui/carousel/CarouselContent';
import { CarouselItem } from '../ui/carousel/CarouselItem';
import { CarouselPrevious } from '../ui/carousel/CarouselPrevious';
import { CarouselNext } from '../ui/carousel/CarouselNext';
import { TabConentThreeV2 } from '../project-details/details-section/tab-contents';
import MachineryLightboxGallery from './MachineryLightboxGallery';

const fallbackImage = '/ruppur.jpeg';

const isValidUrl = (url: string) => {
	try {
		new URL(url);
		return true;
	} catch {
		return false;
	}
};

type MachinaryIdPageComponentProps = {
	id: any;
};

const MachinaryIdPageComponent = ({ data }: any) => {
	const [currentIndex, setCurrentIndex] = useState(0);

	// const { data } = useGetByIdQuery({
	// 	path: 'machineries',
	// 	id: id,
	// });
	// console.log('id data:', data);

	const goToPrevious = () => {
		if (data?.mediaImages?.length) {
			setCurrentIndex(prevIndex =>
				prevIndex === 0 ? data.mediaImages.length - 1 : prevIndex - 1
			);
		}
	};

	const goToNext = () => {
		if (data?.mediaImages?.length) {
			setCurrentIndex(prevIndex =>
				prevIndex === data.mediaImages.length - 1 ? 0 : prevIndex + 1
			);
		}
	};

	const goToSlide = (index: number) => {
		setCurrentIndex(index);
	};

	return (
		<RootLayout>
			<div>
				<Card className=' border-gray-100 overflow-hidden rounded-[12px]'>
					<Carousel className='w-full'>
						<CarouselContent>
							{data?.mediaImages?.map((image: any, index: number) => (
								<CarouselItem
									key={index}
									className={index === currentIndex ? 'block' : 'hidden'}
								>
									<div className='h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px] w-full overflow-hidden'>
										<img
											src={isValidUrl(image) ? image : fallbackImage}
											alt={`carousel-item-${index}`}
											className='w-full h-full object-cover object-center'
											loading='lazy'
											onError={e => {
												if (
													e.currentTarget.src !==
													window.location.origin + fallbackImage
												) {
													e.currentTarget.src = fallbackImage;
												}
											}}
										/>
									</div>
								</CarouselItem>
							))}
						</CarouselContent>
						<div className='flex justify-between items-center p-4'>
							{/* Thumbnail Images */}
							<div className='flex gap-2 flex-1 overflow-x-auto'>
								{data?.mediaImages?.map((image: any, index: number) => (
									<button
										key={index}
										onClick={() => goToSlide(index)}
										className={`flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 overflow-hidden rounded-lg border-2 transition-all duration-200 ${
											index === currentIndex
												? 'border-blue-500 ring-2 ring-blue-200'
												: 'border-gray-200 hover:border-gray-300'
										}`}
									>
										<img
											src={isValidUrl(image) ? image : fallbackImage}
											alt={`thumbnail-${index}`}
											className='w-full h-full object-cover object-center'
											onError={e => {
												if (
													e.currentTarget.src !==
													window.location.origin + fallbackImage
												) {
													e.currentTarget.src = fallbackImage;
												}
											}}
										/>
									</button>
								))}
							</div>
							{/* Navigation Buttons */}
							<div className='flex gap-2 ml-4'>
								<button
									onClick={goToPrevious}
									className='bg-white border border-gray-300 rounded-full p-2 hover:bg-gray-50 transition-colors h-8 w-8 flex items-center justify-center'
								>
									<svg
										width='16'
										height='16'
										viewBox='0 0 24 24'
										fill='none'
										stroke='currentColor'
										strokeWidth='2'
									>
										<polyline points='15,18 9,12 15,6'></polyline>
									</svg>
								</button>
								<button
									onClick={goToNext}
									className='bg-white border border-gray-300 rounded-full p-2 hover:bg-gray-50 transition-colors h-8 w-8 flex items-center justify-center'
								>
									<svg
										width='16'
										height='16'
										viewBox='0 0 24 24'
										fill='none'
										stroke='currentColor'
										strokeWidth='2'
									>
										<polyline points='9,18 15,12 9,6'></polyline>
									</svg>
								</button>
							</div>
						</div>
					</Carousel>
				</Card>
				<div className='container mx-auto px-4'>
					<div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
						{/* info */}
						<div className=''>
							<h3 className='font-primary text-[16px] lg:text-[20px] uppercase font-semibold text-gray-800 mb-4 mt-6'>
								{data?.name}
							</h3>
							<h4 className='text-lg font-primary font-semibold text-gray-800 mb-2'>
								Specifications:
							</h4>
							<ul className='list-disc list-inside space-y-1 text-gray-700'>
								{data?.specification?.map((spec: any, index: number) => (
									<li key={index}>{spec}</li>
								))}
							</ul>
						</div>

						{/* gallery */}
						<div className='col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-4'>
							<MachineryLightboxGallery data={data} />
							{/* <div className='grid grid-cols-1 lg:grid-cols-2 gap-2'>
								{data?.mediaImages?.map((image: any, index: number) => (
									<div
										key={index}
										className='h-[400px] lg:h-[500px]  w-full overflow-hidden'
									>
										<img
											src={isValidUrl(image) ? image : fallbackImage}
											alt={''}
											className='w-full h-full object-cover object-center'
										/>
									</div>
								))}
							</div> */}
						</div>
					</div>
				</div>
			</div>
		</RootLayout>
	);
};

export default MachinaryIdPageComponent;
