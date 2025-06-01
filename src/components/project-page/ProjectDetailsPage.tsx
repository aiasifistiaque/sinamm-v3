'use client';
import RootLayout from '@/components/layout/RootLayout/RootLayout';
import { BannerContent, DetailsBanner } from '@/components/project-details';
import {
	LeftTab,
	ProjectDetailSection,
} from '@/components/project-details/details-section';
import RightColumn from '@/components/project-details/details-section/RightColumn';
import { Spinner } from '@/components/ui';
import { useGetByIdQuery } from '@/store/services/commonApi';
import { useParams } from 'next/navigation';
import React from 'react';
import GallerySlider from '../project-details/GallerySlider';

const ProjectDetailsPage = ({ data, projectGallerieData }: any) => {
	const { id } = useParams();
	// console.log(id);
	// const { data, isLoading } = useGetByIdQuery({
	// 	path: 'projects',
	// 	id,
	// });
	// const { data, isLoading } = useGetByIdQuery({
	// 	path: 'project-galleries',
	// 	id: project?.gallery?._id,
	// });
	return (
		<RootLayout>
			{/* hero */}
			<DetailsBanner data={data}>
				<BannerContent data={data} />
			</DetailsBanner>

			{/* project details */}
			<ProjectDetailSection>
				<LeftTab project={data} />
				<div className='hidden md:block'>
					<RightColumn project={data} />
				</div>
				<div className='block md:hidden w-full h-full'>
					<GallerySlider data={projectGallerieData} />
				</div>
			</ProjectDetailSection>

			<ProjectDetailSection>
				<div className='hidden md:block col-span-3 w-full h-full'>
					<GallerySlider data={projectGallerieData} />
				</div>
				<div className='block md:hidden'>
					<RightColumn project={data} />
				</div>
			</ProjectDetailSection>
		</RootLayout>
	);
};

export default ProjectDetailsPage;
