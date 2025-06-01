import { MachineryPage } from '@/components/machinary-page';
import { ScrollContainer } from '@/components/smooth-scroll';
import { getMachineries, getMachineryCategoies } from '@/store/ssr';
import { Metadata } from 'next';
import React from 'react';

export async function generateMetadata(
	{ params }: any,
	parent: any
): Promise<Metadata> {
	// Check if data exists before using it
	const title = 'SINAMM ENGINEERING LIMITED';
	const description =
		'Explore the advanced construction machinery and equipment used by SINAMM ENGINEERING LIMITED. Our modern fleet ensures efficiency, precision, and safety across all building projects in Bangladesh.';
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
// machinery
const page = async ({ searchParams }: any) => {
	// const type = (searchParams?.type || 'all') as any;
	const type: any = searchParams?.type || 'all';
	const machineriesData: any = await getMachineries(type);
	const machineryCategories = await getMachineryCategoies();

	return (
		<ScrollContainer>
			<MachineryPage
				data={machineriesData?.doc as any}
				categories={machineryCategories?.doc}
			/>
		</ScrollContainer>
	);
};

export default page;
