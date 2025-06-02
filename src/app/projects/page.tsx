import React, { useState } from 'react';

import { Metadata } from 'next';
import ProjectsPage from '@/components/project-page/ProjectsPage';
import { ScrollContainer } from '@/components/smooth-scroll';
import { getProjects } from '@/store/ssr/project';

// Static metadata for maximum performance - no function overhead
export const metadata: Metadata = {
	title: 'Projects - SINAMM ENGINEERING LIMITED',
	description:
		'Explore construction projects by SINAMM ENGINEERING LIMITED, a trusted construction company based in Dhaka. Specializing in building construction, infrastructure development, and engineering solutions across Bangladesh.',
	openGraph: {
		title: 'Projects - SINAMM ENGINEERING LIMITED',
		description:
			'Explore construction projects by SINAMM ENGINEERING LIMITED, a trusted construction company based in Dhaka. Specializing in building construction, infrastructure development, and engineering solutions across Bangladesh.',
		images: [
			{
				url: '/seo-image.jpg',
				width: 1200,
				height: 630,
				alt: 'SINAMM Engineering Projects',
			},
		],
		type: 'website',
		url: 'https://sinammengineering.com/projects',
		siteName: 'SINAMM ENGINEERING LIMITED',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Projects - SINAMM ENGINEERING LIMITED',
		description:
			'Explore construction projects by SINAMM ENGINEERING LIMITED, a trusted construction company based in Dhaka.',
		images: ['/seo-image.jpg'],
	},
	alternates: {
		canonical: 'https://sinammengineering.com/projects',
	},
};

const RootProjectPage = async ({ searchParams }: any) => {
	const resolvedSearchParams = await searchParams;
	const type = (resolvedSearchParams?.type || 'all') as any;
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
			/>
		</ScrollContainer>
	);
};

export default RootProjectPage;
