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
import LeftNavbar from './LeftNavbar';

const useScrollPosition = (threshold = 40) => {
	const [isScrolled, setIsScrolled] = React.useState(false);
	React.useEffect(() => {
		const handleScroll = () => setIsScrolled(window.scrollY > threshold);
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, [threshold]);
	return isScrolled;
};

const Navbar = () => {
	const isScrolled = useScrollPosition();

	const [hasMounted, setHasMounted] = useState(false); 

	React.useEffect(() => {
		setHasMounted(true);
	}, []);

	const getNavbarBackground = () => {
		if (!hasMounted) return 'bg-transparent';

		// If user has scrolled down, always show a visible background
		if (isScrolled) {
			return 'bg-blueBg backdrop-blur-md border-opacity-70';
		}

		// Default state - slight background for visibility over hero
		return 'bg-transparent';
	};

	return <LeftNavbar />;
	// return <CenterNavbar />;

	return (
		<Container
			className={`fixed flex mx-auto justify-between items-center gap-2 h-[60px] w-full z-[100] transition-all duration-500 ease-in-out ${getNavbarBackground()}`}
		>
			<Grid className='grid-cols-3 w-full'>
				<Flex className='gap-2'>
					<NavItem href='/projects?type=all' className='pl-0 bg-[red]'>
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
								className='md:h-12 h-7 object-contain drop-shadow-sm'
							/>
						)}
					</Link>
				</Center>

				<Flex className='gap-2 justify-end'>
					<NavItem href='/projects?type=all'>About</NavItem>
					<NavItem href='/projects?type=all'>Team</NavItem>
					<NavItem href='/about' className='pr-0'>
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

export default Navbar;

// 'use client';
// import React, { useEffect, useState } from 'react';
// import Link from 'next/link';
// import MobileNavbar from './MobileNavbar';
// import DesktopNavbar from './DesktopNavbar';

// const useScrollPosition = (threshold = 50) => {
// 	const [isScrolled, setIsScrolled] = useState(false);

// 	useEffect(() => {
// 		const handleScroll = () => {
// 			setIsScrolled(window.scrollY > threshold);
// 		};

// 		window.addEventListener('scroll', handleScroll);
// 		return () => window.removeEventListener('scroll', handleScroll);
// 	}, [threshold]);

// 	return isScrolled;
// };

// const useBackgroundDetection = () => {
// 	const [hasBackgroundMedia, setHasBackgroundMedia] = useState(false);

// interface LogoData {
// 	url: string;
// 	alt: string;
// }

// const Navbar = () => {
// 	const isScrolled = useScrollPosition();
// 	const hasBackgroundMedia = useBackgroundDetection();
// 	const [logo, setLogo] = useState<LogoData | null>(null);
// 	const [navlinks, setNavlinks] = useState([]);

// 	useEffect(() => {
// 		fetch('/homeData.json')
// 			.then(response => response.json())
// 			.then(data => {
// 				setLogo(data?.logo || null);
// 				setNavlinks(data?.navlinks || []);
// 			})
// 			.catch(error => console.error('Failed to load navbar data:', error));
// 	}, []);

// 	// Determine navbar background based on conditions
// 	const getNavbarBackground = () => {
// 		if (hasBackgroundMedia) {
// 			// If current section has background image or video, keep transparent (with optional blur when scrolled)
// 			return isScrolled ? 'backdrop-blur-sm bg-black/10' : 'bg-transparent';
// 		} else {
// 			// If no background media (blank page), use primary color
// 			return 'bg-[#074d87]';
// 		}
// 	};

// 	return (
// 		<div
// 			className={`items-center fixed h-[64px] w-full z-40 transition-all duration-300 ${getNavbarBackground()}`}
// 		>
// 			<div className='flex container mx-auto px-4 justify-between items-center gap-2'>
// 				<Link href='/'>
// 					{logo && (
// 						<img
// 							src={logo?.url}
// 							alt={logo?.alt}
// 							className='md:h-10 h-7 object-contain'
// 						/>
// 					)}
// 				</Link>

// 				<DesktopNavbar isScrolled={isScrolled}  />

// 				{/* <div className='hidden lg:block'>
// 					<PrimaryButton href='/contact' className='py-1 px-4'>
// 						Contact
// 					</PrimaryButton>
// 				</div> */}

// 				<div className='flex py-5 lg:hidden '>
// 					<MobileNavbar isScrolled={isScrolled} />
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default Navbar;
