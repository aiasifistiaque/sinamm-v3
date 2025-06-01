/* eslint-disable @next/next/no-img-element */
'use client';

import React, { useEffect, useState } from 'react';
import { Card, CardContent } from '../ui/card';
import parser from 'html-react-parser';
import TextBreak from '../ui/TextBreak';
import { TitleContainer } from '../about-page';
import Container from '../home-page/Container';
import PageTitle from '../home-page/PageTitle';
import Subtitle from '../home-page/Subtitle';
import Flex from '../home-page/Flex';

const TopManagement = ({ data }: { data: any[] }) => {
	// console.log('top data::', data);
	const [teamSection, setTeamSection] = useState({
		title: '',
		description: '',
	});

	useEffect(() => {
		fetch('/homeData.json')
			.then(res => res.json())
			.then(data => {
				setTeamSection(data?.teamSection?.topManagement || {});
			})
			.catch(err => {
				console.error('Failed to load homeData.json:', err);
			});
	}, []);
	return (
		<Flex className='flex-col space-y-5 pt-12'>
			{/* <h1 className='text-5xl md:text-8xl font-primary text-mainText font-semibold'></h1> */}
			<PageTitle>Meet our top management & leaders</PageTitle>
			<Subtitle w='md-3/4'>{teamSection?.description}</Subtitle>
			<div className='grid grid-cols-1 sm:grid-cols-3 py-4 md:grid-cols-5 md:gap-1 gap-1 '>
				{data?.map((member: any) => (
					<Card key={member?._id} className=' border-none'>
						<div className='relative h-80'>
							<img
								src={member?.image}
								alt={member?.name}
								className='w-full h-full rounded-card object-cover'
							/>
						</div>
						<CardContent className='p-2 space-y-3'>
							<h3 className='text-lg font-bold font-primary text-mainText '>
								{member?.name}
							</h3>
							<p className='text-sm text-blue-800 bg-blue-100 px-2 py-1 rounded-full inline-block'>
								{member?.designation}
							</p>
							<p className='text-sm text-gray-700 '>
								{parser(member?.details)}
							</p>
						</CardContent>
					</Card>
				))}
			</div>
		</Flex>
	);
};

export default TopManagement;
