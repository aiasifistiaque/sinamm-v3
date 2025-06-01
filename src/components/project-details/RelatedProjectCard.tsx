/* eslint-disable @next/next/no-img-element */
'use client';
import { useGetAllQuery } from '@/store/services/commonApi';
import Link from 'next/link';
// import { Link } from 'lucide-react';
import React from 'react';

const RelatedProjectCard = ({ data }: any) => {
	const { data: relatedProjects } = useGetAllQuery({
		path: 'projects',
		limit: 3,
		filters: {
			category: data?.category?._id,
		},
	});

	const relatedProjectsData = relatedProjects?.doc;

	console.log('related projects data::', relatedProjectsData);
	return (
		<div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
			{relatedProjectsData?.map((project: any, i: number) => (
				<div
					key={i}
					className='w-full h-auto bg-cardBg overflow-hidden'>
					<Link href={`/projects/${project?.category?._id}`}>
						<div className='w-full flex flex-col gap-0'>
							<div className='w-full h-[250px]'>
								<img
									src={project?.image}
									alt={'img'}
									className='w-full h-full object-cover'
								/>
							</div>

							<div className='p-2 px-3 uppercase'>
								<h3 className='text-xl font-primary font-normal text-mainText'>{project?.name}</h3>
							</div>
						</div>
					</Link>
				</div>
			))}
		</div>
	);
};

export default RelatedProjectCard;

// 'use client';
// import { useGetAllQuery } from '@/store/services/commonApi';
// import { Link } from 'lucide-react';
// import React from 'react';

// const RelatedProjectCard = ({ data }: any) => {
// 	// RelatedProjectCard
// 	const { data: relatedProjects } = useGetAllQuery({
// 		path: 'projects',
// 		filters: {
// 			category: data?.category?._id,
// 		},
// 	});

// 	console.log('related projects data::', relatedProjects);
// 	return (
// 		<div className='bg-cardBg rounded-[12px] overflow-hidden mt-4'>
// 			<Link href={`/projects/${project?._id}`}>
// 				<div className='h-72 overflow-hidden'>
// 					<img
// 						src={project?.image ? project?.image : '/ruppur.jpeg'}
// 						alt={'img'}
// 						className='w-full h-full object-cover'
// 					/>
// 				</div>
// 				<div className='py-4 p-6 h-full'>
// 					<h3 className='text-2xl font-primary font-bold text-mainText mb-2'>
// 						{truncatedName}
// 					</h3>
// 					{/* <div className='flex flex-wrap gap-2 mb-3'>
// 						<span
// 							className={`px-2 py-1 text-xs rounded-full ${
// 								project?.projectStatus === 'ongoing'
// 									? 'bg-blue-100 text-blue-900'
// 									: 'bg-green-100 text-green-800'
// 							}`}
// 						>
// 							{project?.projectStatus === 'ongoing' ? 'Ongoing' : 'Completed'}
// 						</span>
// 						<span className='px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-800'>
// 							{project?.category?.name}
// 						</span>
// 					</div> */}
// 					<p className='text-gray-500 text-xs mb-2'>{project.location}</p>
// 					<p className='text-gray-600 text-sm mb-4 line-clamp-3'>
// 						{parser(project?.shortDescription)}
// 					</p>
//
// 				</div>
// 			</Link>
// 		</div>
// 	);
// };

// export default RelatedProjectCard;
