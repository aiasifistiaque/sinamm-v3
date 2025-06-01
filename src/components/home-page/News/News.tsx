import React from 'react';
import NewsHeader from './NewsHeader';
import NewsBody from './NewsBody';
import Container from '../Container';
import Column from '../Column';
import SectionIntro from '@/components/ui/SectionIntro';

const News = () => {
	return (
		<Container className='mt-[-64px]'>
			<Column>
				<SectionIntro
					className='space-y-3'
					headerText='Latest News'
					btnText='View All News'
					href='/media'
					headingText='stay updated with our Company News & Updates'
					paragraphText='Stay informed with the latest updates from our construction team — including newly completed projects, upcoming developments, industry trends, safety innovations, and company announcements. Get an inside look at how we’re building the future with quality craftsmanship, sustainable practices, and a commitment to excellence in every structure we create.'
				/>
				{/* <NewsHeader /> */}
				<NewsBody />
			</Column>
		</Container>
	);
};

export default News;
