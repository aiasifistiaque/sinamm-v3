// components/media/MediaCard.tsx
import React from 'react';
import parse from 'html-react-parser';
import Link from 'next/link';
import { Pi } from 'lucide-react';
import { PiArrowUpRightThin } from 'react-icons/pi';

export interface MediaItem {
	id: string;
	name: string;
	category: { name: string };
	publishedDate: string;
	coverImage: string;
	shortDescription: string;
}

interface MediaCardProps {
	media: MediaItem;
	linkBasePath?: string; // e.g., "/media", "/blog", etc.
}

const MediaCard: React.FC<MediaCardProps> = ({ media, linkBasePath = '/media' }: any) => {
	const formatDate = (dateString: string): string => {
		const date = new Date(dateString);
		return date.toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric',
		});
	};

	return (
		<Link
			href={`${linkBasePath}/${media?._id}` || '/'}
			className='overflow-hidden border-none flex flex-col'>
			<div className='h-80 overflow-hidden'>
				<img
					src={media?.coverImage}
					alt={media?.name}
					className='w-full h-full object-cover rounded-card'
				/>
			</div>

			<div className='flex flex-col uppercase justify-between pr-2 flex-grow py-4'>
				<div className='mb-2 h-20 pr-4'>
					<p className='text-gray-500 text-xs mb-1'>{formatDate(media?.publishedDate)}</p>
					<h3 className='text-[22px] leading-[1.2] tracking-[-.5px] pt-2 font-primary text-mainText line-clamp-2'>
						{media?.name}
					</h3>
				</div>

				{/* <div className="text-sm text-gray-700 mb-3 h-16 line-clamp-3 overflow-hidden">
          {parse(media?.shortDescription)}
        </div> */}

				<Link
					href={`${linkBasePath}/${media?._id}` || '/'}
					className='itelic text-blue-900 font-medium text-sm hover:underline mt-2'>
					Read More{' '}
					<PiArrowUpRightThin
						className='inline-block ml-1 text-mainText'
						size={14}
					/>
				</Link>
			</div>
		</Link>
	);
};

export default MediaCard;
