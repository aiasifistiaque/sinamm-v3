import { PageLoader, Spinner } from '@/components/ui';
import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Footer } from '../footer';
import { NavV2 } from '../Navbar';
import { CtaSection } from '@/components/home-page';

const RootLayout = ({
	children,
	isLoading,
}: {
	children: React.ReactNode;
	isLoading?: any;
}) => {
	// if (isLoading) {
	// 	return <PageLoader />;
	// }
	return (
		<div className='min-h-screen w-full'>
			<Navbar />
			{/* <NavV2 /> */}
			{children}
			<CtaSection />
			<Footer />
		</div>
	);
};

export default RootLayout;
