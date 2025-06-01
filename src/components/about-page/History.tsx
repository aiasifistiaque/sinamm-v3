/* eslint-disable @next/next/no-img-element */
'use client';

import React, { useState, useEffect } from 'react';
import BorderBottom from '../ui/BorderBottom';
import TextBreak from '../ui/TextBreak';
import TitleContainer from './TitleContainer';
import Container from '../home-page/Container';
import Subtitle from '../home-page/Subtitle';
import PageTitle from '../home-page/PageTitle';
import Grid from '../home-page/Grid';

const History = () => {
	const [historyData, setHistoryData] = useState([]);

	useEffect(() => {
		// Fetch the JSON data from the public folder
		fetch('/homeData.json')
			.then(response => {
				if (!response.ok) {
					throw new Error('Failed to fetch history data');
				}
				return response.json();
			})
			.then(data => {
				// Extract the history paragraphs from the JSON
				setHistoryData(data.about.history.paragraphs);
			})
			.catch(error => {
				console.error('Error fetching history data:', error);
			});
	}, []);
	//for fixeing
	return (
		<Container className=''>
			<Grid className='grid-cols-1 md:grid-cols-2 gap-6'>
				<div className='flex justify-center'>
					<img
						src='/DSC03240.jpg'
						// src='/history.webp'
						alt='img'
						className='object-cover rounded-card'
					/>
				</div>

				<div className='flex flex-col space-y-4 justify-center animate-fade-in'>
					{/* <h2 className='text-5xl md:text-8xl font-primary font-bold text-gray-800  mb-8s'></h2> */}
					<PageTitle>
						<TextBreak text='History of SINAMM Engineering' />
					</PageTitle>
					<BorderBottom className='md:py-5 py-1' />
					<div className='flex gap-4 text-paraText flex-col'>
						<Subtitle>
							SINAMM ENGINEERING LIMITED named as SINAMM was conceived and
							formed in the year 2004 by a team of qualified Engineers and other
							professionals possessing long-standing experience in various
							fields of Constructional activities with a vision and mission and
							to play a significant role in development and construction sector
							in near future.
						</Subtitle>
						<Subtitle>
							Construction, more than any industry, is indeed a
							service-profession, the lure of becoming a civil engineering
							contractor attracts many, but not all can survive these
							challenges. Many give up due to a lack of experience or inability
							to tackle the hazards involved. SINAMM has started the journey to
							take these challenges and is determined to exist its excellence in
							the field of construction such as buildings, industry and
							infrastructure projects through innovative planning and employing
							the latest techniques with continuous advancement. We believe that
							our dedication, commitment, technical superiority, experienced
							human resources, and collective management efforts will ensure
							quality, accuracy and timely completion of works for the
							prospective client.
						</Subtitle>
						{/* <p className=' leading-relaxed text-md'>
		<Container className='px-1 md:px-2'>
			<Container className='space-y-5 grid lg:grid-cols-2 grid-cols-1'>
				<div className='container mx-auto'>
					<img
						src='/history.webp'
						alt='img'
						className='object-cover rounded-card'
					/>
				</div>
				<div className='text-left flex flex-col space-y-4 justify-center animate-fade-in'>
					<h2 className='text-5xl md:text-8xl font-primary font-bold text-gray-800  mb-8s'>
						<TextBreak text='Our History' />
					</h2>
					<BorderBottom className='md:py-5 py-1' />
					<div className='flex gap-4 text-paraText flex-col'>
						<p className=' leading-relaxed text-md'>
							SINAMM ENGINEERING LIMITED named as SINAMM was conceived and
							formed in the year 2004 by a team of qualified Engineers and other
							professionals possessing long-standing experience in various
							fields of Constructional activities with a vision and mission and
							to play a significant role in development and construction sector
							in near future.
						</p>
						<p className=' leading-relaxed text-md'>
							Construction, more than any industry, is indeed a
							service-profession, the lure of becoming a civil engineering
							contractor attracts many, but not all can survive these
							challenges. Many give up due to a lack of experience or inability
							to tackle the hazards involved. SINAMM has started the journey to
							take these challenges and is determined to exist its excellence in
							the field of construction such as buildings, industry and
							infrastructure projects through innovative planning and employing
							the latest techniques with continuous advancement. We believe that
							our dedication, commitment, technical superiority, experienced
							human resources, and collective management efforts will ensure
							quality, accuracy and timely completion of works for the
							prospective client.
						</p>
						{/* <p className=' leading-relaxed text-md'>
					The top management of SINAMM during the tenure of last 21 years played
					the key role in the field of construction through Planning,
					Evaluation, Tendering, Monitoring, Supervision & Execution of
					industrial building, Power plants, High-rise Apartments, Office
					buildings, Commercial buildings, Roads and Highways projects, Water
					supply, Sanitation and Deep tub well projects. Finally, keeping pace
					with rapid economical and technological changes, we are determined to
					put ourselves in the front line of the Construction sector through our
					works in future to build a planned, productive and healthier
					environment around us. SINAMM Engineering Limited believes in
					teamwork. We feel proud to have a very strong team and we are
					confident to achieve our goals and objectives with accuracy. We are
					dedicated to providing the most efficient and effective skills in the
					Country. We are working continuously to improve our system to provide
					the best and efficient services to our clients and also to match with
					the upcoming days.
				</p> */}
						{/* {historyData?.map((paragraph, index) => (
					<p
						key={index}
						className='text-gray-700 leading-relaxed text-lg'
						dangerouslySetInnerHTML={{ __html: paragraph }}
					/>
				))} */}
					</div>
				</div>
			</Grid>
			{/* <BorderBottom className='container mx-auto py-0' /> */}
		</Container>
	);
};

export default History;

// const getTimelineData = () => [
// 	{
// 		year: '2008',
// 		title: 'Company Founded',
// 		description:
// 			"Construction, more than any industry, is indeed a service-profession, the lure of becoming a civil engineering contractor attracts many, but not all can survive these challenges. Many give up due to a lack of experience or inability to tackle the hazards involved. SINAMM has started the journey to take these challenges and is determined to exist its excellence in the field of construction such as buildings, industry and infrastructure projects through innovative planning and employing the latest techniques with continuous advancement.",
// 	},
// 	{
// 		year: '2012',
// 		title: 'First Major Project',
// 		description:
// 			'We believe that our dedication, commitment, technical superiority, experienced human resources, and collective management efforts will ensure quality, accuracy and timely completion of works for the prospective client.',
// 	},
// 	{
// 		year: '2015',
// 		title: 'Expansion of Services',
// 		description:
// 			'The top management of SINAMM during the tenure of last 21 years played the key role in the field of construction through Planning, Evaluation, Tendering, Monitoring, Supervision & Execution of industrial building, Power plants, High-rise Apartments, Office buildings, Commercial buildings, Roads and Highways projects, Water supply, Sanitation and Deep tub well projects.',
// 	},
// 	{
// 		year: '2018',
// 		title: 'National Recognition',
// 		description:
// 			'Finally, keeping pace with rapid economical and technological changes, we are determined to put ourselves in the front line of the Construction sector through our works in future to build a planned, productive and healthier environment around us. SINAMM Engineering Limited believes in teamwork.',
// 	},
// 	{
// 		year: '2023',
// 		title: 'Today & Beyond',
// 		description:
// 			' We feel proud to have a very strong team and we are confident to achieve our goals and objectives with accuracy. We are dedicated to providing the most efficient and effective skills in the Country. We are working continuously to improve our system to provide the best and efficient services to our clients and also to match with the upcoming days.',
// 	},
// ];

{
	/* <div className='relative'>
  <div className='absolute -left-1 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-black z-0'></div>

  <div className='space-y-16 ml-4 md:ml-0'>
    {getTimelineData().map((item, index) => (
      <div
        key={index}
        className={`relative flex flex-col md:flex-row md:items-center animate-fade-in stagger-${
          index + 1
        }`}
      >
        <div
          className={`md:w-1/2 ${
            index % 2 === 0
              ? 'md:pr-12 md:text-right'
              : 'md:pl-12 md:order-2 md:text-left'
          } mb-4 md:mb-0`}
        >
          <h3 className='text-xl font-primary font-bold text-gray-800'>
            {item.year}
          </h3>
          <h4 className='text-lg font-semibold text-primary font-primary mb-2'>
            {item.title}
          </h4>
          <p className='text-gray-600 italic text-[14px]'>{item.description}</p>
        </div>

        <div className='absolute -left-3 -ml-4 top-2 md:ml-0 md:left-1/2 transform md:-translate-x-1/2 z-10'>
          <div className='w-5 h-5 rounded-full bg-black border-4 border-white'></div>
        </div>

        <div className='w-1/2 hidden md:block'></div>
  </div>
))}
  </div>
</div> */
}
