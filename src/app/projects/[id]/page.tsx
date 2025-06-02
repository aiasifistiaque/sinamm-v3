import { ProjectDetailsPageV2 } from '@/components/project-details';
import { ScrollContainer } from '@/components/smooth-scroll';
import { getAproject } from '@/store/ssr/getAProject';
import { Metadata } from 'next';
import { cache } from 'react';

import React from 'react';

// Cache the project data to avoid duplicate API calls
const getCachedProject = cache(async (id: string) => {
	return await getAproject(id);
});

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export async function generateMetadata({ params }: any): Promise<Metadata> {
	const { id: projectId } = await params;

	const projectData = await getCachedProject(projectId);
	const projectTitle = projectData?.name || 'Project';
	const title = `${projectTitle} - SINAMM ENGINEERING LIMITED`;
	const description =
		projectData?.description ||
		'Explore projects by SINAMM ENGINEERING LIMITED, a trusted construction company based in Dhaka. Specializing in building construction, Sinamm delivers high-quality infrastructure solutions across Bangladesh.';

	return {
		title,
		description,
		openGraph: {
			title: title,
			description: description,
			images: projectData?.image ? [projectData.image] : ['/seo-image.jpg'],
			type: 'website',
			url: `https://sinammengineering.com/projects/${projectId}`,
			siteName: 'SINAMM ENGINEERING LIMITED',
		},
		twitter: {
			card: 'summary_large_image',
			title,
			description,
			images: projectData?.image ? [projectData.image] : ['/seo-image.jpg'],
		},
		alternates: {
			canonical: `https://sinammengineering.com/projects/${projectId}`,
		},
	};
}

const SingleProject = async ({ params }: any) => {
	const { id: projectId } = await params;

	const singleProjectData: any = await getCachedProject(projectId);
	//const projectGallerieData: any = await getProjectGalleries(singleProjectData?.gallery?._id);

	return (
		<ScrollContainer>
			<ProjectDetailsPageV2
				data={singleProjectData}
				// projectGallerieData={projectGallerieData}
			/>
		</ScrollContainer>
	);
};

export default SingleProject;
