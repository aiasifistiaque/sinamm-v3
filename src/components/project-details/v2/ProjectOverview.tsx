import React from 'react';
import parser from 'html-react-parser';
import { DetailsLi } from '../details-section';
import { dateFormater } from '@/lib/dateFormater';
import PageTitle from '@/components/home-page/PageTitle';
const ProjectOverview = ({ data }: any) => {
	return (
		<div className='my-6 md:my-12'>
			<div className='overview'>
				<PageTitle>Project Overview</PageTitle>
				<p className='mt-4 text-mainText text-[18px]'>{parser(data?.shortDescription || '')}</p>
			</div>
			<div className='specs mt-12'>
				<ul className='space-y-0'>
					<DetailsLi
						label='Client'
						value={data?.client}
					/>
					<DetailsLi
						label='Location'
						value={data?.location}
					/>
					<DetailsLi
						label='Start Date'
						value={dateFormater(data?.projectStartingDate)}
					/>
					<DetailsLi
						label='Completion Date'
						value={dateFormater(data?.projectCompletionDate)}
					/>
					<DetailsLi
						label='Category'
						value={data?.category?.name}
					/>
					<DetailsLi
						label='Work Value'
						value={data?.workValue}
					/>
					{/* <DetailsLi label='Project Volume' value={data?.projectVolume} /> */}
				</ul>
			</div>
		</div>
	);
};

export default ProjectOverview;
