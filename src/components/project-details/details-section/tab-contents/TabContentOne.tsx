import React from 'react';
import { TabsContent } from '../Tabs';
import parse from 'html-react-parser';
import { useGetByIdQuery } from '@/store/services/commonApi';
import GallerySlider from '../../GallerySlider';
const TabContentOne = ({ project }: any) => {
	console.log('overview tab::', project);
	// const { data, isLoading } = useGetByIdQuery({
	// 	path: 'project-galleries',
	// 	id: project?.gallery?._id,
	// });
	// console.log('gallery data::', data);
	return (
		<TabsContent value='overview' className='space-y-6'>
			<div className='flex w-full flex-col-reverse md:flex-col gap-8'>
				{project?.shortDescription && (
					<div className=''>
						<h2 className='text-4xl font-bold mb-4'>Project Description</h2>
						<div className='text-gray-600'>
							{parse(project?.shortDescription || '')}
						</div>
					</div>
				)}
				{/* <div className=''>
					<GallerySlider data={data} />
				</div> */}
			</div>
		</TabsContent>
	);
};

export default TabContentOne;
