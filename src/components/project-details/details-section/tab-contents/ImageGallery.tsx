'use client';
import React from 'react';

import { TbEyeDotted } from 'react-icons/tb';

import Lightbox from 'yet-another-react-lightbox';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Share from 'yet-another-react-lightbox/plugins/share';

import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';

import PageTitle from '@/components/home-page/PageTitle';
import { Grid, Image } from '@/components';
import { useGetByIdQuery } from '@/store/services/commonApi';

const ImageGallery = ({ id }: { id: string }) => {
	const { data, isFetching } = useGetByIdQuery({
		path: 'project-galleries',
		id: id,
	});
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

	if (isFetching) return;

	// LIGHT BOX SETUP ENDS
	return (
		<>
			<PageTitle>Image Gallery</PageTitle>
			<Grid className='pt-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2px]'>
				{data?.images?.map((image: any, index: number) => (
					<div
						key={index}
						className='relative group overflow-hidden cursor-pointer'
						onClick={() => openLightbox(index)}>
						<Image
							src={image}
							alt={`Project image ${index + 1}`}
							objectFit='cover'
							className='w-full h-64 transition-transform duration-500 group-hover:scale-110'
						/>
						<div className='absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-2 items-end p-4'>
							<p className='text-white font-semibold'>Quick View</p>
							<TbEyeDotted
								className='text-white'
								size={24}
							/>
						</div>
					</div>
				))}
			</Grid>

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
		</>
	);
};

export default ImageGallery;
