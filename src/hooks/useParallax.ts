import { useScroll, useTransform, MotionValue } from 'framer-motion';
import { RefObject } from 'react';

interface UseParallaxOptions {
	speed?: number;
	offset?: number[];
	scale?: boolean;
}

export const useParallax = (ref: RefObject<HTMLElement>, options: UseParallaxOptions = {}) => {
	const { speed = 1.0, offset = [0, 1], scale = false } = options; // Increased default speed for larger hero

	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['start end', 'end start'] as any,
	});

	// Enhanced parallax movement for larger hero section
	const y = useTransform(scrollYProgress, offset, [
		0,
		-(window?.innerHeight || 1000) * speed * 2.0, // Increased multiplier for more dramatic effect
	]);

	// Always call useTransform, but conditionally use the result
	const scaleTransform = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [1.2, 0.9, 0.6, 0.4]);
	const scaleValue = scale ? scaleTransform : undefined;

	return {
		y,
		scale: scaleValue,
		scrollYProgress,
	};
};
