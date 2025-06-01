import SectionIntro from '@/components/ui/SectionIntro';
import React, { FC } from 'react';
import { policyData } from '@/lib/constant';
import TeamPreview from './TeamPreview';
import PolicySectionCard from './PolicySectionCard';
import Column from '../Column';
import Flex from '../Flex';
import Container from '../Container';
import ViewAllLink from '@/components/ui/ViewAllLink';

type PolicySectionProps = {};

const PolicySection: FC<PolicySectionProps> = ({}) => {
	return (
		<Container className='mt-[-64px]'>
			<Column>
				<SectionIntro
					className='space-y-5'
					headerText='Our Projects'
					headingText='Health, Safety, and Environment [HSE] Policy Statement'
					paragraphText='Our commitment extends beyond occupational safety. We are equally dedicated to minimizing our environmental impact and promoting sustainable practices across all areas of our business. From project planning to execution, we strive to reduce waste, conserve resources, and implement eco-friendly construction methods that align with both local and international environmental standards.'
				/>

				{/* Content */}
				{/* <Flex className='gap-4 w-full overflow-hidden'> */}
				<div className='grid grid-cols-3 md:grid-cols-6 gap-2'>
					{policyData?.map((item: any, index: number) => (
						<PolicySectionCard
							key={index}
							item={item}
						/>
					))}
				</div>
				{/* </Flex> */}
			</Column>
			<TeamPreview />
			<ViewAllLink
				href='/hse-policy'
				text='Learn More About Us'
				className='justify-end pt-8 items-center w-full'
			/>
		</Container>
	);
};

export default PolicySection;
