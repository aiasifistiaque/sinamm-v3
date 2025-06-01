'use client';
import RootLayout from '@/components/layout/RootLayout/RootLayout';
import OrganizationChart from '@/components/organization/FinallOrganizationChart';
import Workforce from '@/components/organization/Workforce';

import RootPage from '@/components/root/RootPage';
import SectionIntro from '@/components/ui/SectionIntro';
import { useGetAllQuery } from '@/store/services/commonApi';
import React from 'react';

const OrganizationPage = () => {
	// replace wiht actual endopint path
	const { data, isLoading } = useGetAllQuery({
		path: 'department-categories',
		sort: '-priority',
		limit: 999,
	});
	return (
		<RootLayout isLoading={isLoading}>
			<RootPage
				headerText='Organization'
				headerDescription='Stay updated with the latest announcements, achievements, and developments at Sinamm Engineering.'
			>
				{/* <div className='flex w-full justify-center mt-18 mb-8'> */}
				<div className='flex w-full justify-center mt-0 mb-0'	>
					<SectionIntro className='space-y-2' headerText='Organization Chart' />
				</div>
				{/* <div className='px-20 ml-[38px]'> */}
				{/* <div className='border border-red-400'></div> */}
				<div className=''>
					<OrganizationChart data={data?.doc} />
				</div>
				{/* <div className='flex w-full justify-center my-8'>
					<SectionIntro className='space-y-2' headerText='Workforce Chart' />
				</div> */}
				<Workforce />
			</RootPage>
		</RootLayout>
	);
};

export default OrganizationPage;
