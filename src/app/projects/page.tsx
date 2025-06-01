import React, { useState } from 'react';

import { Metadata } from 'next';
import ProjectsPage from '@/components/project-page/ProjectsPage';
import { ScrollContainer } from '@/components/smooth-scroll';
import { getCategories, getProjects } from '@/store/ssr/project';
export async function generateMetadata({ params }: any, parent: any): Promise<Metadata> {
	// Check if data exists before using it
	const title = 'SINAMM ENGINEERING LIMITED';
	const description =
		'Explore projects by SINAMM ENGINEERING LIMITED, a trusted construction company based in Dhaka. Specializing in building construction, Sinamm delivers high-quality infrastructure solutions across Bangladesh. For inquiries, you can contact at +88-02-55029316 to 21.';
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

const RootProjectPage = async ({ searchParams }: any) => {
	const resolvedSearchParams = await searchParams;
	const type = (resolvedSearchParams?.type || 'all') as any;
	// const category = resolvedSearchParams?.category;
	// const catFilter = resolvedSearchParams?.filter;
	const categoriesData = await getCategories();
	const allProjects = await getProjects(type, '');

	const ui = (
		<p>
			<span className='font-bold text-2xl lg:text-6xl uppercase'>{type}Projects</span>{' '}
			<span>({allProjects?.doc?.length})</span>
		</p>
	);
	return (
		<ScrollContainer>
			<ProjectsPage
				title={`${type} Projects`}
				docs={allProjects?.totalDocs}
				data={allProjects?.doc}
				ui={ui}
				categories={categoriesData?.doc}
			/>
		</ScrollContainer>
	);
};

export default RootProjectPage;
