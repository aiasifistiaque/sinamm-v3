import React from 'react';
import Link from 'next/link';
import { PiArrowCircleRightThin } from 'react-icons/pi';
import Container from './Container';
import Flex from './Flex';
import Column from './Column';

const styles = {
	headingCss: {
		className:
			'text-[3.375rem] md:text-[6.125rem] leading-[.9] font-light font-primary tracking-[-2px]',
	},
};
// const styles = {
// 	headingCss: {
// 		className:
// 			'text-[54px] md:text-[98px] leading-[.9] font-light font-primary tracking-[-2px]',
// 	},
// };

interface HeroContentProps {
	textScale?: number;
}

const HeroContent = ({ textScale = 1 }: HeroContentProps) => {
	return (
		<Container className='flex justify-end md:justify-start h-[95vh] w-full pt-[92px] pb-[40px] md:pb-0 flex-col mx-auto z-20 text-textWhite'>
			<Column
				className='md:max-w-[50vw] gap-10 md:gap-0 transition-all duration-500 ease-out transform-gpu'
				style={{
					transform: `scale(${textScale}) translateZ(0)`,
					opacity: Math.max(0.4, textScale), // Fade effect as it scales
				}}>
				<div>
					<h1
						{...styles.headingCss}
						style={{ textShadow: '0 0 8px rgba(0, 0, 0, 0.4)' }}>
						SINAMM <br /> ENGINEERING <br />
						LIMITED.
					</h1>
				</div>
				{/* <p
					className='text-md mt-4 md:text-[18px] md:max-w-[40vw] leading-[1.2] uppercase'
					style={{ textShadow: '0 0 6px rgba(0, 0, 0, 0.3)' }}
				> */}
				<p
					className='text-md mt-4 md:text-[1.125rem] md:max-w-[40vw] leading-[1.2] uppercase'
					style={{ textShadow: '0 0 6px rgba(0, 0, 0, 0.3)' }}>
					{`Founded in 2008, SINAMM ENGINEERING LIMITED has grown to become one of Bangladesh's
                most trusted names in construction and engineering. Our team of experienced
                professionals brings innovation, quality, and reliability to every project we
                undertake.`}
				</p>
			</Column>

			<Link href='/projects'>
				<div
					className='flex gap-2 items-center mt-[24px] md:justify-start w-full transition-all duration-500 ease-out transform-gpu'
					style={{
						transform: `scale(${textScale}) translateZ(0)`,
						opacity: Math.max(0.4, textScale), // Fade effect as it scales
					}}>
					{/* <p
						className='text-[12px] font-normal'
						style={{ textShadow: '0 0 4px rgba(0, 0, 0, 0.3)' }}
					> */}
					<p
						className='text-[0.75rem] font-normal'
						style={{ textShadow: '0 0 4px rgba(0, 0, 0, 0.3)' }}>
						VISIT OUR PROJECTS
					</p>
					<PiArrowCircleRightThin
						size={30}
						style={{ filter: 'drop-shadow(0 0 4px rgba(0, 0, 0, 0.3))' }}
					/>
				</div>
			</Link>
		</Container>
	);
};

export default HeroContent;
