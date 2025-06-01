'use client';
// ProjectBody.tsx
import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import PrimaryButton from '@/components/ui/PrimaryButton';
import { HiArrowLongRight } from 'react-icons/hi2';
import Link from 'next/link';
import Column from '../Column';
import Container from '../Container';

// interface ProjectBodyProps {
// 	projectData?: any[] | undefined;
// 	filteredProject?: any;
// 	mode?: 'home' | 'full';
// }
// just pass any for quick solution
const ProjectBodyMain = ({
	projectData,
	// filteredProject,
	mode = 'home',
}: any) => {
	return (
		<Column className='w-full'>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2px] w-full'>
				{projectData?.map((project: any, index: number) => (
					<ProjectCard
						key={index}
						project={project}
					/>
				))}
			</div>

			<div className='flex items-end w-full justify-end'>
				{mode === 'home' ? (
					// <PrimaryButton href='/projects'>View All Projects</PrimaryButton>
					<Link
						href='/projects'
						className=' text-blue-900 flex gap-1 items-end justify-end font-medium hover:text-blue-700 transition-colors'>
						Learn More About Us <HiArrowLongRight className='size-7' />
					</Link>
				) : (
					projectData?.length >= 3 &&
					projectData?.length < projectData?.totalDocs && <PrimaryButton>Load More</PrimaryButton>
				)}
			</div>
		</Column>
	);
};

export default ProjectBodyMain;
