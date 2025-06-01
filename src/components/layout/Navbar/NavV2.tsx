'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import DesktopNavbar from './DesktopNavbar';
import MobileNavbar from './MobileNavbar';
import PrimaryButton from '@/components/ui/PrimaryButton';

const useScrollPosition = (threshold = 50) => {
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > threshold);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, [threshold]);

	return isScrolled;
};

interface LogoData {
	url: string;
	alt: string;
}

const NavV2 = () => {
	const isScrolled = useScrollPosition();
	const [logo, setLogo] = useState<LogoData | null>(null);
	const [navlinks, setNavlinks] = useState([]);

	useEffect(() => {
		fetch('/homeData.json')
			.then(response => response.json())
			.then(data => {
				setLogo(data?.logo || null);
				setNavlinks(data?.navlinks || []);
			})
			.catch(error => console.error('Failed to load navbar data:', error));
	}, []);

	return (
		<div
			className={`items-center fixed h-[64px] w-full z-40 transition-all duration-300 ${
				isScrolled ? '' : 'bg-transparent'
			}`}
		>
			<div className='flex container md:mx-auto px-4 justify-between h-[64px] items-center gap-2 mt-[18px]'>
				<div className='flex items-center w-full gap-8'>
					<Link href='/' className='inline-block w-[25%]'>
						{logo && (
							<img
								src={logo.url}
								alt={logo.alt}
								className='md:h-10 h-7 object-contain'
							/>
						)}
					</Link>

					<DesktopNavbar isScrolled={isScrolled} />
				</div>

				{/* <div className='hidden lg:block'>
					<PrimaryButton href='/contact' className='py-1 px-4'>
						Contact
					</PrimaryButton>
				</div> */}
				<div className='flex py-5 lg:hidden items-center'>
					<MobileNavbar isScrolled={isScrolled} />
				</div>
			</div>
		</div>
	);
};

export default NavV2;
