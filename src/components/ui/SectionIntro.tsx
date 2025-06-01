'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

import Link from 'next/link';
import { PiArrowCircleRightThin, PiArrowUpRightThin } from 'react-icons/pi';
import { cn } from '@/lib/utils';
import { Subtitle, Flex } from '@/components';

interface SectionIntroProps {
	headerText?: string;
	headingText?: string;
	paragraphText?: string;
	className?: string;
	headingClassName?: string;
	paragraphClassName?: string;
	href?: string;
	btnText?: string;
	btnColor?: string;
}

const SectionIntro: React.FC<SectionIntroProps> = ({
	headerText,
	headingText,
	paragraphText,
	className = '',
	headingClassName = '',
	paragraphClassName = '',
	href,
	btnText,
	btnColor,
}) => {
	// px-1 md:px-2
	return (
		<div className={`mb-8 flex flex-col ${className}`}>
			{/* <SectionHeader text={headerText || ""} /> */}
			<h2
				className={`text-3xl md:text-[78px] md:text-left uppercase leading-[1] tracking-[-2px] font-primary text-mainText ${className}`}>
				{headingText || ''}
			</h2>
			<Flex className='flex-col md:flex-row w-full items-center md:items-end md:justify-between gap-6 md:gap-8 '>
				{/* <p
					className={`md:text-left md:max-w-[40vw] font-[18px] text-paraText line-clamp-3 md:line-clamp-none ${paragraphClassName}`}>
					{paragraphText || ''}
				</p> */}
				<Subtitle
					className={`md:max-w-[60vw] line-clamp-3 md:line-clamp-none ${paragraphClassName}`}>
					{paragraphText || ''}
				</Subtitle>

				{href && (
					<Link
						href={href || '#'}
						className={cn(
							'flex',
							'text-[12px]',
							'font-normal',
							`text-[${btnColor || '#ododod'}]`,
							'border-b-[.75px]',
							'border-mainText',
							'py-[6px]',
							'pb-2',
							'cursor-pointer',
							'uppercase',
							'gap-1',
							'items-center'
						)}>
						<p>{btnText}</p>
						<PiArrowUpRightThin
							color={btnColor || '#ododod'}
							size={18}
						/>
					</Link>
				)}
			</Flex>
		</div>
	);
};

export default SectionIntro;
