import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import Center from '../home-page/Center';

interface ClientCardProps {
	logo?: string;
	name: string;
	images?: string[];
	delay?: number;
}
const ClientCard = ({ images, name, delay = 0 }: ClientCardProps) => {
	// console.log('data::,', name, images);
	return (
		<motion.div>
			<Center className='h-full bg-cardBg p-4 py-6'>
				<div className='flex-col gap-3 justify-between flex-1 h-full transition-all duration-100 flex items-center'>
					<Center className='md:h-24 h-28'>
						<img
							src={images ? images[0] : ''}
							alt={'client image'}
							className='md:h-24 h-28 w-full object-contain'
						/>
					</Center>
					<Center className='flex-1 items-end h-full'>
						<p className='mt-2 text-xl italic text-mainText uppercase text-center'>{name}</p>
					</Center>
				</div>
			</Center>
		</motion.div>
	);
};

export default ClientCard;
