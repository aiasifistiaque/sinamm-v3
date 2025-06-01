'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import MobileNavbar from './MobileNavbar';
import DesktopNavbar from './DesktopNavbar';
import { logo } from '@/lib/Data/Navbar';
import Container from '@/components/home-page/Container';
import Flex from '@/components/home-page/Flex';
import NavItem from './NavItem';
import Grid from '@/components/home-page/Grid';
import Center from '@/components/home-page/Center';
import CenterNavbar from './CenterNavbar';

const useScrollPosition = (threshold = 40) => {
	const [isScrolled, setIsScrolled] = React.useState(false);
	React.useEffect(() => {
		const handleScroll = () => setIsScrolled(window.scrollY > threshold);
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, [threshold]);
	return isScrolled;
};

const LeftNavbar = () => {
	const isScrolled = useScrollPosition();

	const [hasMounted, setHasMounted] = useState(false); // 🆕

	React.useEffect(() => {
		setHasMounted(true);
	}, []);

	return (
		<div className='fixed w-full top-0 left-0 z-[100] h-[60px] mix-blend-exclusion'>
			<Container
				className={`flex justify-between items-center gap-2 w-full h-full transition-all duration-500 ease-in-out mix-blend-exclusion`}>
				{/* <Center> */}
				<Link href='/'>
					{logo && (
						<img
							src={logo.url}
							alt={logo.alt}
							className='md:h-9 mt-2 h-7 object-contain drop-shadow-sm'
						/>
					)}
				</Link>
				{/* </Center> */}

				<DesktopNavbar isScrolled={isScrolled} />
				<div className='flex py-5 lg:hidden'>
					<MobileNavbar isScrolled={isScrolled} />
				</div>
			</Container>
		</div>
	);
};

export default LeftNavbar;
