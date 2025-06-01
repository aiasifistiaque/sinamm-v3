import { CertificationPage } from '@/components/certification-page';
import { ScrollContainer } from '@/components/smooth-scroll';
import { getCertificates } from '@/store/ssr/certification';
import { Metadata } from 'next';
import React from 'react';
export async function generateMetadata({ params }: any, parent: any): Promise<Metadata> {
	// Check if data exists before using it
	const title = 'SINAMM ENGINEERING LIMITED';
	const description =
		'View the certifications and accreditations earned by SINAMM ENGINEERING LIMITED. Our national and international certifications reflect our commitment to quality, safety, and excellence in the construction industry of Bangladesh.';

	const image = '/seo-image.png';
	//heelo
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
	const certificatesData = await getCertificates();
	return (
		<ScrollContainer>
			<CertificationPage data={certificatesData?.doc} />
		</ScrollContainer>
	);
};

export default page;
