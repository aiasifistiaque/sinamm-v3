import { ScrollContainer } from '@/components/smooth-scroll';
import { TeamPage } from '@/components/team-page';
import { getOrgDepartments, getTeams } from '@/store/ssr/getTeam';
import { Metadata } from 'next';
import React from 'react';
export async function generateMetadata(
	{ params }: any,
	parent: any
): Promise<Metadata> {
	// Check if data exists before using it
	const title = 'SINAMM ENGINEERING LIMITED';
	const description =
		'SINAMM ENGINEERING LIMITED believes in teamwork. We feel proud to have a very strong team and we are confident to achieve our goals and objectives with accuracy. We are dedicated to provide the most efficient and effective skills in the Country. We are working continuously to improve our system to provide best and efficient services to our clients and also to match with the upcoming days.';
	const image = '/seo-image.jpg';
	//pulled fm joyant
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
	const teamsData = await getTeams();
	const orgDepartments = await getOrgDepartments();
	return (
		<ScrollContainer>
			<TeamPage data={teamsData?.doc} chartData={orgDepartments?.doc} />
		</ScrollContainer>
	);
};

export default page;
