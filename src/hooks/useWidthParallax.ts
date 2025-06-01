import { useScroll, useTransform, MotionValue } from 'framer-motion';
import { RefObject } from 'react';

interface UseWidthParallaxOptions {
	startWidth?: number; // Starting width percentage (e.g., 20 for 20%)
	endWidth?: number; // Ending width percentage (e.g., 100 for 100%)
	offset?: number[]; // Scroll progress range [0, 1]
}

export const useWidthParallax = (
	ref: RefObject<HTMLElement | null>,
	options: UseWidthParallaxOptions = {}
) => {
	const { startWidth = 20, endWidth = 100, offset = [0, 1] } = options;

	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['start end', 'end center'] as any, // Start animation when section comes into view
	});

	// Transform scroll progress to width percentage
	const widthPercentage = useTransform(scrollYProgress, offset, [startWidth, endWidth]);

	// Also add opacity animation for smooth appearance
	const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 0.7, 1, 1]);

	// Add subtle scale effect
	const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 1.02]);

	return {
		widthPercentage,
		opacity,
		scale,
		scrollYProgress,
	};
};
