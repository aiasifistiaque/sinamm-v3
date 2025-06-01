'use client';
import ProjectCard from '@/components/home-page/Projects/ProjectCard';
import RootLayout from '@/components/layout/RootLayout/RootLayout';
import { SisterHero } from '@/components/sister-concern';
import { useGetAllQuery, useGetByIdQuery } from '@/store/services/commonApi';

import { useParams } from 'next/navigation';
import React from 'react';

const SingleSisterConcern = () => {
	const { id } = useParams();
	// for now they have only one sister concern, apu told to show same projects for all concerns
	const { data, isLoading } = useGetAllQuery({
		path: 'projects',
		filters: {
			isSisterConcern: true,
		},
		limit: 99,
	});
	const sisterConcerns =
		id == '683297e2c7adb302a6bca17e'
			? {
					id: '683297e2c7adb302a6bca17e',
					name: 'CIRCLE HOLDINGS LIMITED',
					description: 'A Real Estate Company',
					longDescription:
						'is a forward-thinking real estate company committed to shaping modern living. We specialize in property development, sales, and investment solutions tailored to diverse client needs. With a focus on quality and innovation, we deliver exceptional real estate experiences.',
					address:
						'House # 57/C (2nd Floor), Road # 15/A, Dhanmondi R/A, Dhaka – 1209',
					phone: '02-8127192, 8130752 Ex 604',
					fax: '02-9120361',
					email: 'jsecon@gmail.com',
					coverImage: '/oracle.png',
			  }
			: id == '6833f609da177e65a702a088'
			? {
					id: '6833f609da177e65a702a088',
					name: 'JSE CONSORTIUM',
					description: 'An Organization for Tele Communication Sector Works',
					address:
						'House # 57/C (Ground Floor), Road # 15/A, Dhanmondi R/A, Dhaka – 1209',
					phone: '02-8127192, 8130752 Ex 604',
					fax: '02-9120361',
					email: 'jsecon@gmail.com',
					coverImage: '/oracle.png',
			  }
			: {
					id: '6833f61ada177e65a702a091',
					name: 'SINAMM & TECHNO INTERNATIONAL JV',
					description: 'Engineering and Technical Services',
					address: 'House # 57/C, Road # 15/A, Dhanmondi R/A, Dhaka – 1209',
					phone: '02-8127192, 8130752',
					fax: '02-9120361',
					email: 'sinamm_con@yahoo.com',
					coverImage: '/oracle.png',
			  };

	return (
		<RootLayout isLoading={isLoading}>
			{/* hero */}
			<SisterHero sisterConcerns={sisterConcerns} />
			{/* projects */}
			<div className='max-w-7xl mx-auto w-full h-full px-4 my-10 mt-[70px]'>
				<div className='flex'>
					<p className='text-xl'>
						<span className='font-bold mr-2'>{sisterConcerns?.name}</span>
						{sisterConcerns?.longDescription}
					</p>
				</div>
				<div className='mt-6'>
					<p>
						<span className='font-bold mr-2'>Address:</span>
						<span className='italic'>{sisterConcerns?.address}</span>
					</p>
					<div>
						<span className='font-bold'>Tel: </span>
						{sisterConcerns?.phone}
					</div>
					<div>
						<span className='font-bold'>Fax: </span>
						{sisterConcerns?.fax}
					</div>
					<div>
						<span className='font-bold'>Email: </span>
						{sisterConcerns?.email}
					</div>
				</div>
			</div>
			<div className='max-w-7xl mx-auto w-full h-full px-4 mb-[58px]'>
				<div className='grid grid-cols-1 md:grid-cols-2 mt-8 lg:grid-cols-3 gap-8 w-full'>
					{data?.doc?.map((project: any, index: number) => (
						<ProjectCard key={index} project={project} />
					))}
				</div>
			</div>
		</RootLayout>
	);
};

export default SingleSisterConcern;
