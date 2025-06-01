/* eslint-disable @next/next/no-img-element */
import { FC } from 'react';
import Container from '../Container';

const RightSide: FC = () => {
	const statsData = [
		{
			value: '17+',
			label: 'Years Experience',
		},
		{
			value: '65+',
			label: 'Projects Complete',
		},
		{
			value: '486+',
			label: 'Expert Engineers',
		},
		{
			value: '57+',
			label: 'Certificates',
		},
	];

	return (
		// <Container>
		<div className='fle relative'>
			<div className='relative overflow-hidden shadow-xl '>
				<img
					src='/about.jpeg'
					alt='Sinamm Engineering Building'
					className='w-full md:h-auto rounded-card object-cover'
				/>
			</div>

			{/* Floating Stats Box */}
			<div className='absolute rounded-card -bottom-9 md:right-3 lg:-right-5 right-6 text-white bg-blueBg md:p-6 p-2 shadow-lg md:max-w-full animate-scale-in'>
				<div className='grid grid-cols-2 md:gap-4 gap-2'>
					{statsData.map((stat, index) => (
						<div
							key={index}
							className='uppercase'>
							<p className='italic md:text-4xl text-lg font-medium mb-2'>{stat.value}</p>
							<p className='md:text-xs text-xs'>{stat.label}</p>
						</div>
					))}
				</div>
			</div>
		</div>
		// </Container>
	);
};

export default RightSide;
