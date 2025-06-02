'use client';
import React, { useState } from 'react';
import ProjectButton from '@/components/home-page/Projects/ProjectButton';

import RootLayout from '@/components/layout/RootLayout/RootLayout';
import { ScrollContainer } from '../smooth-scroll';
import { ProjectBodyMain } from '../home-page';

import { Subtitle, Container, Column, Box, PageTitle } from '@/components';
type ProjectPageProps = {
	children: React.ReactNode;
};

const ProjectsPage = ({ data, ui, title, docs }: any) => {
	const handleFilterChange = (filter: any, category?: string) => {};
	return (
		<RootLayout>
			<ScrollContainer>
				<Container className=''>
					<Column className='w-full gap-8'>
						<Column className='md:justify-between md:flex-row gap-8 pt-20'>
							<Column className='w-full gap-6'>
								<PageTitle>Explore our Featured projects to see our impact in action</PageTitle>

								<Subtitle className='stagger-1 md:max-w-[60vw]'>
									At SINAMM Engineering, we take pride in delivering innovative and sustainable
									infrastructure solutions across diverse sectors. From complex civil works to
									cutting-edge building designs, our portfolio showcases a commitment to excellence,
									safety, and client satisfaction. Explore our featured projects to see our impact
									in action.
								</Subtitle>
							</Column>
						</Column>
						<ProjectButton
							title={`${title}`}
							onFilterChange={handleFilterChange}
						/>

						<ProjectBodyMain
							projectData={data}
							mode='full'
							ui={ui}
						/>
					</Column>
				</Container>

				{/* </RootPage> */}
			</ScrollContainer>
		</RootLayout>
	);
};

export default ProjectsPage;
