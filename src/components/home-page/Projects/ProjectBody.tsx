'use client';
// ProjectBody.tsx
import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import PrimaryButton from '@/components/ui/PrimaryButton';
import { HiArrowLongRight } from 'react-icons/hi2';
import Link from 'next/link';
import ViewAllLink from '@/components/ui/ViewAllLink';

const ProjectBody = ({
	projectData,
	// filteredProject,
	mode = 'home',
}: any) => {
	return (
		<div className='w-full flex flex-col items-start space-y-5 '>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2px] w-full'>
				{projectData?.map((project: any, index: number) => (
					<ProjectCard
						cols={3}
						key={index}
						project={project}
					/>
				))}
			</div>

			<div className='flex items-end w-full justify-end'>
				{mode === 'home' ? (
					<ViewAllLink
						href='/projects'
						text='View All Projects'
						className='justify-end pt-8 items-center w-full'
					/>
				) : (
					projectData?.length >= 3 &&
					projectData?.length < projectData?.totalDocs && <PrimaryButton>Load More</PrimaryButton>
				)}
			</div>
		</div>
	);
};

export default ProjectBody;
