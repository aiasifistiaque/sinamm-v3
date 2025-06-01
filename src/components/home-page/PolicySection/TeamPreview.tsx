'use client';
import React from 'react';
import { useGetAllQuery } from '@/store/services/commonApi';
import Column from '../Column';
import Flex from '../Flex';

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
	
	// Split images into two groups for different marquees
	const midPoint = Math.ceil(allImages.length / 2);
	const firstGroupImages = allImages.slice(0, midPoint);
	const secondGroupImages = allImages.slice(midPoint);

	//
	return (
		// <Container>
		<Column className='relative rounded-card z-4 overflow-hidden gap-[2px] py-[24px] pt-[24px]'>
			{/* Reverse Marquee */}
			<Flex className='rounded-card z-4 overflow-hidden h-[200px] lg:h-[400px]'>
				<div
					className='animate-marquee-mobile md:animate-marquee-desktop-reverse flex items-center gap-x-[2px] whitespace-nowrap'
					style={{
						width: `${firstGroupImages?.length * 1000}px`,
						willChange: 'transform',
					}}>
					{firstGroupImages?.map((image: any, index: number) => (
						<div
							key={`first-${index}`}
							className='bg-[#0d0d0d] w-[300px] lg:w-[600px] h-full rounded-card overflow-hidden'>
							<img
								src={image}
								alt={`first-group-image-${index}`}
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
						width: `${secondGroupImages?.length * 1000}px`,
						willChange: 'transform',
					}}>
					{secondGroupImages?.map((image: any, index: number) => (
						<div
							key={`second-${index}`}
							className='bg-[#0d0d0d] w-[300px] lg:w-[600px] h-full rounded-card overflow-hidden'>
							<img
								src={image}
								alt={`second-group-image-${index}`}
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
