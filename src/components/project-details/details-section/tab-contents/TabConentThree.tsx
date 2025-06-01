"use client"
import React from 'react';
import { TabsContent } from '../Tabs';
import { TbEyeDotted } from 'react-icons/tb';
import { Spinner } from '@/components/ui';
import Lightbox from 'yet-another-react-lightbox';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Share from 'yet-another-react-lightbox/plugins/share';
// import Download from 'yet-another-react-lightbox/plugins/download';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import { useGetByIdQuery } from '@/store/services/commonApi';
import Image from 'next/image';


const TabConentThree = ({ id }: any) => {
	const { data, isLoading } = useGetByIdQuery({
		path: 'project-galleries',
		id,
	});
	// LIGHT BOX SETUP STARTS
	// State for lightbox
	const [isLightboxOpen, setIsLightboxOpen] = React.useState(false);
	const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
	const thumbnailsRef = React.useRef(null);

	// Map images to lightbox format
	const images =
		data?.images?.map((image: string, index: number) => ({
			src: image,
			alt: `Project image ${index + 1}`,
		})) || [];

	// Handlers for lightbox
	const openLightbox = (index: number) => {
		setCurrentImageIndex(index);
		setIsLightboxOpen(true);
	};

	const closeLightbox = () => {
		setIsLightboxOpen(false);
	};

	// LIGHT BOX SETUP ENDS
	return (
		<TabsContent value='gallery'>
			<h2 className='text-2xl font-bold mb-6'>Project Gallery</h2>
			{isLoading ? (
				<Spinner />
			) : (
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
					{images?.map((image: any, index: number) => (
						<div
							key={index}
							className='relative group overflow-hidden rounded-md cursor-pointer'
							onClick={() => openLightbox(index)}
						>
							<img
								src={image.src}
								alt={image.alt}
								className='w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110'
							/>
							<div className='absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-2 items-end p-4'>
								<p className='text-white font-semibold'>Quick View</p>
								<TbEyeDotted className='text-white' size={24} />
							</div>
						</div>
					))}
				</div>
			)}
			{isLightboxOpen && (
				<Lightbox
					slides={images}
					plugins={[Thumbnails, Share]}
					open={isLightboxOpen}
					index={currentImageIndex}
					close={closeLightbox}
					thumbnails={{ ref: thumbnailsRef }}
				/>
			)}
		</TabsContent>
	);
};

export default TabConentThree;
