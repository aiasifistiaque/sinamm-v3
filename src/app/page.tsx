import { About, HeroSection, News, PartnerSection, ProjectSection } from '@/components/home-page';
import HomePage from '@/components/home-page/HomePage';
import PolicySection from '@/components/home-page/PolicySection/PolicySection';
import RootLayout from '@/components/layout/RootLayout/RootLayout';

import { getHero, getHomeProject, getPartners } from '@/store/ssr';
import { Metadata } from 'next';

export function generateMetadata({ params }: any, parent: any): Metadata {
	// Check if data exists before using it
	const title = 'SINAMM ENGINEERING LIMITED';
	const description =
		'SINAMM ENGINEERING LIMITED is based in Dhaka, within the Dhaka Division. The company operates in the building construction industry. For inquiries, you can contact them at +88-02-55029316 to 21.';
	//heelo
	return {
		title,
		description,
		openGraph: {
			title: 'SINAMM ENGINEERING LIMITED',
			description:
				"Founded in 2008, SINAMM ENGINEERING LIMITED has grown to become one of Bangladesh's most trusted names in construction and engineering. Our team of experienced professionals brings innovation, quality, and reliability to every project we undertake.",
			url: 'https://sinammengineering.com',
			siteName: 'SINAMM Engineering Limited',
			images: [
				{
					url: '/DSC00128.jpeg',
					width: 1200,
					height: 630,
					alt: 'SINAMM Engineering Limited',
				},
			],
			locale: 'en_US',
			type: 'website',
		},
	};
}

const Home = async () => {
	// Fetch all data in parallel for better performance
	const [heroData, projectsData, partnersData] = await Promise.all([
		getHero(),
		getHomeProject(),
		getPartners(),
	]);

	return (
		<HomePage>
			<RootLayout>
				<div className='flex flex-col bg-mainBg md:gap-[64px] gap-[40px]'>
					{/* <PageTitle>Sinamm engineering limited, your trusted construction partner</PageTitle> */}
					<HeroSection data={heroData} />

					<About />
					<PolicySection />
					{/* <Service /> */}
					<ProjectSection data={projectsData?.doc} />
					<PartnerSection data={partnersData?.doc} />
					{/* <Gallery /> */}
					<News />
				</div>
			</RootLayout>
		</HomePage>
	);
};
export default Home;
