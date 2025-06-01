'use client';
import RootLayout from '@/components/layout/RootLayout/RootLayout';
import BannerContent from '@/components/media-page/BannerContent';
import LeftCol from '@/components/media-page/details-section/LeftCol';
import MediaDetailSection from '@/components/media-page/details-section/MediaDetailSection';
import MediaGallery from '@/components/media-page/details-section/MediaGallery';
import RightCol from '@/components/media-page/details-section/RightCol';
import DetailsBanner from '@/components/media-page/DetailsBanner';
import { useGetAllQuery, useGetByIdQuery } from '@/store/services/commonApi';
import { useParams } from 'next/navigation';
import React from 'react';
import Container from '../home-page/Container';
import PageTitle from '../home-page/PageTitle';
import Subtitle from '../home-page/Subtitle';

const MeidaDetailsPage = ({ data }: any) => {
	// const {id} = useParams();
	// const { data, isLoading } = useGetByIdQuery({
	//   path: 'news',
	//   id,
	// })

	const { data: newsCategoryData } = useGetAllQuery({
		path: 'news-categories',
		sort: 'asc',
	});

	const formatDate = (dateString: string): string => {
		const date = new Date(dateString);
		return date.toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric',
		});
	};

	// console.log("hey", newsCategoryData)
	return (
		<RootLayout>
			<Container className='pt-12 md:pt-18'>
				<PageTitle className='pb-2'>{data?.name}</PageTitle>
				<Subtitle className='pb-4'>Published: {formatDate(data?.publishedDate)}</Subtitle>
				<DetailsBanner data={data}>{/* <BannerContent data={data} /> */}</DetailsBanner>

				<MediaDetailSection>
					<LeftCol data={data} />
					<RightCol
						data={newsCategoryData}
						anotherData={data}
					/>
				</MediaDetailSection>
				{/* <MediaGallery data={data} /> */}
			</Container>
		</RootLayout>
	);
};

export default MeidaDetailsPage;
