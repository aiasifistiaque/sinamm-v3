'use client';
import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils'; // optional: if you're using a className merge utility
import { HiArrowLongRight } from 'react-icons/hi2';
import { PiArrowCircleUpRightThin, PiArrowUpRightThin } from 'react-icons/pi';
import Flex from '../home-page/Flex';
import Center from '../home-page/Center';

interface ViewAllLinkProps {
	href: string;
	text: string;
	className?: string;
	btnColor?: string; // optional: if you want to add color to the button
}

const ViewAllLink: React.FC<ViewAllLinkProps> = ({ href, text, className, btnColor }) => {
	return (
		<Link
			href={href || '#'}
			className={cn(
				'flex',
				'text-[12px]',
				'font-normal',
				btnColor ? `text-[${btnColor}]` : 'text-mainText',
				'border-b-[.75px]',
				btnColor ? `border-[${btnColor}]` : 'border-mainText',
				'py-[6px]',
				'pb-2',
				'cursor-pointer',
				'uppercase',
				'gap-1',
				'items-center',
				className
			)}>
			<p>{text}</p>
			<PiArrowUpRightThin
				color={btnColor || '#ododod'}
				size={18}
			/>
		</Link>
	);
};

export default ViewAllLink;
