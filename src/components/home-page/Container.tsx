import React, { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
	children: React.ReactNode;
	className?: string;
	maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | 'full';
	centerContent?: boolean;
	noPadding?: boolean;
}

const Container: React.FC<ContainerProps> = ({
	children,
	className,
	maxWidth = '7xl',
	centerContent = false,
	noPadding = false,
	...props
}) => {
	return (
		<div
			className={cn(
				'w-full',
				// !noPadding && 'px-4 lg:px-12',
				!noPadding && 'px-3 md:px-4',

				'mx-auto',
				className
			)}
			{...props}>
			{children}
		</div>
	);
};

export default Container;
