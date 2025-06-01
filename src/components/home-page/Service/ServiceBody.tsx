"use client"

import React, { useEffect, useState } from 'react';
import PrimaryButton from '../../ui/PrimaryButton';

type Service = {
	icon: string;
	title: string;
	description: string;
};
// 	{
// 		title: 'Construction Management',
// 		description:
// 			'Expert management of construction projects from planning and design through completion, ensuring quality, timeliness, and budget compliance.',
// 		icon: <Hammer size={32} />,
// 	},
// 	{
// 		title: 'Infrastructure Development',
// 		description:
// 			'Comprehensive infrastructure solutions including highways, bridges, water systems, and public facilities, built to last generations.',
// 		icon: <Map size={32} />,
// 	},
// 	{
// 		title: 'Industrial Engineering',
// 		description:
// 			'Specialized engineering services for industrial facilities, including factories, warehouses, and manufacturing plants.',
// 		icon: <Factory size={32} />,
// 	},
// 	{
// 		title: 'Structural Engineering',
// 		description:
// 			'Advanced structural design and analysis ensuring buildings are safe, functional, and compliant with all regulations.',
// 		icon: <Building2 size={32} />,
// 	},
// 	{
// 		title: 'Commercial Construction',
// 		description:
// 			'Full-service commercial construction for office buildings, retail spaces, hotels, and other business facilities.',
// 		icon: <Store size={32} />,
// 	},
// 	{
// 		title: 'Sustainable Engineering',
// 		description:
// 			'Environmentally responsible design and construction practices that minimize ecological impact while maximizing efficiency.',
// 		icon: <Leaf size={32} />,
// 	},
// ];

const ServiceBody = () => {
	const [services, setServices] = useState<Service[]>([]);
	 useEffect(() => {
			fetch('/homeData.json')
				.then((res) => res.json())
				.then((data) => {
					if (data.services) {
						setServices(data.services);
					}
				})
				.catch((error) => {
					console.error('Error loading service data:', error);
				});
		}, []);
	return (
		<section className='py-12 mx-auto '>
			<div className='max-w-7xl px-4'>
				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
						{services.slice(0, 6).map((service, index) => (
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
						))}
					</div>
				<div className='mt-8 text-center'>
					<PrimaryButton href='/services'>View All Services</PrimaryButton>
				</div>
			</div>
		</section>
	);
};

export default ServiceBody;
