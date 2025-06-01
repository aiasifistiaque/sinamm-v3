'use client';
import React, { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import MediaCard from '@/components/media-page/MediaCard';

type MediaFilter = 'all' | string;

type MediaContentProps = {
	data: any;
};
// Button configurations
const sortData: { label: string; value: any }[] = [
	{ label: 'Latest', value: '-publishedDate' },
	{ label: 'Oldest', value: 'publishedDate' },
];
const MediaContent: React.FC<MediaContentProps> = ({ data }) => {
	const router = useRouter();
	const searchParams = useSearchParams();
	const [newsFilter, setNewsFilter] = useState<MediaFilter>('all');
	const [filteredNews, setFilteredNews] = useState<any[]>([]);
	const [selectedSort, setSelectedSort] = useState<string | undefined>(undefined);
	const newsData = data;
	// console.log('selectedSort:', selectedSort);

	const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const sortVal = event?.target?.value;
		setSelectedSort(sortVal);
		// setActiveFilter(filter);
		const queryParams = new URLSearchParams({
			// type: activeFilter,
			...(sortVal && { sort: sortVal }),
		}).toString();
		router.push(`/media?${queryParams}`);
	};

	return (
		<div className='flex flex-col space-y-5'>
			<div className='flex justify-between'>
				{/* <h2 className='text-3xl font-semibold font-primary '>News</h2> */}

				<div className='flex w-[50%] justify-end items-center gap-2'>
					{/* <div className='flex items-center gap-4'>
						<h4 className='text-lg text-black font-semibold'>Sort By</h4>
						<div className='flex gap-2'>
							<select
								className='w-[180px] border border-button-border p-2 rounded-[12px]'
								onChange={handleSortChange}
								value={selectedSort || ''}>
								<option value=''>All</option>
								{sortData?.map((val: any, index: number) => (
									<option
										key={index}
										value={val?.value}>
										{val?.label}
									</option>
								))}
							</select>
						</div>
					</div> */}
					{/* <p className='text-lg font-primary'>Filter By Year</p> */}
				</div>
			</div>
			<div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2px]'>
				{newsData?.map((item: any, id: number) => (
					<MediaCard
						key={id}
						media={item}
					/>
				))}
			</div>
		</div>
	);
};

export default MediaContent;
