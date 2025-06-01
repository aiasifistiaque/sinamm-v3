'use client';
import { cn } from '@/lib/utils';
import { useEffect, useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay } from 'swiper/modules';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

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
		}, 5000); // Change image every 5 seconds

		return () => clearInterval(interval);
	}, [carouselImages]);

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
			style={{ y }}>
			{/* Custom Video-like Image Carousel */}
			<div>
				<motion.div
					className='absolute inset-0 z-0 parallax-element enhanced-parallax overflow-hidden'
					style={{ y: backgroundY }}>
					<div className='relative w-full h-[140vh] bg-[#0d0d0d]'>
						{/* Always visible background image to prevent black flash */}
						{carouselImages && carouselImages[currentImageIndex] && (
							<div
								className='absolute inset-0 w-full h-full bg-cover bg-center opacity-40 transition-opacity duration-500'
								style={{
									backgroundImage: `url(${carouselImages[currentImageIndex]})`,
								}}
							/>
						)}

						{/* Render current and next image for seamless transition */}
						<div className='relative w-full h-full'>
							{carouselImages?.map((image: string, index: number) => {
								const isActive = index === currentImageIndex;
								return (
									<motion.div
										key={`image-${index}`}
										className='absolute inset-0 w-full h-full'
										initial={{ opacity: 0 }}
										animate={{
											opacity: isActive ? 1 : 0,
										}}
										transition={{
											duration: 0.8,
											ease: 'easeInOut',
										}}>
										{/* Background fallback */}
										<div className='absolute inset-0 w-full h-full bg-gradient-to-br from-gray-900 to-black' />

										<Container>
											<motion.img
												src={image}
												alt={`Banner image ${index + 1}`}
												className='relative w-full h-full object-cover z-10'
												style={{
													objectPosition: 'center bottom',
												}}
												initial={false}
												animate={
													isActive
														? {
																scale: 1.3,
																x: 60,
														  }
														: {
																scale: 1.4,
																x: -60,
														  }
												}
												transition={
													isActive
														? {
																scale: { duration: 5, ease: 'linear' },
																x: {
																	duration: 5,
																	ease: 'linear',
																},
														  }
														: {
																duration: 0,
														  }
												}
											/>
										</Container>

										{/* Dynamic overlay that moves - only on active image */}
										{isActive && (
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
										)}
									</motion.div>
								);
							})}
						</div>
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
				style={{ y: contentY }}>
				<HeroContent textScale={textScale} />
			</motion.div>
		</motion.section>
	);
};

export default HeroSection;
