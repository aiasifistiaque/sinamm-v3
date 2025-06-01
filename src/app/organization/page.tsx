import { OrganizationPage } from '@/components/organization';
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
		'Learn about the organizational structure of SINAMM ENGINEERING LIMITED. Explore our detailed organization chart, workforce statistics including engineers and equipment, and discover our sister concerns contributing to our success in the construction industry.';
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
			<OrganizationPage />
		</ScrollContainer>
	);
};

export default page;
