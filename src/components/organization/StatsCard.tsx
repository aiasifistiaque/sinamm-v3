import { Card, CardContent } from '@/components/ui/card';

interface StatsCardProps {
	title?: string;
	value?: number | string;
	// icon: React.ReactNode;
	color?: string;
	percentage?: string;
}

const StatsCard = ({ title, value, color, percentage }: StatsCardProps) => {
	return (
		<div className={`bg-cardBg border flex flex-col border-none py-4 px-4 w-full`}>
			<div className='flex items-baseline space-x-2'>
				<p className='text-[54px] leading-[1.2] font-light text-paraText uppercase'>{value}</p>
			</div>
			<div className='flex flex-1 items-end'>
				<p className='text-[16px] lg:text-[22px] italic font-medium text-mainText mt-4'>{title}</p>
			</div>
		</div>
	);
};

export default StatsCard;
{
	/* <Card className='h-full hover:shadow-sm transition-shadow duration-200'>
				<CardContent className='mx-8 flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-100'>
					<div className='flex items-center justify-center mb-6 h-24'>
						<img
							src={images ? images[0] : ''}
							alt={'client image'}
							className='h-[100px] w-[100px] object-contain'
						/>
					</div>
					<div className='flex-grow'>
						<p className='mt-2 text-sm text-gray-500 text-center'>{name}</p>
					</div>
				</CardContent>
			</Card> */
}
