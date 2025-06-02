/* eslint-disable @next/next/no-img-element */
'use client';

import { useGetAllQuery } from '@/store/services/commonApi';
import Link from 'next/link';
import React from 'react';
import { Box, Column, Grid, Image } from '@/components';

const RelatedProjectCard = ({ data }: any) => {
	const { data: relatedProjects } = useGetAllQuery({
		path: 'projects',
		limit: 4,
		filters: {
			category: data?.category?._id,
		},
	});

	return (
		<Grid className='w-full grid-cols-1 md:grid-cols-4 gap-[2px]'>
			{relatedProjects?.doc?.map(
				(project: any, i: number) =>
					project?._id !== data?._id && (
						<Box
							key={i}
							className='w-full h-auto bg-cardBg overflow-hidden'>
							<Link href={`/projects/${project?._id}`}>
								<Column className='w-full flex flex-col gap-0'>
									<Box className='w-full h-[200px]'>
										<Image
											objectFit='cover'
											src={project?.image}
											alt={'img'}
											className='w-full h-full'
										/>
									</Box>

									<Box className='p-2 px-3 uppercase'>
										<h3 className='text-lg leading-[1.3] font-normal text-mainText'>
											{project?.name}
										</h3>
									</Box>
								</Column>
							</Link>
						</Box>
					)
			)}
		</Grid>
	);
};

export default RelatedProjectCard;
