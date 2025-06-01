'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

import Link from 'next/link';
import { PiArrowCircleRightThin, PiArrowUpRightThin } from 'react-icons/pi';
import { cn } from '@/lib/utils';
import { Subtitle, Flex, PageTitle } from '@/components';

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
		<Flex className={`mb-8 flex flex-col ${className}`}>
			<PageTitle className={`text-3xl ${className}`}>{headingText || ''}</PageTitle>
			<Flex className='flex-col md:flex-row w-full items-center md:items-end md:justify-between gap-6 md:gap-8 '>
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
		</Flex>
	);
};

export default SectionIntro;
