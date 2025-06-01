'use client';

import PrimaryButton from '@/components/ui/PrimaryButton';
import SecondaryButton from '@/components/ui/SecondaryButton';
import Flex from '../Flex';
import Container from '../Container';
import BgPattern from './BgPattern';

const CtaSection = () => {
	return (
		<section className='py-20 mt-20 -mb-[64px] bg-[#004ab3] text-white relative overflow-hidden'>
			{/* Background Pattern */}
			<BgPattern />

			<Container>
				<div className='max-w-3xl mx-auto md:text-center animate-fade-in'>
					<h2 className='text-3xl uppercase md:text-7xl font-primary font-light tracking-[-2px] mb-6'>
						Ready to Start Your Next Project?
					</h2>
					<p className='text-lg uppercase leading-[1.2] md:text-xl mb-12 text-white/80'>
						Partner with SINAMM Engineering for innovative solutions and exceptional results.
						Let&apos;s build something great together.
					</p>
					<Flex className='flex justify-center gap-2 pt-2'>
						<PrimaryButton
							className='ounded-[2px] uppercase font-light text-[14px]'
							href='/contact'>
							Contact Us
						</PrimaryButton>
						<SecondaryButton
							className='rounded-[2px] uppercase font-light text-[14px] border-[.5px]'
							href='/projects'>
							Our Projects
						</SecondaryButton>
					</Flex>
				</div>
			</Container>
		</section>
	);
};

export default CtaSection;
