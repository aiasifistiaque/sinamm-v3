'use client';

import { useGetAllQuery } from '@/store/services/commonApi';
import React from 'react';
import parser from 'html-react-parser';
import TextBreak from '../ui/TextBreak';
import TitleContainer from './TitleContainer';
import Container from '../home-page/Container';
import PageTitle from '../home-page/PageTitle';
import Subtitle from '../home-page/Subtitle';

const Specialization = () => {
	const { data, isLoading } = useGetAllQuery({
		path: 'services',
		limit: 999,
	});
	const speecialization = data?.doc || [];
	return (
		// <Container>
			<div className='space-y-5 py-4'>
				{/* <h2 className='text-4xl md:text-8xl font-primary font-bold text-mainText'></h2> */}
				<PageTitle>Our field of specialization</PageTitle>
				<Subtitle className='lg:w-1/2'>
					From our humble beginnings to becoming a leader in Bangladesh&apos;s construction
					industry, our journey has been marked by growth, innovation, and success.
				</Subtitle>
				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1'>
					{speecialization?.length > 0 ? (
						speecialization?.map((service: any, index: number) => (
							<div
								key={index}
								className='bg-cardBg rounded-card p-6 flex flex-col justify-between space-y-4'>
								{/* <div className='mb-4 size-8'>
                <img
                  src={service?.icon}
                  alt={service?.name}
                  className='w-full h-full object-contain'
                />
              </div> */}
								<div className='space-y-2'>
									<h1 className='text-5xl font-semibold italic text-mainText'>
										{(index + 1).toString().padStart(2, '0')}
									</h1>
									<h3 className='text-xl uppercase font-primary font-medium text-mainText'>
										{service?.name}
									</h3>
								</div>

								<p className='text-paraText text-md'>{parser(service?.shortDescription)}</p>
							</div>
						))
					) : (
						<p className='text-gray-600 text-center col-span-full'>Loading services...</p>
					)}
				</div>
			</div>
		// </Container>
	);
};

export default Specialization;
