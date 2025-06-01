'use client';

import BgPattern from '@/components/home-page/CTA/BgPattern';
import { FooterLeft } from './index';
import Container from '@/components/home-page/Container';
import Link from 'next/link';
import Flex from '@/components/home-page/Flex';

const Footer = () => {
	return (
		<footer className='bg-[#074d87] mt-[64px] text-gray-300 px-1 md:px-2'>
			{/* <BgPattern /> */}
			<Container className='pt-16'>
				<FooterLeft />
			</Container>

			<Container>
				<Flex className='border-t-[.3px] border-text-gray-200 mt-12 py-3'>
					<p className='tracking-[2px] text-[12px] font-light'>
						&copy; {new Date().getFullYear()}{' '}
						<b className='font-semibold'>SINAMM Engineering Limited</b> | All
						rights reserved. | Powered by{' '}
						<Link
							className='text-underline font-semibold italic'
							target='_blank'
							href='https://thinkcrypt.dev'
						>
							THINKCRYPT
						</Link>
					</p>
				</Flex>
			</Container>
		</footer>
	);
};

export default Footer;
