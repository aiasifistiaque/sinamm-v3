'use client';
import React, { useState, useEffect } from 'react';
import ProjectHeader from './ProjectHeader';
import ProjectButton from './ProjectButton';
import ProjectBody from './ProjectBody';

import BorderBottom from '@/components/ui/BorderBottom';
import Container from '../Container';
import BgPattern from '../CTA/BgPattern';
import SectionIntro from '@/components/ui/SectionIntro';

type HomeData = {
	projects: any[];
};

const ProjectSection = ({ data }: any) => {
	// const [projects, setProjects] = useState<any[]>([]);

	return (
		<>
			<Container className='flex flex-col gap-5'>
				<SectionIntro
					className='space-y-5'
					headerText='Our Projects'
					headingText='OUR Featured Projects crafted with precision'
					btnText='All Projects'
					href='/projects?type=all'
					paragraphText='At SINAMM Engineering limited, we take pride in delivering innovative and sustainable infrastructure solutions across diverse sectors. From complex civil works to cutting-edge building designs, our portfolio showcases a commitment to excellence, safety, and client satisfaction. Explore our featured projects to see our impact in action.'
				/>

				<ProjectBody
					projectData={data}
					mode='home'
				/>
			</Container>
			{/* <BorderBottom className='container mx-auto' /> */}
		</>
	);
};

export default ProjectSection;
