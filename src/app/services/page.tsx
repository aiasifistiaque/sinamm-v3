import { ServicePage } from '@/components/service-page';
import { ScrollContainer } from '@/components/smooth-scroll';
import { Metadata } from 'next';
import React from 'react';

export async function generateMetadata({ params }: any, parent: any): Promise<Metadata> {
	// Check if data exists before using it
	const title = 'SINAMM ENGINEERING LIMITED';
	const description =
		'Discover SINAMM ENGINEERING LIMITED core fields of specialization in the construction industry. From civil engineering to infrastructure development, we bring innovation, quality, and expertise to every project across Bangladesh.';

	const image = '/seo-image.png';

	return {
		title,
		description,
		openGraph: {
			title,
			description,
			// images: image ? [image] : previousImages,
			images: image,
			type: 'website',
			locale: 'en-US',
			url: 'https://sinamm-frontend.vercel.app',
			siteName: title,
		},
	};
}
const page = () => {
	return (
		<ScrollContainer>
			<ServicePage />
		</ScrollContainer>
	);
};

export default page;
