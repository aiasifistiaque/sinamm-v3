/* eslint-disable @next/next/no-img-element */
'use client';

import React, { useEffect, useState } from 'react';
import TextBreak from '../ui/TextBreak';
import TitleContainer from './TitleContainer';
import Container from '../home-page/Container';
import Subtitle from '../home-page/Subtitle';

interface AboutData {
	icon: string;
	title: string;
	paragraphs: string[];
}

interface Value {
	title: string;
	description: string;
	icon: string;
}
interface ValuesSection {
	header: string;
	description: string;
	items: Value[];
}

interface HomeData {
	about: {
		mission: AboutData;
		vision: AboutData;
		values: ValuesSection;
	};
}
const CoreValues = () => {
	const [values, setValues] = useState<ValuesSection | null>(null);

	useEffect(() => {
		fetch('/homeData.json')
			.then(res => res.json())
			.then((data: HomeData) => {
				setValues(data?.about?.values || null);
			})
			.catch(error => {
				console.error('Error loading about data:', error);
			});
	}, []);

	return (
		<div>
			<div className='space-y-5'>
				<div className='text-left space-y-3 animate-fade-in mb-4'>
					<TitleContainer>{values?.header}</TitleContainer>
					<Subtitle className='lg:w-1/2'>{values?.description}</Subtitle>
				</div>
			</div>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 md:gap-1'>
				{values?.items.map((value, index) => (
					<div
						key={index}
						className='bg-cardBg rounded-card p-6 flex flex-col justify-between space-y-4'>
						<div className=' space-y-2'>
							<img
								src={value.icon}
								alt={value.title}
								className='size-10 rounded-card'
							/>
							<h2 className='text-xl uppercase italic font-primary pb-3 py-1 font-semibold text-mainText'>
								{value?.title}
							</h2>
						</div>

						<p className='text-paraText italic text-sm'>{value?.description}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default CoreValues;
