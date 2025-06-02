'use client';
import React from 'react';

import SectionIntro from '@/components/ui/SectionIntro';
import Container from '../Container';
import Flex from '../Flex';
import Column from '../Column';

const PartnerCard = ({ item }: { item: any }) => (
	<div className='mr-8 rounded-card p-1'>
		<img
			src={item?.images[0]}
			alt={item?.name}
			className='md:h-16 h-14 w-auto object-contain grayscale brightness-[0.3] contrast-150 hover:grayscale-0 hover:brightness-100 hover:contrast-100 transition-all duration-300'
		/>
	</div>
);

const PartnerSection = ({ data: allClients }: any) => {
	return (
		<>
			<Container className=''>
				<Column className='py-[44px] rounded-card'>
					<SectionIntro
						className='space-y-5'
						headerText='Trusted by the industry leaders worldwide'
						headingText='Trusted by the industry leaders worldwide'
						href='/clients'
						btnText='View all clients'
						paragraphText='We&#39;re proud to collaborate with forward-thinking organizations across various sectors, helping them achieve their infrastructure and development goals'
					/>

					<div className='mt-2 overflow-hidden relative -mx-3 md:mx-0 '>
						{/* Infinite scroll effect for desktop */}
						<Flex
							className='items-center animate-marquee-mobile md:animate-marquee-desktop'
							style={{
								width: `${allClients?.length * 200}px`,
								willChange: 'transform',
							}}>
							{allClients?.map((client: any, i: number) => (
								<PartnerCard
									key={client?.name}
									item={client}
								/>
							))}
						</Flex>
					</div>
					<div className='bg-[#0d0d0d] w-[100vw] md:w-full -mx-3 md:mx-0 h-[40vh] md:h-[90vh] mt-[64px]'>
						<img
							src='/partner.jpg'
							className='h-full w-full object-center object-cover'
						/>
					</div>
				</Column>
			</Container>
		</>
	);
};

export default PartnerSection;
