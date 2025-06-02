import type { Metadata } from 'next';
import './globals.css';
import '../styles/nprogress.css';
import ReduxProvider from '@/components/provider/ReduxProvider';
import LoadingProvider from '@/components/providers/LoadingProvider';

export const metadata: Metadata = {
	metadataBase: new URL('https://sinamm.mintapp.store'),
	icons: {
		icon: '/seo-image.png',
		shortcut: '/seo-image.png',
		apple: '/seo-image.png',
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
