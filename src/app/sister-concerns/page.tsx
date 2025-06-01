import { SisterConcernPage } from '@/components/sister-concern';
import { ScrollContainer } from '@/components/smooth-scroll';
import { Metadata } from 'next';
import React from 'react';

export async function generateMetadata(
	{ params }: any,
	parent: any
): Promise<Metadata> {
	// Check if data exists before using it
	const title = 'SINAMM ENGINEERING LIMITED';
	const description =
		'Explore the sister concerns of SINAMM ENGINEERING LIMITED. Learn how our affiliated companies contribute to a diverse portfolio of services, supporting our mission to lead the construction and infrastructure industry in Bangladesh.';

		const image = '/seo-image.jpg';

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
			<SisterConcernPage />
		</ScrollContainer>
	);
};

export default page;
