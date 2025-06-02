import type { Metadata } from 'next';
import './globals.css';
import '../styles/nprogress.css';
import ReduxProvider from '@/components/provider/ReduxProvider';
import LoadingProvider from '@/components/providers/LoadingProvider';

export const metadata: Metadata = {
	title: 'SINAMM ENGINEERING LIMITED',
	description:
		"Founded in 2008, SINAMM ENGINEERING LIMITED has grown to become one of Bangladesh's most trusted names in construction and engineering. Our team of experienced professionals brings innovation, quality, and reliability to every project we undertake.",
	icons: {
		icon: '/seo-image.png',
		shortcut: '/seo-image.png',
		apple: '/seo-image.png',
	},
	openGraph: {
		title: 'SINAMM ENGINEERING LIMITED',
		description:
			"Founded in 2008, SINAMM ENGINEERING LIMITED has grown to become one of Bangladesh's most trusted names in construction and engineering. Our team of experienced professionals brings innovation, quality, and reliability to every project we undertake.",
		url: 'https://sinammengineering.com',
		siteName: 'SINAMM Engineering Limited',
		images: [
			{
				url: '/DSC00128.JPG',
				width: 1200,
				height: 630,
				alt: 'SINAMM Engineering Limited',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'SINAMM ENGINEERING LIMITED',
		description:
			"Founded in 2008, SINAMM ENGINEERING LIMITED has grown to become one of Bangladesh's most trusted names in construction and engineering.",
		images: ['/DSC00128.JPG'],
	},
};

export default function Layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={` font-secondary bg-mainBg antialiased`}>
				<ReduxProvider>
					<LoadingProvider>
						<div className='min-h-[80vh] '>{children}</div>
					</LoadingProvider>
				</ReduxProvider>
			</body>
		</html>
	);
}
