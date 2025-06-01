import { MediaPage } from '@/components/media-page';
import { ScrollContainer } from '@/components/smooth-scroll';
import { getMedias } from '@/store/ssr/media/getMedias';
import { Metadata } from 'next';
import React from 'react';

export async function generateMetadata({ params }: any, parent: any): Promise<Metadata> {
	// Check if data exists before using it
	const title = 'SINAMM ENGINEERING LIMITED';
	const description =
		'Stay updated with the latest news and announcements from SINAMM ENGINEERING LIMITED. Explore company updates, project milestones, industry insights, and events related to the construction sector in Bangladesh.';

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
const RootMediaPage = async ({ searchParams }: any) => {
	const sort = searchParams?.sort;
	const allMedias = await getMedias(sort);
	return (
		<ScrollContainer>
			<MediaPage data={allMedias?.doc} />
		</ScrollContainer>
	);
};

export default RootMediaPage;
