'use client';
import React from 'react';
import { motion } from 'framer-motion';
import SectionIntro from '@/components/ui/SectionIntro';
import BorderBottom from '@/components/ui/BorderBottom';
import ViewAllLink from '@/components/ui/ViewAllLink';
import Container from '../Container';
import Flex from '../Flex';
import Column from '../Column';
// import { useIsMobile } from '@/components/hooks/use-mobile';

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
						// paragraphClassName='px-4'
						headerText='Trusted by the industry leaders worldwide'
						headingText='Trusted by the industry leaders worldwide'
						href='/clients'
						btnText='View all clients'
						paragraphText='We&#39;re proud to collaborate with forward-thinking organizations across various sectors, helping them achieve their infrastructure and development goals'
					/>

					<div className='mt-2 overflow-hidden relative'>
						{/* Infinite scroll effect for desktop */}
						<Flex
							className='flex items-center animate-marquee-mobile md:animate-marquee-desktop'
							style={{
								width: `${allClients?.length * 200}px`,
								willChange: 'transform',
							}}>
							{allClients?.map((client: any, i: number) => (
								<PartnerCard
									key={i}
									item={client}
								/>
							))}
						</Flex>
						{/* <Flex
							className='items-center mt-12 animate-marquee-mobile-reverse md:animate-marquee-desktop-reverse'
							style={{
								width: `${allClients?.length * 200}px`,
								willChange: 'transform',
							}}>
							{allClients?.map((client: any, i: number) => (
								<PartnerCard
									key={i}
									item={client}
								/>
							))}
						</Flex> */}
					</div>

					{/* <Flex className='w-full mt-12'> */}
					{/* <Link
							href='/clients'
							className='inline-block text-textBlue font-medium hover:text-textHover transition-colors'
						>
							View all our clients →
						</Link> */}
					{/* <ViewAllLink
							href='/clients'
							text='View all our clients'
							className='justify-center items-center w-full'
						/> */}
					{/* </Flex> */}
					<img
						src='/partner.jpg'
						className='h-[40vh] md:h-[90vh] mt-[64px] w-full object-center object-cover'
					/>
				</Column>
			</Container>
		</>
	);
};

export default PartnerSection;
