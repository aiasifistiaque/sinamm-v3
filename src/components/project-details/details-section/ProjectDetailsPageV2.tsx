// 'use client';
import RootLayout from '@/components/layout/RootLayout/RootLayout';
import React from 'react';
import { HeroSlider, ProjectOverview } from '../v2';
import RelatedProjectCard from '../RelatedProjectCard';
import PageTitle from '@/components/home-page/PageTitle';
import Container from '@/components/home-page/Container';
import ImageGallery from './tab-contents/ImageGallery';

const ProjectDetailsPageV2 = ({ data, projectGallerieData }: any) => {
	return (
		<RootLayout>
			<Container>
				<div>
					<div className='pt-14 md:pt-20'>
						<PageTitle>{data?.name}</PageTitle>
						<p className='text-gray-600 text-[12px] lg:text-[16px] tracking-[0.2px] my-2 lg:mb-6'>
							{data?.location}
						</p>
					</div>
					{/* slider */}
					<HeroSlider
						data={projectGallerieData}
						id={data?.gallery?._id}
						image={data?.image}
					/>
				</div>
				{/* project details */}

				<ProjectOverview data={data} />

				{/* gallery image */}
				{/* <div className='mt-10 lg:mt-18'>
					<TabConentThreeV2 projectGallerieData={projectGallerieData} />
				</div> */}
				<div className='mt-10 lg:mt-18'>
					<ImageGallery id={data?.gallery?._id} />
				</div>
				{/* related projects */}
				<div className='mt-10 lg:mt-18'>
					<PageTitle className='mb-4 text-4xl font-primary md:text-[50px]'>
						Related Projects
					</PageTitle>
					<RelatedProjectCard data={data} />
				</div>
			</Container>
		</RootLayout>
	);
};

export default ProjectDetailsPageV2;
