import React, { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
	children: React.ReactNode;
	className?: string;
}

const Box: React.FC<ContainerProps> = ({ children, className, ...props }) => {
	return (
		<div
			className={cn(className)}
			{...props}>
			{children}
		</div>
	);
};

export default Box;
