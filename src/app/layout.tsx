import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar/Navbar';
import { Footer } from '@/components/layout/footer';
import ReduxProvider from '@/components/provider/ReduxProvider';

// const geistSans = Geist({
// 	variable: '--font-geist-sans',
// 	subsets: ['latin'],
// });

// const geistMono = Geist_Mono({
// 	variable: '--font-geist-mono',
// 	subsets: ['latin'],
// });

export const metadata: Metadata = {
	title: 'SINAMM ENGINEERING LIMITED',
	description:
		'SINAMM ENGINEERING LIMITED is based in Dhaka, within the Dhaka Division. The company operates in the building construction industry. For inquiries, you can contact them at +88-02-55029316 to 21.',
	icons: '/seo-image.png',
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
					<div className='min-h-[80vh] '>{children}</div>
				</ReduxProvider>
			</body>
		</html>
	);
}
