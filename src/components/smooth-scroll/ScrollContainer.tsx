'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Lenis from 'lenis';

export default function ScrollContainer({ children }: any) {
	const pathname = usePathname();

	useEffect(() => {
		const lenis: any = new Lenis({
			duration: 2.5,
			// easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easeOutExpo
			// smooth: true,
			gestureOrientation: 'vertical',
			// smoothTouch: true,
			smoothWheel: true,
			// smoothTouch: true,
			easing: t => 1 - Math.pow(1 - t, 5), // Smoother easeOutQuint easing
			touchMultiplier: 2.0, // Adjust this value to control touch sensitivity
			wheelMultiplier: 1.0, // Adjust this value to control wheel sensitivity
			lerp: 0.1,
			touchInertiaMultiplier: 2.0,

			// infinite: true,
		});

		// Make Lenis available globally for the LoadingProvider
		(window as any).lenis = lenis;

		const raf = (time: any) => {
			lenis.raf(time);
			requestAnimationFrame(raf);
		};

		requestAnimationFrame(raf);

		return () => {
			lenis.destroy();
			delete (window as any).lenis;
		};
	}, []);

	// Reset scroll position when pathname changes
	useEffect(() => {
		if ((window as any).lenis) {
			// Use immediate: true to jump to top instantly without animation
			(window as any).lenis.scrollTo(0, { immediate: true });
		}
	}, [pathname]);

	return <>{children}</>;
}
