'use client';
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import RightSide from './RightSide';
import LeftSide from './LeftSide';
import Container from '../Container';
import { cn } from '@/lib/utils';
import { useWidthParallax } from '@/hooks/useWidthParallax';
import ViewAllLink from '@/components/ui/ViewAllLink';

const About = () => {
	const aboutRef = useRef<HTMLDivElement>(null);
	const { widthPercentage, opacity, scale } = useWidthParallax(aboutRef, {
		startWidth: 20,
		endWidth: 100,
		offset: [0, 0.8], // Complete animation by 80% scroll progress
	});

	return (
		// <Container>
		<div
			id='about-section'
			ref={aboutRef}
			className={cn(
				'text-mainText',
				// 'rounded-t-2xl',
				'bg-mainBg',
				'w-full',
				'px-0',
				'py-[64px]',
				'relative',
				'min-h-screen',
				'-mt-44', // Increased overlap to work with taller hero section
				'overflow-hidden' // Prevent horizontal scroll during animation
			)}>
			<motion.div
				// style={{
				// 	width: `${widthPercentage}%` as any,
				// 	opacity,
				// 	scale,
				// }}
				className={cn(
					'flex',
					'flex-col',
					'mx-auto',
					'transition-all',
					'duration-100' // Smooth transition for any remaining CSS changes
				)}>
				<Container
					className={cn(
						'flex',
						'flex-col',
						'lg:flex-row',
						'mx-auto',

						'mt-[-32px]',
						'gap-10',
						'justify-center',
						'items-center',
						'min-h-[80vh]'
					)}>
					<div className={cn('lg:w-1/2', 'w-full', 'h-full')}>
						<RightSide />
					</div>
					<div className={cn('lg:w-1/2', 'w-full', 'flex', 'h-full')}>
						<LeftSide />
					</div>
				</Container>
				<Container className=''>
					<ViewAllLink
						href='/about'
						text='Learn More About Us'
						className='mt-[32px] items-center justify-end text-mainText'
						btnColor='#0d0d0d'
					/>
				</Container>
			</motion.div>
		</div>
		// </Container>
	);
};

export default About;
