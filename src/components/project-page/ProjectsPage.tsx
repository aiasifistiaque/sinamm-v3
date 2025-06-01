'use client';
import React, { useState } from 'react';
import RootPage from '@/components/root/RootPage';
import ProjectButton from '@/components/home-page/Projects/ProjectButton';

import RootLayout from '@/components/layout/RootLayout/RootLayout';
import { ScrollContainer } from '../smooth-scroll';
import { ProjectBodyMain } from '../home-page';
import TextBreak from '../ui/TextBreak';
import BorderBottom from '../ui/BorderBottom';

import { Subtitle, Container, Column, Box, PageTitle } from '@/components';
type ProjectPageProps = {
	children: React.ReactNode;
};

const ProjectsPage = ({ data, ui, categories, title, docs }: any) => {
	const [filteredProject, setFilteredProject] = useState<any>('all');
	const handleFilterChange = (filter: any, category?: string) => {
		// No-op since ProjectButton handles navigation client-side
		// If you need client-side logic (e.g., UI updates), add it here
		// console.log('Filter changed:', { filter, category });
	};
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
							title={`${title}: ${docs}`}
							onFilterChange={handleFilterChange}
							categories={categories}
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
