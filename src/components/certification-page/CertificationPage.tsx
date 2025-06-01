'use client';
import RootPage from '@/components/root/RootPage';
import React, { useState, useRef } from 'react';
import { motion, Variants } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Award } from 'lucide-react';
import parser from 'html-react-parser';
import { dateFormater } from '@/lib/dateFormater';

import Lightbox from 'yet-another-react-lightbox';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Share from 'yet-another-react-lightbox/plugins/share';
// import Download from 'yet-another-react-lightbox/plugins/download';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import { Spinner } from '@/components/ui';
import RootLayout from '@/components/layout/RootLayout/RootLayout';
import Container from '../home-page/Container';

// Type definitions
interface Certification {
	_id: string;
	name: string;
	issuedBy: string;
	shortDescription: string;
	issuedDate: string;
	certificateValue?: string;
	validityTime?: string;
	images: string[];
}

interface CertificationResponse {
	doc: Certification[];
}

interface LightboxImage {
	src: string;
	alt: string;
}

// Framer Motion variants
const container: Variants = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.2,
		},
	},
};

const item: Variants = {
	hidden: { opacity: 0, y: 20 },
	show: { opacity: 1, y: 0 },
};

const CertificatePage = ({ data }: any) => {
	// console.log('server dta::', data);

	const [isLightboxOpen, setIsLightboxOpen] = useState(false);
	const [currentImageIndex, setCurrentImageIndex] = useState(0);
	const [selectedCertImages, setSelectedCertImages] = useState<LightboxImage[]>([]);
	const thumbnailsRef = useRef<any>(null);
	const [hoveredCert, setHoveredCert] = useState<string | null>(null);
	// const { data, isLoading } = useGetAllQuery<any>({
	// 	path: 'certifications',
	// });

	// Handlers for lightbox
	const openLightbox = (cert: Certification, startIndex: number = 0) => {
		const images = cert.images.map((image, index) => ({
			src: image,
			alt: `${cert.name} image ${index + 1}`,
		}));
		setSelectedCertImages(images);
		setCurrentImageIndex(startIndex);
		setIsLightboxOpen(true);
	};

	const closeLightbox = () => {
		setIsLightboxOpen(false);
		setSelectedCertImages([]);
	};

	if (!data?.length) {
		return (
			<RootPage
				headerDescription='SINAMM ENGINEERING LIMITED is proud to maintain the highest standards of quality, safety, and environmental responsibility through these industry-recognized certifications.'
				headerText='Work Certifications of sinamm Engineering Limited'>
				<div className='pt-8 text-center'>No certifications found.</div>
			</RootPage>
		);
	}

	return (
		<RootLayout>
			<Container>
				<RootPage
					headerDescription='SINAMM ENGINEERING LIMITED is proud to maintain the highest standards of quality, safety, and environmental responsibility through these industry-recognized certifications.'
					headerText='Certifications & Recognitions of SINAMM Engineering Limited'>
					<motion.div
						className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2px]'
						variants={container}
						initial='hidden'
						animate='show'>
						{data?.map((cert: any) => (
							<motion.div
								key={cert?._id}
								variants={item}
								className='rounded-card overflow-hidden relative'>
								<Card
									className='h-full overflow-hidden cursor-pointer relative'
									onMouseEnter={() => setHoveredCert(cert?._id)}
									onMouseLeave={() => setHoveredCert(null)}
									onClick={() => openLightbox(cert)} // Open lightbox on card click
								>
									<div className='relative h-[300px] overflow-hidden'>
										{cert?.images[0] ? (
											<img
												src={cert?.images[0]}
												alt={cert?.name}
												className='w-full h-full object-cover transition-transform duration-500 object-top'
												style={{
													transform: hoveredCert === cert._id ? 'scale(1.05)' : 'scale(1)',
												}}
												onClick={e => {
													e.stopPropagation(); // Prevent card click from firing
													openLightbox(cert, 0); // Open lightbox at first image
												}}
											/>
										) : (
											<div className='w-full h-full bg-gray-200 flex items-center justify-center'>
												<span className='text-gray-500'>No image available</span>
											</div>
										)}
										<div className='absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end pointer-events-none'>
											<div className='p-4 text-white'>
												<div className='flex items-center'>
													<Award className='h-5 w-5 mr-2 text-blue-300' />
													<span className='font-medium'>
														Issued: {dateFormater(cert?.issuedDate)}
													</span>
												</div>
												{cert?.validityTime && (
													<div className='text-sm opacity-80 mt-1'>
														Valid until: {dateFormater(cert?.validityTime)}
													</div>
												)}
											</div>
										</div>
									</div>
									<div className='bg-cardBg relative z-[10] mt-[-12px]'>
										<CardHeader className='pb-2 mt-2'>
											<CardTitle className='h-auto md:min-h-[120px] lg:h-auto text-2xl text-mainText pt-[24px]'>
												{cert?.name}
											</CardTitle>
											<p className='text-sm text-gray-500'>Issued by: {cert?.issuedBy}</p>
											<p className='text-sm text-gray-500'>
												Certificate Value: {cert?.certificateValue}
											</p>
										</CardHeader>

										<CardContent>
											<p className='text-gray-600 line-clamp-6 text-[14px]'>
												{parser(cert?.shortDescription)}
											</p>
										</CardContent>
									</div>
								</Card>
							</motion.div>
						))}
					</motion.div>

					<Lightbox
						open={isLightboxOpen}
						close={closeLightbox}
						slides={selectedCertImages}
						index={currentImageIndex}
						plugins={[Thumbnails, Share]}
						thumbnails={{ ref: thumbnailsRef }}
						on={{
							click: () => thumbnailsRef.current?.toggle?.(),
						}}
					/>
				</RootPage>
			</Container>
		</RootLayout>
	);
};

export default CertificatePage;
