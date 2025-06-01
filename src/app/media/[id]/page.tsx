import { MeidaDetailsPage } from '@/components/media-page';
import { ScrollContainer } from '@/components/smooth-scroll';
import { getAmedia } from '@/store/ssr';
import { Metadata } from 'next';
import React from 'react';
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
export async function generateMetadata({ params }: any): Promise<Metadata> {
	const { id: projectId } = await params;

	const data = await getAmedia(projectId);
	const title = 'SINAMM ENGINEERING LIMITED';
	const description =
		'Explore projects by SINAMM ENGINEERING LIMITED, a trusted construction company based in Dhaka. Specializing in building construction, Sinamm delivers high-quality infrastructure solutions across Bangladesh.';

	return {
		title,
		description,
		openGraph: {
			title: title,
			description: description,
			images: [data?.coverImage],
			type: 'website',
			locale: 'en-us',
			url: `${BASE_URL}`,
			siteName: `${BASE_URL}`,
		},
	};
}

const page = async ({ params }: any) => {
	const id = params?.id;
	// getAmedia
	const mediaData = await getAmedia(id);
	return (
		<ScrollContainer>
			<MeidaDetailsPage data={mediaData} />
		</ScrollContainer>
	);
};

export default page;
