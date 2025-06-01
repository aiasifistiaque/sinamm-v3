import { dateFormater } from '@/lib/dateFormater';
import { useGetAllQuery } from '@/store/services/commonApi';
import Link from 'next/link';
import React from 'react';
import DetailsLi from './DetailsLi';

const RightColumn = ({ project }: any) => {
	const { data: relatedProjects } = useGetAllQuery({
		path: 'projects',
		filters: {
			category: project?.category?._id,
		},
	});
	// const relatedProject =
	// console.log('related projects::', relatedProjects);
	return (
		<div className='lg:col-span-1'>
			{/* bg-cardBg */}
			<div className='bg-cardBg h-full flex flex-col justify-center border border-gray-100 p-2 md:p-6 rounded-lg'>
				<h3 className='text-xl font-bold mb-4'>Project Details</h3>
				<ul className='space-y-3'>
					<DetailsLi label='Client' value={project?.client} />
					<DetailsLi label='Location' value={project?.location} />
					<DetailsLi
						label='Start Date'
						value={dateFormater(project?.projectStartingDate)}
					/>
					<DetailsLi
						label='Completion Date'
						value={dateFormater(project?.projectCompletionDate)}
					/>
					<DetailsLi label='Duration' value={project?.duration} />
					<DetailsLi label='Category' value={project?.category?.name} />
					<DetailsLi label='Work Value' value={project?.workValue} />
					<DetailsLi label='Project Volume' value={project?.projectVolume} />
				</ul>
			</div>
		</div>
	);
};

export default RightColumn;
{
	/* {relatedProjects?.doc?.length && (
	<div className='bg-cardBg border border-gray-100 p-2 lg:p-6 rounded-lg h-[380px] md:h-[455px]'>
		<h3 className='text-xl font-bold mb-4'>Related Projects</h3>
		<ul className='space-y-4'>
			{relatedProjects?.doc?.map((relatedProject: any, i: number) => (
				<li key={i}>
					<Link
						href={`/projects/${relatedProject?._id}`}
						className='text-textBlue hover:underline flex items-center'
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
							className='h-4 w-4 mr-2 text-textBlue'
						>
							<path d='M9 18l6-6-6-6'></path>
						</svg>
						{relatedProject?.name}
					</Link>
				</li>
			))}
		</ul>
	</div>
)} */
}
