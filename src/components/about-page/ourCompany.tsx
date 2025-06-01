/* eslint-disable @next/next/no-img-element */
'use client';

import React, { useEffect, useState } from 'react';
import TextBreak from '../ui/TextBreak';
import TitleContainer from './TitleContainer';
import Container from '../home-page/Container';
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

const OurCompany = () => {
	const [ourCompany, setOurCompany] = useState<OurCompanySection | null>(null);

	useEffect(() => {
		fetch('/homeData.json')
			.then(res => res.json())
			.then((data: HomeData) => {
				setOurCompany(data?.about?.ourCompanySection || null);
			})
			.catch(error => {
				console.error('Error loading about data:', error);
			});
	}, []);
	return (
		<Container className=''>
			<div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
				<div className='space-y-6 animate-slide-in-left'>
					{/* <h2 className='text-3xl md:text-8xl font-primary font-bold text-mainText'></h2> */}
					<TitleContainer>{ourCompany?.title}</TitleContainer>
					<Subtitle className='md:w-3/4'>{ourCompany?.paragraphs}</Subtitle>
				</div>
				<div className='grid grid-cols-2 gap-[2px] animate-slide-in-right'>
					{ourCompany && ourCompany?.images && (
						<>
							<div className='overflow-hidden'>
								<img
									src={ourCompany?.images[0]?.url}
									alt={ourCompany?.images[0]?.alt || 'Sinamm Engineering Office'}
									className='w-full h-full object-cover'
								/>
							</div>
							<div className='overflow-hidden row-span-2'>
								<img
									src={ourCompany?.images[1]?.url}
									alt={ourCompany?.images[1]?.alt}
									className='w-full h-full object-cover'
								/>
							</div>
							{ourCompany.images[2] && (
								<div className='overflow-hidden'>
									<img
										src={ourCompany?.images[2].url}
										alt={ourCompany?.images[2].alt}
										className='w-full h-full object-cover'
									/>
								</div>
							)}
						</>
					)}
				</div>
			</div>
		</Container>
	);
};

export default OurCompany;
