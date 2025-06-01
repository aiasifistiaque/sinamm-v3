/* eslint-disable @next/next/no-img-element */
'use client';
import MachinaryButton from '@/components/machinary-page/RootMachinaryButton';
import RootPage from '@/components/root/RootPage';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel } from '@/components/ui/carousel/carouselMain';
import { CarouselContent } from '@/components/ui/carousel/CarouselContent';
import { CarouselItem } from '@/components/ui/carousel/CarouselItem';
import { CarouselNext } from '@/components/ui/carousel/CarouselNext';
import { CarouselPrevious } from '@/components/ui/carousel/CarouselPrevious';
import { useGetAllQuery } from '@/store/services/commonApi';
import React, { useEffect, useState } from 'react';
import RootLayout from '@/components/layout/RootLayout/RootLayout';
import { useRouter } from 'next/navigation';
import Container from '../home-page/Container';
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
	const router = useRouter();
	const [categoryTab, setCategoryTab] = useState<MachineryFilter>('all');
	const [filteredData, setFilteredData] = useState<any[]>([]);

	const handleFilterChange = (filter: MachineryFilter) => {
		setCategoryTab(filter); // Update the active filter
	};

	const handleClick = (id: any) => {
		router.push(`/machinery/${id}`);
	};

	return (
		<RootLayout>
			<Container>
				<RootPage
					headerText='Explore our state-of-the-art machinery and equipment'
					headerDescription='Explore our state-of-the-art machinery and equipment that enable us to deliver exceptional engineering and construction services.'>
					<div className='mb-0'>
						{/* <div className='flex justify-center'>
							<RootMachinery />
							<MachinaryButton
								onFilterChange={handleFilterChange}
								categories={categories}
							/>
						</div> */}
						<div className='grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-3 gap-[2px]'>
							{data?.map((item: any, i: number) => (
								<div
									key={i}
									onClick={() => handleClick(item?._id)}>
									<Card className='border-gray-100 bg-cardBg overflow-hidden cursor-pointer'>
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
											<div className='flex justify-between gap-[8px] items-center px-4 py-2'>
												<div className='h-[58px] flex items-center'>
													<h3 className='font-primary text-[12px] lg:text-[18px] uppercase font-medium text-mainText'>
														{item?.name}
													</h3>
												</div>
												<div className='flex gap-2'>
													<CarouselPrevious className='static translate-y-0 h-8 w-8' />
													<CarouselNext className='static translate-y-0 h-8 w-8' />
												</div>
											</div>
										</Carousel>
									</Card>
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
