'use client';
import React from 'react';
import Link from 'next/link';
import MobileNavbar from './MobileNavbar';
import DesktopNavbar from './DesktopNavbar';
import { logo } from '@/lib/Data/Navbar';
import Container from '@/components/home-page/Container';

const LeftNavbar = () => {
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
							className='md:h-9 mt-2 h-8 object-contain drop-shadow-sm'
						/>
					)}
				</Link>
				{/* </Center> */}

				<DesktopNavbar isScrolled={false} />
				<div className='flex py-5 lg:hidden'>
					<MobileNavbar isScrolled={false} />
				</div>
			</Container>
		</div>
	);
};

export default LeftNavbar;
