import Link from 'next/link';
import React from 'react';
import { useGetAllQuery } from '@/store/services/commonApi';

const RightCol = ({ data: newsCategories, anotherData: currentNews }: any) => {
	// Get recent news from the same category
	const { data: recentNewsData } = useGetAllQuery({
		path: 'news',
		sort: 'desc',
		limit: 5,
	});

	// Filter out the current news item from recent news
	const filteredRecentNews =
		recentNewsData?.doc?.filter(
			(news: any) =>
				news._id !== currentNews?._id && news?.category?.name === currentNews?.category?.name
		) || [];

	return (
		<div className='lg:col-span-1'>
			{/* Recent News */}
			<div className='border border-gray-100 pb-6 md:pl-8 rounded-card '>
				<h3 className='text-xl font-primary font-normal mb-4'>Recent News</h3>
				{filteredRecentNews && filteredRecentNews?.length > 0 ? (
					<ul className='space-y-4'>
						{filteredRecentNews.slice(0, 4).map((related: any) => (
							<li key={related._id}>
								<Link
									href={`/media/${related._id}`}
									className='text-textBlue hover:underline flex items-center'>
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
										className='size-10 mr-2 text-textBlue'>
										<path d='M9 18l6-6-6-6'></path>
									</svg>
									<span className='line-clamp-2'>{related?.name}</span>
								</Link>
								<div className='mt-1 text-sm text-gray-500'>
									{related.createdAt
										? new Date(related.createdAt).toLocaleDateString('en-US', {
												year: 'numeric',
												month: 'short',
										  })
										: 'Recent'}
								</div>
							</li>
						))}
					</ul>
				) : (
					<p className='text-gray-500'>No recent news available</p>
				)}
				<div className='mt-6'>
					<Link
						href='/media'
						className='hover:text-textBlue font-medium hover:underline inline-flex items-center'>
						View All News
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
							className='ml-1 h-4 w-4'>
							<line
								x1='5'
								y1='12'
								x2='19'
								y2='12'></line>
							<polyline points='12 5 19 12 12 19'></polyline>
						</svg>
					</Link>
				</div>
			</div>

			{/* Categories */}
		</div>
	);
};

export default RightCol;
