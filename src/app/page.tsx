import { Container, PageTitle } from '@/components';
import {
	About,
	CtaSection,
	Gallery,
	HeroSection,
	HeroV2,
	News,
	PartnerSection,
	ProjectSection,
} from '@/components/home-page';
import HomePage from '@/components/home-page/HomePage';
import PolicySection from '@/components/home-page/PolicySection/PolicySection';
import RootLayout from '@/components/layout/RootLayout/RootLayout';

import { getHero, getHomeProject, getPartners } from '@/store/ssr';
import { Metadata, ResolvingMetadata } from 'next';

export async function generateMetadata({ params }: any, parent: any): Promise<Metadata> {
	// Check if data exists before using it
	const title = 'SINAMM ENGINEERING LIMITED';
	const description =
		'SINAMM ENGINEERING LIMITED is based in Dhaka, within the Dhaka Division. The company operates in the building construction industry. For inquiries, you can contact them at +88-02-55029316 to 21.';
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

const Home = async () => {
	const heroData = await getHero();
	const projectsData = await getHomeProject();
	const partnersData = await getPartners();

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
