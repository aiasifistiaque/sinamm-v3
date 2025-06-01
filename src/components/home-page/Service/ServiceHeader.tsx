import React from 'react';
import SectionIntro from '../../ui/SectionIntro';

const ServiceHeader = () => {
	return (
		<div className='mt-8'>
			<SectionIntro
				className='space-y-3 px-4 md:text-center text-left'
				headerText='Our Services'
				headingText='Comprehensive Engineering Solutions'
				paragraphText='We offer a wide range of construction and engineering services tailored to meet the specific needs of our clients across various industries.'
			/>
		</div>
	);
};

export default ServiceHeader;
