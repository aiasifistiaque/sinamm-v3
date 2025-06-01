'use client';

import React from 'react';
import { useGetAllQuery } from '@/store/services/commonApi';
import MediaCard from '@/components/media-page/MediaCard';
import ViewAllLink from '@/components/ui/ViewAllLink';

const NewsBody: React.FC = () => {
	const { data, isFetching } = useGetAllQuery({
		path: 'news',
		sort: '-createdAt',
		limit: 3,
		filters: {
			isFeatured: true,
		},
	});

	return (
		<div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2px]'>
			{data?.doc?.map((item: any) => (
				<MediaCard
					key={item.id}
					media={item}
				/>
			))}

			<div className='col-span-full flex justify-end'>
				<ViewAllLink
					href='/media'
					text='View All News'
					className='justify-end pt-8 items-center w-full'
				/>
			</div>
		</div>
	);
};

export default NewsBody;
