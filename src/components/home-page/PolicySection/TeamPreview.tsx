'use client';
import React from 'react';
import { useGetAllQuery } from '@/store/services/commonApi';
import Column from '../Column';
import Flex from '../Flex';
import Container from '../Container';

const TeamPreview = () => {
	const { data } = useGetAllQuery({
		path: 'banners',
		filters: {
			show: true,
			bannerPosition: 'body',
			bannerType: 'image',
		},
	});
	const allImages = data?.doc?.flatMap((item: any) => item?.images || []) || [];
	// latest
	// Double the images for seamless looping
	const repeatedImages = [...allImages, ...allImages];

	//
	return (
		// <Container>
		<Column className='relative rounded-card z-4 overflow-hidden gap-[2px] py-[24px] pt-[24px]'>
			{/* Reverse Marquee */}

			<Flex className='rounded-card z-4 overflow-hidden h-[200px] lg:h-[400px]'>
				<div
					className='animate-marquee-mobile md:animate-marquee-desktop flex items-center gap-x-[2px] whitespace-nowrap'
					style={{
						width: `${allImages?.length * 1000}px`,
						willChange: 'transform',
					}}>
					{repeatedImages?.map((image: any, index: number) => (
						<div
							key={index}
							className='bg-[#0d0d0d] w-[300px] lg:w-[600px] h-full rounded-card overflow-hidden'>
							<img
								src={image}
								alt={`image-${index}`}
								className='z-2 w-full h-full object-cover rounded-card'
							/>
						</div>
					))}
				</div>
			</Flex>

			{/* Forward Marquee */}
			<Flex className='rounded-card z-4 overflow-hidden h-[200px] lg:h-[400px]'>
				<div
					className='animate-marquee-mobile-reverse md:animate-marquee-desktop-reverse flex items-center gap-x-[2px] whitespace-nowrap'
					style={{
						width: `${allImages?.length * 1000}px`,
						willChange: 'transform',
					}}>
					{repeatedImages?.map((image: any, index: number) => (
						<div
							key={index}
							className='bg-[#0d0d0d] w-[300px] lg:w-[600px] h-full rounded-card overflow-hidden'>
							<img
								src={image}
								alt={`image-${index}`}
								className='z-2 w-full h-full object-cover rounded-card'
							/>
						</div>
					))}
				</div>
			</Flex>
		</Column>
		// </Container>
	);
};

export default TeamPreview;
