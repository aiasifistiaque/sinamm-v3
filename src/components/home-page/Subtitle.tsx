import { cn } from '@/lib/utils';
import React from 'react';

const Subtitle = ({ children, className }: any) => {
	return (
		<p className={cn('text-paraText', 'text-[16px]', 'leading-[1.4]', 'uppercase', className)}>
			{children}
		</p>
	);
};

export default Subtitle;
