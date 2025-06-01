'use client';

import React, { Suspense } from 'react';
import RootPage from '@/components/root/RootPage';
import RootLayout from '@/components/layout/RootLayout/RootLayout';
import MediaContent from '@/components/media-page/MediaContent';
import Container from '../home-page/Container';

type MediaPageProps = {
	data: any;
};

const MediaPage: React.FC<MediaPageProps> = ({ data }) => {
	return (
		<RootLayout>
			<Container className='pt-12 md:pt-18'>
				<RootPage
					headerText='Company Media, News & Updates'
					headerDescription='Stay updated with the latest announcements, achievements, and developments at Sinamm Engineering.'>
					<Suspense fallback={<p className='text-center'>Loading media...</p>}>
						<MediaContent data={data} />
					</Suspense>
				</RootPage>
			</Container>
		</RootLayout>
	);
};

export default MediaPage;
