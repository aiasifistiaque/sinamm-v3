import React from 'react';
import PrimaryButton from '../../ui/PrimaryButton';
import { ArrowRightIcon, Check } from 'lucide-react';
import SectionHeader from '../../ui/SectionHeader';
import SectionIntro from '../../ui/SectionIntro';
import { HiArrowLongRight } from 'react-icons/hi2';

import Link from 'next/link';
import AboutIntro from './AboutIntro';
import ViewAllLink from '@/components/ui/ViewAllLink';
import { PiArrowUpRightThin } from 'react-icons/pi';
const LeftSide = () => {
	const features = [
		{
			title: 'Quality Assurance',
			description: 'Highest standards in every project',
		},
		{
			title: 'Expert Team',
			description: 'Skilled professionals and engineers',
		},
		{
			title: 'Modern Equipment',
			description: 'Latest technology and machinery',
		},
		{
			title: 'Safety First',
			description: 'Rigorous safety protocols',
		},
	];
	return (
		<div className='space-y-5 px-1 pt-4 md:pt:0 md:px-0'>
			<AboutIntro
				className='space-y-5'
				headerText=''
				headingText="Building Tomorrow's Infrastructure with Excellence Today"
				paragraphText="Founded in 2008, SINAMM ENGINEERING LIMITED has grown to become one of Bangladesh's most trusted names in construction and engineering. Our team of experienced professionals brings innovation, quality, and reliability to every project we undertake."
			/>
			<div className='grid grid-cols-1 sm:grid-cols-2 gap-8 gap-x-4 mt-8 text-mainText'>
				{features.map((feature, index) => (
					<div
						key={index}
						className='flex items-start space-x-3'>
						<div className='bg-[#ebebeb] p-1 rounded-full text-primary'>
							<PiArrowUpRightThin size={14} />
						</div>
						<div>
							{/* <h4 className='uppercase md:font-[42px] tracking-[-.5px] leading-[1.2] font-medium text-textWhite'>
								{feature?.title}
							</h4> */}
							<p className='text-[12px] md:w-4/5 uppercase '>{feature?.description}</p>
						</div>
					</div>
				))}
			</div>

			{/* <PrimaryButton href='/about' className='py-1 mt-2 md:px-5 px-3 text-md'>
				Learn More About Us
			</PrimaryButton> */}
			{/* <Link 
				href='/about' 
				className=' text-textBlue flex gap-1 items-center justify-end font-medium hover:text-textHover transition-colors'
			>
				Learn More About Us <HiArrowLongRight className='size-7' />
			</Link> */}
			{/* <ViewAllLink
				href='/about'
				text='Learn More About Us'
				className='items-center text-mainText mt-10 justify-start'
				btnColor='#0d0d0d'
			/> */}
		</div>
	);
};

export default LeftSide;
