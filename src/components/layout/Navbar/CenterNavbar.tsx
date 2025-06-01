'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import MobileNavbar from './MobileNavbar';
import { logo } from '@/lib/Data/Navbar';
import Container from '@/components/home-page/Container';
import Flex from '@/components/home-page/Flex';
import NavItem from './NavItem';
import Grid from '@/components/home-page/Grid';
import Center from '@/components/home-page/Center';

const useScrollPosition = (threshold = 40) => {
	const [isScrolled, setIsScrolled] = React.useState(false);
	React.useEffect(() => {
		const handleScroll = () => setIsScrolled(window.scrollY > threshold);
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, [threshold]);
	return isScrolled;
};

const CenterNavbar = () => {
	const isScrolled = useScrollPosition();
	const [hasMounted, setHasMounted] = useState(false); // 🆕

	React.useEffect(() => {
		setHasMounted(true);
	}, []);

	const getNavbarBackground = () => {
		if (!hasMounted) return 'bg-transparent';

		// If user has scrolled down, always show a visible background
		if (isScrolled) {
			return 'bg-transparent';
		}

		// Default state - slight background for visibility over hero
		return 'bg-transparent';
	};

	return (
		<Container
			className={`fixed flex mx-auto mix-blend-exclusion justify-between items-center gap-2 h-[60px] w-full z-[100] transition-all duration-500 ease-in-out`}>
			<Grid className='grid-cols-3 py-0 w-full mix-blend-exclusion rounded-[8px]'>
				<Flex className='gap-2 items-center'>
					<NavItem
						href='/projects?type=all'
						className='pl-0'>
						Projects
					</NavItem>
					<NavItem href='/about'>Machinery</NavItem>
					<NavItem href='/about'>Partners</NavItem>
				</Flex>
				<Center>
					<Link href='/'>
						{logo && (
							<img
								src={logo.url}
								alt={logo.alt}
								className='md:h-10 h-7 object-contain'
							/>
						)}
					</Link>
				</Center>

				<Flex className='gap-2 items-center justify-end'>
					<NavItem href='/projects?type=all'>About</NavItem>
					<NavItem href='/projects?type=all'>Team</NavItem>
					<NavItem
						href='/about'
						className='pr-0'>
						Contact
					</NavItem>
				</Flex>
			</Grid>

			{/* <DesktopNavbar isScrolled={isScrolled} /> */}
			<div className='flex py-5 lg:hidden'>
				<MobileNavbar isScrolled={isScrolled} />
			</div>
		</Container>
	);
};

export default CenterNavbar;
