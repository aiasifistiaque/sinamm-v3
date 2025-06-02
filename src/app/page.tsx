import { About, HeroSection, News, PartnerSection, ProjectSection } from '@/components/home-page';
import HomePage from '@/components/home-page/HomePage';
import PolicySection from '@/components/home-page/PolicySection/PolicySection';
import RootLayout from '@/components/layout/RootLayout/RootLayout';

import { getHero, getHomeProject, getPartners } from '@/store/ssr';
import { Metadata } from 'next';

export function generateMetadata({ params }: any, parent: any): Metadata {
	const title = 'SINAMM ENGINEERING LIMITED';
	const description =
		"Founded in 2008, SINAMM ENGINEERING LIMITED has grown to become one of Bangladesh's most trusted names in construction and engineering. Our team of experienced professionals brings innovation, quality, and reliability to every project we undertake.";

	return {
		title,
		description,
		metadataBase: new URL('https://sinamm.mintapp.store'),
		authors: [{ name: 'SINAMM Engineering Limited' }],
		keywords: ['construction', 'engineering', 'Bangladesh', 'infrastructure', 'building', 'Dhaka'],
		openGraph: {
			title: 'SINAMM ENGINEERING LIMITED',
			description,
			url: 'https://sinamm.mintapp.store',
			siteName: 'SINAMM Engineering Limited',
			images: [
				{
					url: 'https://sinamm.mintapp.store/DSC00128.jpeg',
					width: 1200,
					height: 900,
					alt: 'SINAMM Engineering Limited - Construction and Engineering Excellence',
					type: 'image/jpeg',
				},
				{
					// Fallback image
					url: 'https://sinamm.mintapp.store/seo-image.jpg',
					width: 1200,
					height: 630,
					alt: 'SINAMM Engineering Limited',
					type: 'image/jpeg',
				},
			],
			locale: 'en_US',
			type: 'website',
		},
		twitter: {
			card: 'summary_large_image',
			title: 'SINAMM ENGINEERING LIMITED',
			description,
			images: ['https://sinamm.mintapp.store/social-share.jpg'],
			creator: '@sinammengineering',
		},
		alternates: {
			canonical: 'https://sinamm.mintapp.store',
		},
		robots: {
			index: true,
			follow: true,
			googleBot: {
				index: true,
				follow: true,
				'max-video-preview': -1,
				'max-image-preview': 'large',
				'max-snippet': -1,
			},
		},
		verification: {
			google: 'your-google-verification-code',
			// Add other verification codes as needed
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
