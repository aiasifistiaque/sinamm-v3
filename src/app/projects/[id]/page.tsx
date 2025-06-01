import { ProjectDetailsPageV2 } from '@/components/project-details';
import { ProjectDetailsPage } from '@/components/project-page';
// import { ProjectDetailsPage } from '@/components/project-page';
import { ScrollContainer } from '@/components/smooth-scroll';
import { getProjectGalleries } from '@/store/ssr';
import { getAproject } from '@/store/ssr/getAProject';
import { Metadata } from 'next';
import { useParams } from 'next/navigation';
import React from 'react';
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
export async function generateMetadata({ params }: any): Promise<Metadata> {
	const { id: projectId } = await params;

	const prodjectData = await getAproject(projectId);
	const title = 'SINAMM ENGINEERING LIMITED';
	const description =
		'Explore projects by SINAMM ENGINEERING LIMITED, a trusted construction company based in Dhaka. Specializing in building construction, Sinamm delivers high-quality infrastructure solutions across Bangladesh.';

	return {
		title,
		description,
		openGraph: {
			title: title,
			description: description,
			images: [prodjectData?.image],
			type: 'website',
			locale: 'en-us',
			url: `${BASE_URL}`,
			siteName: `${BASE_URL}`,
		},
	};
}
const SingleProject = async ({ params }: any) => {
	const paramsId = params?.id;
	// const { id } = useParams();
	// console.log('params id:', id);
	const singleProjectData: any = await getAproject(paramsId);
	const projectGallerieData: any = await getProjectGalleries(
		singleProjectData?.gallery?._id
	);

	console.log('root galery data:', projectGallerieData);
	return (
		<ScrollContainer>
			<ProjectDetailsPageV2
				data={singleProjectData}
				projectGallerieData={projectGallerieData}
			/>
			{/* <ProjectDetailsPage
				data={singleProjectData}
				projectGallerieData={projectGallerieData}
			/> */}
		</ScrollContainer>
	);
};

export default SingleProject;
