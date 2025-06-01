'use client';
import { useGetAllQuery } from '@/store/services/commonApi';
import React from 'react';
import RootPage from '@/components/root/RootPage';
import { ClientCard } from '@/components/PartnerPage';
import RootLayout from '@/components/layout/RootLayout/RootLayout';
import Container from '../home-page/Container';
const ClientPage = ({ data }: any) => {
	// const { data: clients, isLoading } = useGetAllQuery({
	// 	path: 'partners',
	// 	limit: 999,
	// });
	return (
		<RootLayout>
			<Container>
				<RootPage
					headerText='Meet our clients and industry partners'
					headerDescription='Meet our satisfied clients here. We are proud to work with them and their projects.'>
					<div className='grid grid-cols-2 sm:grid-cols-4 gap-[3px]'>
						{data?.map((client: any, index: number) => (
							<ClientCard
								key={index}
								name={client?.name}
								images={client?.images}
							/>
						))}
					</div>
				</RootPage>
			</Container>
		</RootLayout>
	);
};

export default ClientPage;
