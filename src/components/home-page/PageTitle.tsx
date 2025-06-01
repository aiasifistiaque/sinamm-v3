import { cn } from '@/lib/utils';
import React from 'react';

const PageTitle = ({ children, className }: any) => {
	return (
		<p
			className={cn(
				'text-4xl font-primary md:text-[78px] uppercase leading-[1] tracking-[-2px] text-mainText',
				className
			)}>
			{children}
		</p>
	);
};

export default PageTitle;
