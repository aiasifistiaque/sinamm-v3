import { AboutPage } from '@/components/about-page';
import { ScrollContainer } from '@/components/smooth-scroll';
import { Metadata } from 'next';
import React from 'react';

export async function generateMetadata({ params }: any, parent: any): Promise<Metadata> {
	// Check if data exists before using it
	const title = 'SINAMM ENGINEERING LIMITED';
	const description =
		'SINAMM ENGINEERING LIMITED named as SINAMM was conceived and formed in the year 2004 by a team of qualified Engineers and other professionals possessing long standing experience in various fields of Constructional activities with a vision and mission and to play a significant role in development and construction sector in near future. For inquiries, you can contact at +88-02-55029316 to 21.';
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
			<AboutPage />
		</ScrollContainer>
	);
};

export default page;
