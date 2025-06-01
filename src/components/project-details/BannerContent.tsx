'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Badge } from '../ui/badge';

const BannerContent = ({ data: project }: any) => {
	console.log('project id data:', project);
	return (
		<div className='text-white'>
			<div className='flex items-center mb-4'>
				<Link
					href='/projects'
					className='text-white/80 hover:text-white flex items-center'
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='24'
						height='24'
						viewBox='0 0 24 24'
						fill='none'
						stroke='currentColor'
						strokeWidth='2'
						strokeLinecap='round'
						strokeLinejoin='round'
						className='h-4 w-4 mr-2'
					>
						<path d='m15 18-6-6 6-6'></path>
					</svg>
					Back to Projects
				</Link>
			</div>
			<motion.h1
				className='text-2xl md:text-4xl lg:text-6xl font-bold mb-4 mt-8 md:w-[80vw] xl:w-[65vw] lg:leading-[60px]'
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
			>
				{project?.name}
			</motion.h1>
			<p className='text-textWhite mb-4'>{project?.location}</p>
			<motion.div
				className='flex flex-wrap items-center gap-2 mb-6'
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5, delay: 0.2 }}
			>
				<Link href={`/projects?type=${project?.projectStatus}`}>
					<span
						className={`px-4 py-[4px] text-xs rounded-full ${
							project?.projectStatus === 'ongoing'
								? 'bg-blue-100 text-blue-900'
								: 'bg-green-100 text-green-800'
						}`}
					>
						{project?.projectStatus === 'ongoing' ? 'Ongoing' : 'Completed'}
					</span>
				</Link>
				<Link href={`/projects?category=${project?.category?._id}`}>
					<span className='px-2 py-[4px] mt-[4px] text-xs rounded-full bg-gray-100 text-gray-800'>
						{project?.category?.name}
					</span>
				</Link>
			</motion.div>
		</div>
	);
};

export default BannerContent;
