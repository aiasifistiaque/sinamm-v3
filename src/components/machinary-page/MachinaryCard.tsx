/* eslint-disable @next/next/no-img-element */
import React, { FC } from 'react';
import { Card } from '../ui/card';
import { Carousel } from '../ui/carousel/carouselMain';
import { CarouselContent } from '../ui/carousel/CarouselContent';
import { CarouselItem } from '../ui/carousel/CarouselItem';
import { CarouselPrevious } from '../ui/carousel/CarouselPrevious';
import { CarouselNext } from '../ui/carousel/CarouselNext';

type MachinaryCardProps = {
	item: any;
	isValidUrl: any;
	fallbackImage: any;
};

const MachinaryCard: FC<MachinaryCardProps> = ({ item, isValidUrl, fallbackImage }) => {
	return (
		<Card
			// key={i}
			className='  bg-cardBg overflow-hidden rounded-[12px]'>
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
										if (e.currentTarget.src !== window.location.origin + fallbackImage) {
											e.currentTarget.src = fallbackImage;
										}
									}}
								/>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
				<div className='flex justify-between items-center p-4'>
					<h3 className=' font-primary text-[12px] lg:text-[16px] uppercase font-semibold text-gray-800'>
						{item?.name}
					</h3>
					<div className='flex gap-2'>
						<CarouselPrevious className='static translate-y-0 h-8 w-8' />
						<CarouselNext className='static translate-y-0 h-8 w-8' />
					</div>
				</div>
			</Carousel>
		</Card>
	);
};

export default MachinaryCard;

{
	/* <MachinaryCard
                      item={item}
                      isValidUrl={isValidUrl}
                      fallbackImage={fallbackImage}
                    /> */
}

// <div>
// 	<h4 className='text-lg font-primary font-semibold text-gray-800 mb-2'>
// 		Specifications:
// 	</h4>
// 	<ul className='list-disc list-inside space-y-1 text-gray-700'>
// 		{item?.specification.map((spec: any, index: number) => (
// 			<li key={index}>{spec}</li>
// 		))}
// 	</ul>
// </div>;
