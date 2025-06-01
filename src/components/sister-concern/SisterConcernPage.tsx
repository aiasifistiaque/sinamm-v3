'use client';

import React, { useState, useEffect, useMemo } from 'react';
import RootLayout from '@/components/layout/RootLayout/RootLayout';
import RootPage from '@/components/root/RootPage';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useGetAllQuery } from '@/store/services/commonApi';
import SisterConcerRootPage from '../root/SisterConcernRootPage';
import UpperSection from './UpperSection';
import MiddleSection from './MiddleSection';
import BorderBottom from '../ui/BorderBottom';
import SisterProject from './SisterProject';

const SisterConcernPage = () => {
	const [isLoading, setIsLoading] = useState(true);
	const { data, isLoading: departmentCatLoading } = useGetAllQuery({
		path: 'projects',
		filters: {
			isSisterConcern: true,
		},
	});

	const sisterConcerns = [
		{
			id: '1',
			name: 'CIRCLE HOLDINGS LIMITED',
			description: 'A Real Estate Company',
			address:
				'House # 57/C (2nd Floor), Road # 15/A, Dhanmondi R/A, Dhaka – 1209',
			phone: '02-8127192, 8130752 Ex 604',
			fax: '02-9120361',
			email: 'jsecon@gmail.com',
			coverImage: '/oracle.png',
		},
		{
			id: '2',
			name: 'JSE CONSORTIUM',
			description: 'An Organization for Tele Communication Sector Works',
			address:
				'House # 57/C (Ground Floor), Road # 15/A, Dhanmondi R/A, Dhaka – 1209',
			phone: '02-8127192, 8130752 Ex 604',
			fax: '02-9120361',
			email: 'jsecon@gmail.com',
			coverImage: '/oracle.png',
		},
		{
			id: '3',
			name: 'SINAMM & TECHNO INTERNATIONAL JV',
			description: 'Engineering and Technical Services',
			address: 'House # 57/C, Road # 15/A, Dhanmondi R/A, Dhaka – 1209',
			phone: '02-8127192, 8130752',
			fax: '02-9120361',
			email: 'sinamm_con@yahoo.com',
			coverImage: '/oracle.png',
		},
	];
	// Map IDs from data to sisterConcerns
	const updatedSisterConcerns = useMemo(() => {
		if (departmentCatLoading || !data?.doc) {
			// console.log('Data is loading or not available yet');
			return sisterConcerns; // Return original array if data isn't ready
		}

		// Type assertion for data (adjust based on actual API response)
		const departmentData = data?.doc as any[];
		// console.log('insidedepartment data  data:', departmentData);
		// Map sisterConcerns to new array with updated IDs
		return sisterConcerns?.map((concern, index) => {
			// Try to find matching department by name
			const matchingDepartment = departmentData?.find(
				dept => dept?.name == concern?.name
			);

			if (matchingDepartment) {
				// console.log('matched dep:', matchingDepartment);
				return {
					...concern,
					id: matchingDepartment._id, // Replace ID
				};
			}

			// Fallback: Use index-based mapping if no name match
			if (index < departmentData?.length) {
				return {
					...concern,
					id: departmentData[index]._id, // Replace ID based on index
				};
			}
			return concern;
		});
	}, [data, departmentCatLoading]);
	useEffect(() => {
		// Simulate a loading state for 2 seconds
		setTimeout(() => {
			setIsLoading(false);
		}, 2000);
	}, []);

	console.log("sisi", data)

	return (
		<RootLayout isLoading={isLoading}>

			<SisterConcerRootPage>
				<UpperSection />
				<BorderBottom />
				<MiddleSection />
				<BorderBottom />
				<SisterProject />
				<BorderBottom />
				{/* <WhyCircleHoldings /> */}
			</SisterConcerRootPage>
			
		</RootLayout>
	);
};

export default SisterConcernPage;


{/* <RootPage
				headerText='Sister Concerns'
				headerDescription='Explore the affiliated companies and subsidiaries that work alongside us to deliver comprehensive solutions across various industries.'
			>
					<div className='px-4 space-y-5'>
					<h1 className='font-primary text-3xl text-center'>
						Sister Organization
					</h1>

					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
						{updatedSisterConcerns?.map((concern, index) => (
							<motion.div
								key={concern?.id}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
								viewport={{ once: true }}
								whileHover={{ y: -5 }}
								className='flex flex-col hover:shadow-md transition-shadow bg-cardBg items-center h-full'
							>
								<div className='h-28 w-64 overflow-hidden p-4'>
									<img
										src={concern?.coverImage}
										alt={concern?.name}
										className='h-full w-full flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-100'
									/>
								</div>
								<div className='flex flex-col flex-grow p-4'>
									<h3 className='text-lg font-primary font-semibold text-gray-800 capitalize'>
										{concern?.name.toLowerCase()}
									</h3>

									{concern?.description && (
										<p className='px-2 py-1 rounded-full w-fit bg-blue-300 inline-block text-gray-800 text-xs mt-2 mb-3'>
											{concern?.description}
										</p>
									)}

									<div className='text-sm text-gray-700 space-y-1 flex-grow'>
										<div className='italic'>{concern?.address}</div>
										<div>
											<span className='font-bold'>Tel: </span>
											{concern?.phone}
										</div>
										<div>
											<span className='font-bold'>Fax: </span>
											{concern?.fax}
										</div>
										<div>
											<span className='font-bold'>Email: </span>
											{concern?.email}
										</div>
									</div>

									<div className='mt-4'>
										<Link
											href={`/sister-concerns/${concern?.id}`}
											className='text-textBlue font-medium text-sm hover:underline'
										>
											View More →
										</Link>
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</RootPage> */}