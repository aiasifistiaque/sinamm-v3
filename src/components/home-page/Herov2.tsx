'use client';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { HiArrowLongRight } from 'react-icons/hi2';
import Link from 'next/link';

interface HeroSectionProps {
	className?: string;
	data?: any;
}

type HeroText = {
	heroTitle: string;
	heroDescription: string;
};

const HeroV2 = ({ data, className }: HeroSectionProps) => {
	const [isVisible, setIsVisible] = useState(false);
	const [heroText, setHeroText] = useState<HeroText | null>(null);

	useEffect(() => {
		setIsVisible(true);
		// Fetch data from homeData.json
		fetch('/homeData.json')
			.then(res => res.json())
			.then(data => {
				setHeroText(data.heroSection);
			})
			.catch(err => {
				console.error('Failed to load data:', err);
			});
	}, []);

	// Function to format the title with blue "Building"
	const formatTitle = (title: string) => {
		return title
			.split(' ')
			.map((word, index) => {
				if (word === 'Building') {
					return (
						<span key={index} className='text-blue-700'>
							{word}
						</span>
					);
				}
				return <span key={index}>{word}</span>;
			})
			.reduce<React.ReactNode[]>((acc, curr, index) => {
				if (index === 0) return [curr];
				return [...acc, ' ', curr];
			}, []);
	};

	const videoUrl = data?.doc?.[0]?.link;

	return (
		<section
			className={cn(
				'relative min-h-[100vh] flex items-end justify-center overflow-hidden',
				className
			)}
		>
			{/* Video Background */}
			<div className='absolute inset-0 z-0'>
				{videoUrl && (
					<>
						<div className='absolute inset-0  z-10' />
						<div className='absolute inset-0 z-15 bg-gradient-to-r from-gray-800/90 via-transparent to-gray-800/50' />
						<div className='absolute inset-0 z-15 bg-gradient-to-b from-gray-800/90 via-transparent to-gray-800/50' />
						<video
							autoPlay
							muted
							loop
							playsInline
							className='w-full h-full object-cover'
						>
							<source src={videoUrl} type='video/mp4' />
							Your browser does not support the video tag.
						</video>
					</>
				)}
			</div>

			{/* Content */}
			<div className='container px-4 mx-auto z-20 text-white mb-20'>
				<div className='flex items-center w-full'>
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
						transition={{ duration: 0.8, ease: 'easeOut' }}
						className='space-y-5 w-[50%]'
					>
						<motion.h1
							className='text-[58px] md:text-6xl font-base font-primary text-shadow leading-tight text-white'
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
							transition={{ duration: 0.8, delay: 0.2 }}
						>
							{heroText && formatTitle(heroText.heroTitle)}
						</motion.h1>

						<motion.p
							className='font-primary text-md text-white w-full leading-relaxed'
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
							transition={{ duration: 0.8, delay: 0.4 }}
						>
							{heroText && heroText.heroDescription}
						</motion.p>
					</motion.div>
					<div className='w-[50%] flex flex-col items-end gap-4'>
						<div className='w-[550px] h-[300px] rounded-[30px] overflow-hidden'>
							<img src='/ruppur.jpeg' alt='img' w-full h-full object-cover />
						</div>
						<div className='w-[550px] flex items-center gap-2 group'>
							<Link
								href='/projects'
								className='font-Objektiv text-[24px] relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 group-hover:after:w-full'
							>
								Our Projects
							</Link>
							<HiArrowLongRight
								size={32}
								className='transition-all duration-300 group-hover:translate-x-2'
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroV2;
