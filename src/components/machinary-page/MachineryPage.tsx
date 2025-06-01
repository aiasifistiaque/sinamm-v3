/* eslint-disable @next/next/no-img-element */
'use client';

import RootPage from '@/components/root/RootPage';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel } from '@/components/ui/carousel/carouselMain';
import { CarouselContent } from '@/components/ui/carousel/CarouselContent';
import { CarouselItem } from '@/components/ui/carousel/CarouselItem';
import { CarouselNext } from '@/components/ui/carousel/CarouselNext';
import { CarouselPrevious } from '@/components/ui/carousel/CarouselPrevious';
import React, { useEffect, useState } from 'react';
import RootLayout from '@/components/layout/RootLayout/RootLayout';
import Container from '../home-page/Container';
import { Column, Flex } from '@/components';

const fallbackImage = '/ruppur.jpeg';
type MachineryProps = {
	data: any[];
	categories: any[];
};
const isValidUrl = (url: string) => {
	try {
		new URL(url);
		return true;
	} catch {
		return false;
	}
};
type MachineryFilter = 'all';

const MachinaryPage = ({ data, categories }: any) => {
	const [categoryTab, setCategoryTab] = useState<MachineryFilter>('all');

	return (
		<RootLayout>
			<Container>
				<RootPage
					headerText='Explore our state-of-the-art machinery and equipment'
					headerDescription='Explore our state-of-the-art machinery and equipment that enable us to deliver exceptional engineering and construction services.'>
					<div className='mb-0'>
						<div className='grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-3 gap-[2px]'>
							{data?.map((item: any, i: number) => (
								<div key={i}>
									<Column className='border-gray-100 bg-cardBg h-full overflow-hidden'>
										<Carousel className='w-full'>
											<CarouselContent>
												{item?.mediaImages?.map((image: any, index: number) => (
													<CarouselItem key={index}>
														<div className='h-[200px] sm:h-[250px] md:h-[300px] w-full overflow-hidden'>
															<img
																src={isValidUrl(image) ? image : fallbackImage}
																alt={`carousel-item-${index}`}
																className='w-full h-full object-cover object-center'
																loading='lazy'
																onError={e => {
																	if (
																		e.currentTarget.src !==
																		window.location.origin + fallbackImage
																	) {
																		e.currentTarget.src = fallbackImage;
																	}
																}}
															/>
														</div>
													</CarouselItem>
												))}
											</CarouselContent>
											<Column className='px-4 py-2'>
												<Flex className='justify-between gap-[8px] items-center'>
													<Column className='items-center'>
														<h3 className='font-primary text-[12px] lg:text-[18px] uppercase font-medium text-mainText'>
															{item?.name}
														</h3>
													</Column>
													<Flex className='gap-1'>
														<CarouselPrevious className='static translate-y-0 h-8 w-8' />
														<CarouselNext className='static translate-y-0 h-8 w-8' />
													</Flex>
												</Flex>
												<Column className='py-2 uppercase'>
													<h4 className='text-[14px] underline mb-2 italic text-mainText'>
														Specifications:
													</h4>
													<ul className='list-disc text-[13px] list-inside space-y-1 text-gray-700'>
														{item?.specification?.map((spec: any, index: number) => (
															<li key={index}>{spec}</li>
														))}
													</ul>
												</Column>
											</Column>
										</Carousel>
									</Column>
								</div>
							))}
						</div>
					</div>
				</RootPage>
			</Container>
		</RootLayout>
	);
};

export default MachinaryPage;
