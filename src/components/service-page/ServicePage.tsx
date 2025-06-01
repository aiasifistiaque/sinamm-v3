'use client';

import Specialization from '@/components/about-page/Specialization';
import RootLayout from '@/components/layout/RootLayout/RootLayout';
import RootPage from '@/components/root/RootPage';
import { useGetAllQuery } from '@/store/services/commonApi';
import React, { useEffect, useState } from 'react';

interface Service {
	icon: string;
	title: string;
	description: string;
}

const ServicePage = () => {
	// replace with actual endpoint path
	const { data, isLoading } = useGetAllQuery({
		path: 'banners',
	});

	const [services, setServices] = useState<Service[]>([]);

	useEffect(() => {
		fetch('/homeData.json')
			.then(res => res.json())
			.then(data => {
				if (data.services) {
					setServices(data.services);
				}
			})
			.catch(error => {
				console.error('Error loading service data:', error);
			});
	}, []);

	return (
		<RootLayout isLoading={isLoading}>
			<RootPage
				headerText='Our Engineering Services'
				headerDescription='Sinamm Engineering offers a comprehensive range of construction and engineering services designed to meet the diverse needs of our clients across Bangladesh.'
			>
				{/* <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-8'>
					{services.length > 0 ? (
						services.map((service, index) => (
							<div
								key={index}
								className='bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow'
							>
								<div className='mb-4 w-12 h-12'>
									<img
										src={service.icon}
										alt={service.title}
										className='w-full h-full object-contain'
									/>
								</div>
								<h3 className='text-lg font-semibold text-gray-800 mb-2'>
									{service.title}
								</h3>
								<p className='text-gray-600 text-sm mb-4'>
									{service.description}
								</p>
							</div>
						))
					) : (
						<p className='text-gray-600 text-center col-span-full'>
							Loading services...
						</p>
					)}
				</div> */}
				<Specialization />
			</RootPage>
		</RootLayout>
	);
};

export default ServicePage;
