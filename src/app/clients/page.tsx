import { ClientPage } from '@/components/client-page';
import { ScrollContainer } from '@/components/smooth-scroll';
import { getPartners } from '@/store/ssr';
import { Metadata } from 'next';
import React from 'react';
export async function generateMetadata(
	{ params }: any,
	parent: any
): Promise<Metadata> {
	// Check if data exists before using it
	const title = 'SINAMM ENGINEERING LIMITED';
	const description =
		'Discover the valued clients of SINAMM ENGINEERING LIMITED. We are proud to work with leading organizations across Bangladesh, delivering reliable and high-quality construction solutions tailored to their needs.';
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
const page = async () => {
	const partnersData = await getPartners();
	return (
		<ScrollContainer>
			<ClientPage data={partnersData?.doc} />
		</ScrollContainer>
	);
};

export default page;
