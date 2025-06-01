import { Badge } from 'lucide-react';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const BannerContent = ({ data: news }: any) => {
	const formatDate = (dateString: string): string => {
		const date = new Date(dateString);
		return date.toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric',
		});
	};
	return (
		<div className='max-w-3xl '>
			<div className='flex items-center mb-4'>
				<Link
					href='/media'
					className='text-textWhite flex items-center'>
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
						className='h-4 w-4 mr-2'>
						<path d='m15 18-6-6 6-6'></path>
					</svg>
					Back to Media
				</Link>
			</div>
			{/* <motion.h1
				className='text-2xl md:text-5xl text-textWhite font-primary font-bold mb-4'
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}>
				{news?.name}
			</motion.h1> */}
			<motion.div
				className='flex flex-wrap items-center gap-4 mb-6'
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5, delay: 0.2 }}>
				<p className='text-textWhite text-xs mb-1'>
					{formatDate(news?.publishedDate)}
					<span className='px-2 py-1 mx-2 text-xs rounded-full bg-blue-300 text-gray-800'>
						Read Time: {news?.readTime}
					</span>
					<span className='px-2 py-1 mx-2 text-xs rounded-full bg-blue-300 text-gray-800'>
						{news?.category?.name}
					</span>
				</p>
			</motion.div>
		</div>
	);
};

export default BannerContent;
