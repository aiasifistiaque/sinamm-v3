'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { navlinks } from '@/lib/Data/Navbar';

interface DesktopNavbarProps {
	isScrolled: boolean;
}

// RevealText component for character-by-character animation
interface RevealTextProps {
	text: string;
	className?: string;
	delay?: number;
}

const RevealText: React.FC<RevealTextProps> = ({ text, className = '', delay = 0 }) => {
	const characters = text.split('');

	const containerVariants = {
		hidden: {},
		visible: {
			transition: {
				staggerChildren: 0.03,
				delayChildren: delay,
			},
		},
	};

	const childVariants = {
		hidden: {
			opacity: 0,
			y: 10,
			rotateX: -90,
		},
		visible: {
			opacity: 1,
			y: 0,
			rotateX: 0,
			transition: {
				duration: 0.4,
				ease: [0.25, 0.46, 0.45, 0.94],
			},
		},
	};

	return (
		<motion.span
			className={`inline-block ${className}`}
			variants={containerVariants}
			initial='hidden'
			animate='visible'>
			{characters.map((char, index) => (
				<motion.span
					key={index}
					className='inline-block'
					variants={childVariants}
					style={{ transformOrigin: '50% 100%' }}>
					{char === ' ' ? '\u00A0' : char}
				</motion.span>
			))}
		</motion.span>
	);
};

// HoverRevealText component for hover-triggered reveal effect
interface HoverRevealTextProps {
	text: string;
	className?: string;
	isHovered: boolean;
}

const HoverRevealText: React.FC<HoverRevealTextProps> = ({ text, className = '', isHovered }) => {
	const textVariants = {
		initial: {
			y: 0,
		},
		hover: {
			y: '-100%',
			transition: {
				duration: 0.5,
				ease: [0.33, 1, 0.68, 1],
			},
		},
	};

	const duplicateVariants = {
		initial: {
			y: '100%',
		},
		hover: {
			y: 0,
			transition: {
				duration: 0.5,
				ease: [0.33, 1, 0.68, 1],
			},
		},
	};

	return (
		<span className={`relative inline-block overflow-hidden ${className}`}>
			<motion.span
				className='inline-block'
				variants={textVariants}
				initial='initial'
				animate={isHovered ? 'hover' : 'initial'}>
				{text}
			</motion.span>
			<motion.span
				className='absolute inset-0 inline-block'
				variants={duplicateVariants}
				initial='initial'
				animate={isHovered ? 'hover' : 'initial'}>
				{text}
			</motion.span>
		</span>
	);
};

const DesktopNavbar: React.FC<DesktopNavbarProps> = ({ isScrolled }) => {
	const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

	return (
		<nav className='hidden lg:flex h-full '>
			<ul className='flex justify-center item-center'>
				{navlinks?.map((item, index) => (
					<motion.li
						key={index}
						className='group w-auto flex-1 h-full px-4 last:pr-0  flex align-center items-center relative'
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{
							duration: 0.6,
							delay: index * 0.1,
							ease: [0.25, 0.46, 0.45, 0.94],
						}}
						onMouseEnter={() => setHoveredIndex(index)}
						onMouseLeave={() => setHoveredIndex(null)}>
						<Link
							href={item?.href}
							className={`font-primary leading-[1] tracking-[-.3px] text-[15px] uppercase relative ${
								isScrolled ? 'text-white' : 'text-white'
							}`}>
							<HoverRevealText
								text={item?.name}
								isHovered={hoveredIndex === index}
							/>
						</Link>
					</motion.li>
				))}
			</ul>
		</nav>
	);
};

export default DesktopNavbar;
