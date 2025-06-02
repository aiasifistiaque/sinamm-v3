'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

// Configure NProgress with Google-like settings
NProgress.configure({
	showSpinner: false, // Hide the spinner for cleaner look
	speed: 400, // Faster animation
	minimum: 0.1, // Start with lower percentage
	easing: 'ease', // Smooth easing
});

export default function LoadingProvider({ children }: { children: React.ReactNode }) {
	const pathname = usePathname();

	useEffect(() => {
		// Handle link clicks to start loading immediately
		const handleLinkClick = (e: MouseEvent) => {
			const target = e.target as HTMLElement;
			const link = target.closest('a');

			if (link && link.href && link.href !== window.location.href) {
				// Check if it's an internal link
				const isInternal =
					link.href.startsWith(window.location.origin) ||
					link.href.startsWith('/') ||
					!link.href.includes('://');

				if (isInternal && !link.target && !e.ctrlKey && !e.metaKey) {
					NProgress.start();
				}
			}
		};

		// Add click listener to document
		document.addEventListener('click', handleLinkClick);

		return () => {
			document.removeEventListener('click', handleLinkClick);
		};
	}, []);

	useEffect(() => {
		// Complete loading when route changes
		const timer = setTimeout(() => {
			NProgress.done();
		}, 100);

		return () => {
			clearTimeout(timer);
			NProgress.done();
		};
	}, [pathname]);

	return <>{children}</>;
}
