/* eslint-disable @next/next/no-img-element */
'use client';

import TitleContainer from './TitleContainer';
import { Container, Grid } from '@/components';
import Subtitle from '../home-page/Subtitle';

interface OurCompanySection {
	title: string;
	paragraphs: string;
	images: {
		url: string;
		alt: string;
	}[];
}

interface HomeData {
	about: {
		ourCompanySection: OurCompanySection;
	};
}

const images = [
	{
		url: '/shams.jpg',
		alt: 'Construction Site',
	},
	{
		url: '/DSC00128.JPG',
		alt: 'Sinamm Engineering Office',
	},
	{
		url: '/now.JPG',
		alt: 'Engineering Design',
	},
];

const OurCompany = () => {
	return (
		<Container className=''>
			<Grid className='grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
				<div className='space-y-6'>
					<TitleContainer>Our Company</TitleContainer>
					<Subtitle className='md:w-3/4'>{`SINAMM ENGINEERING LIMITED, named as SINAMM, was conceived and formed in the year 2004 by a team of qualified Engineers and other professionals possessing long-standing experience in various fields of constructional activities with a vision and mission to play a significant role in the development and construction sector in the near future.`}</Subtitle>
				</div>
				<Grid className='grid-cols-2 gap-[2px]'>
					<div className='overflow-hidden bg-[#0d0d0]'>
						<img
							src={images[0]?.url}
							alt={images[0]?.alt || 'Sinamm Engineering Office'}
							className='w-full h-full object-cover'
						/>
					</div>
					<div className='overflow-hidden row-span-2 bg-[#0d0d0]'>
						<img
							src={images[1]?.url}
							alt={images[1]?.alt}
							className='w-full h-full object-cover'
						/>
					</div>

					<div className='overflow-hidden bg-[#0d0d0d]'>
						<img
							src={images[2]?.url}
							alt={images[2]?.alt}
							className='w-full h-full object-cover'
						/>
					</div>
				</Grid>
			</Grid>
		</Container>
	);
};

export default OurCompany;
