'use client';
import React from 'react';
import RootLayout from '@/components/layout/RootLayout/RootLayout';
import { useGetAllQuery } from '@/store/services/commonApi';
import { TopManagement } from '@/components/team-page';
import OurCompany from '@/components/about-page/ourCompany';
import History from '@/components/about-page/History';
import Specialization from '@/components/about-page/Specialization';
import Management from '@/components/about-page/Management';
import CoreValues from './CoreValues';
import BorderBottom from '../ui/BorderBottom';
import AboutRootPage from '../root/AboutRootPage';
import PageHeader from '../root/PageHeader';
import Container from '../home-page/Container';

const AboutPage = () => {
	const { data, isLoading } = useGetAllQuery({
		path: 'project-teams',
		sort: '-priority',
	});

	const topManagement = data?.doc.filter((member: any) => member?.category?.name === 'Director');

	return (
		<RootLayout isLoading={isLoading}>
			<AboutRootPage>
				<Container>
					<PageHeader
						text='SINAMM Engineering Limited is a leading engineering firm in Bangladesh'
						description='SINAMM Engineering Limited is a leading engineering firm in Bangladesh, specializing in civil works, building construction, and infrastructure development. With a commitment to excellence and sustainability, we deliver innovative solutions that meet the highest standards of quality and safety.'
						className='mb-8'
						descriptionClassName='stagger-1 md:max-w-[70vw]'
					/>
				</Container>
				{/* Page Header */}

				<OurCompany />
				<BorderBottom />
				{/* history */}
				<History />
				<div className='py-4'>
					<TopManagement data={topManagement} />
				</div>
				<BorderBottom className='container mx-auto py-0' />
				<Specialization />
				<BorderBottom />
				<Management />
				<BorderBottom />
				<Container className='py-4'>
					<CoreValues />
				</Container>
			</AboutRootPage>
		</RootLayout>
	);
};

export default AboutPage;
