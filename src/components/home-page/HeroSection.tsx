'use client';
import { cn } from '@/lib/utils';
import { useEffect, useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay } from 'swiper/modules';
import {
	motion,
	useScroll,
	useTransform,
	AnimatePresence,
} from 'framer-motion';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';
import '../../styles/parallax.css';

import HeroContent from './HeroContent';
import Container from './Container';

interface HeroSectionProps {
	className?: string;
	data?: any;
}

type HeroText = {
	heroTitle: string;
	heroDescription: string;
};

const HeroSection = ({ data, className }: HeroSectionProps) => {
	const [isVisible, setIsVisible] = useState(false);
	const [heroText, setHeroText] = useState<HeroText | null>(null);
	const [textScale, setTextScale] = useState(1);
	const [currentImageIndex, setCurrentImageIndex] = useState(0);
	const ref = useRef<HTMLElement>(null);

	const { scrollY } = useScroll();
	// Increase parallax strength for more noticeable effect
	const y = useTransform(scrollY, [0, 1500], [0, 500]); // Increased from 200 to 500
	const backgroundY = useTransform(scrollY, [0, 1500], [0, 300]); // Increased from 100 to 300
	const contentY = useTransform(scrollY, [0, 1500], [0, 150]); // Content moves slower
	const gradientY = useTransform(scrollY, [0, 1500], [0, 250]); // Gradient moves at different speed

	// Dynamic color overlay that changes during scroll - earlier transition to blue
	const overlayOpacity = useTransform(scrollY, [0, 200, 600], [1, 1, 1]); // Keep full opacity throughout
	const overlayColor = useTransform(
		scrollY,
		[0, 200, 600], // Changed from [0, 400, 1000] to trigger earlier
		['rgba(0, 0, 0, 0.4)', 'rgba(10, 77, 135, 0.8)', 'rgba(10, 77, 135, 1)'] // Start with black, transition to blue
	);
	const overlayY = useTransform(scrollY, [0, 1500], [0, 200]); // Overlay moves with parallax

	const carouselImages = data?.doc?.[0]?.images;

	// Auto-advance image index for custom transitions
	useEffect(() => {
		if (!carouselImages?.length) return;

		const interval = setInterval(() => {
			setCurrentImageIndex(prev => (prev + 1) % carouselImages?.length);
		}, 5000); // Change image every 10 seconds

		return () => clearInterval(interval);
	}, [carouselImages]);

	// Video-like instant transition variants
	const imageVariants = {
		enter: {
			opacity: 1, // Instant visibility
			x: 0,
			scale: 1.15, // Reduced zoom level
		},
		center: {
			opacity: 1,
			x: 0,
			scale: 1.15, // Keep moderately zoomed throughout
			transition: {
				duration: 0, // Instant transition
			},
		},
		exit: {
			opacity: 1, // Keep visible until instant switch
			x: 0,
			scale: 1.15,
			transition: {
				duration: 0, // Instant transition
			},
		},
	};

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

		// Add scroll listener for text scaling
		const handleScroll = () => {
			const scrollY = window.scrollY;
			const windowHeight = window.innerHeight;

			// Calculate scale based on scroll position - more dramatic scaling
			// Scale from 1 to 0.6 as user scrolls from 0 to window height
			const scale = Math.max(0.6, 1 - (scrollY / windowHeight) * 0.4);
			setTextScale(scale);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);
	return (
		<motion.section
			ref={ref}
			className={cn(
				'h-[125vh] bg-[#ebebeb] flex  relative overflow-hidden', // Increased to 150vh for larger hero
				'parallax-container hardware-accelerated',
				className
			)}
			style={{ y }}
		>
			{/* Custom Video-like Image Carousel */}
			<div>
				<motion.div
					className='absolute inset-0 z-0 parallax-element enhanced-parallax overflow-hidden'
					style={{ y: backgroundY }}
				>
					<div className='relative w-full h-[140vh] bg-[#0d0d0d]'>
						{/* Static background image to prevent flash */}
						{carouselImages && carouselImages[0] && (
							<div
								className='absolute inset-0 w-full h-full bg-cover bg-center opacity-30'
								style={{
									backgroundImage: `url(${carouselImages[0]})`,
								}}
							/>
						)}

						<AnimatePresence mode='wait' initial={false}>
							{carouselImages && carouselImages[currentImageIndex] && (
								<motion.div
									key={currentImageIndex}
									custom={1}
									variants={imageVariants}
									initial='enter'
									animate='center'
									exit='exit'
									className='absolute inset-0 w-full h-full'
								>
									{/* Background fallback to prevent black flash */}
									<div className='absolute inset-0 w-full h-full bg-gradient-to-br from-gray-900 to-black' />

									<Container>
										<motion.img
											src={carouselImages[currentImageIndex]}
											alt={`Banner image ${currentImageIndex + 1}`}
											className='relative w-full h-full object-cover z-10'
											style={{
												objectPosition: 'center bottom', // Zoom from bottom
											}}
											initial={{
												scale: 1.4, // Start more zoomed for bottom cropping
												x: -60, // Start further left for longer movement
											}}
											animate={{
												scale: 1.3, // Still zoomed but slightly less
												x: 60, // Move further right for longer travel
											}}
											transition={{
												scale: { duration: 10, ease: 'linear' }, // Match display duration
												x: {
													duration: 10, // Match the 10-second display time
													ease: 'linear', // Linear for video-like constant motion
												},
											}}
										/>
									</Container>

									{/* Dynamic overlay that moves */}
									<motion.div
										className='absolute inset-0 bg-gradient-to-r from-transparent via-black/20 to-transparent'
										initial={{ x: '-100%' }}
										animate={{ x: '100%' }}
										transition={{
											duration: 3,
											repeat: Infinity,
											repeatDelay: 2,
											ease: 'easeInOut',
										}}
									/>
								</motion.div>
							)}
						</AnimatePresence>
					</div>
				</motion.div>
			</div>

			{/* Dynamic Scroll Color Overlay with Gradient */}
			<motion.div
				className='absolute inset-0 z-15 parallax-element hardware-accelerated pointer-events-none'
				style={{
					y: overlayY,
					background: useTransform(
						scrollY,
						[0, 200, 600],
						[
							// Initial state: Blackish gradient
							'linear-gradient(to bottom, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.4) 30%, rgba(0, 0, 0, 0.4) 70%, rgba(0, 0, 0, 0.7) 100%)',
							// Mid transition: Mixed colors
							'linear-gradient(to bottom, rgba(0, 0, 0, 0.5) 0%, rgba(10, 77, 135, 0.6) 30%, rgba(10, 77, 135, 0.6) 70%, rgba(0, 0, 0, 0.5) 100%)',
							// Final state: Full blue with dark edges
							'linear-gradient(to bottom, rgba(0, 0, 0, 0.4) 0%, rgba(10, 77, 135, 1) 30%, rgba(10, 77, 135, 1) 70%, rgba(0, 0, 0, 0.4) 100%)',
						]
					),
					mixBlendMode: 'normal',
				}}
			/>

			{/* Content */}
			<motion.div
				className='relative z-20 w-full min-h-[100vh] parallax-element enhanced-parallax' // Increased content area height
				style={{ y: contentY }}
			>
				<HeroContent textScale={textScale} />
			</motion.div>
		</motion.section>
	);
};

export default HeroSection;
