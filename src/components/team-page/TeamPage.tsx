/* eslint-disable @next/next/no-img-element */
'use client';
import React from 'react';
import RootPage from '@/components/root/RootPage';
import RootLayout from '@/components/layout/RootLayout/RootLayout';
import { useGetAllQuery } from '@/store/services/commonApi';
import { Card, CardContent, CardTitle } from '../ui/card';
import parser from 'html-react-parser';
import OrganizationChart from '../organization/FinallOrganizationChart';
import Workforce from '../organization/Workforce';
import Container from '../home-page/Container';
import PageTitle from '../home-page/PageTitle';
import Subtitle from '../home-page/Subtitle';
import { Column, Grid, Image } from '@/components';

const TeamPage = ({ data, chartData }: any) => {
	const topManagement = data?.filter((member: any) => member?.category?.name === 'Director');

	return (
		<RootLayout>
			<Container>
				<RootPage
					headerText='Meet Our Top Management of SINAMM Engineering'
					headerDescription='SINAMM Engineering Limited believes in teamwork. We feel proud to have a very strong team and we are confident to achieve our goals and objectives with accuracy. We are dedicated to provide the most efficient and effective skills in the Country. We are working continuously to improve our system to provide best and efficient services to our clients and also to match with the upcoming days.'>
					{/* team section */}
					<Grid className='grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-[2px]'>
						{topManagement?.map((member: any) => (
							<Column
								key={member?._id}
								className='border-none h-full grow'>
								<div className=' aspect-[3/4]'>
									<Image
										objectFit='cover'
										src={member?.image}
										alt={member?.name}
										className='w-full h-full'
									/>
								</div>
								<CardContent className='py-2 px-2 space-y-3 h-full bg-[white]'>
									<h3 className='text-[22px] leading-[1.1] font-medium uppercase font-primary text-mainText'>
										{member?.name}
									</h3>
									<p className='text-xs text-mainText uppercase border-textMain border-[.5px] border-b-[1px] italic px-2 py-1 inline-block'>
										{member?.designation}
									</p>
									<p className='text-sm text-gray-700'>
										{member?.details && parser(member.details)}
									</p>
								</CardContent>
							</Column>
						))}
					</Grid>

					{/* chart */}

					<Column className='gap-6 '>
						<Column className='gap-4 justify-center'>
							<PageTitle>Organizational Chart of SINAMM Engineering</PageTitle>
							<Subtitle className='md:w-2/3'>
								{`An organization chart visually represents the structure of a company, detailing roles, responsibilities, and relationships between individuals within an entity. It helps clarify reporting lines, enhances communication, and supports workforce planning by providing a clear view of team dynamics and leadership hierarchy.`}
							</Subtitle>
						</Column>

						<OrganizationChart data={chartData} />
					</Column>

					<Workforce />
				</RootPage>
			</Container>
		</RootLayout>
	);
};

export default TeamPage;
