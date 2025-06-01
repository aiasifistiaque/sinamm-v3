import React from 'react';
import clsx from 'clsx';
import PageHeader from './PageHeader';
import Container from '../home-page/Container';

interface PageProps {
	children: React.ReactNode;
	className?: string;
	headerText?: string;
	headerDescription?: string;
	headerClassName?: string;
}

const RootPage: React.FC<PageProps> = ({
	children,
	className,
	headerText,
	headerDescription,
	headerClassName,
}) => {
	return (
		<div className={clsx(className)}>
			{/* Optional top spacing or styling */}
			<div className='w-full flex flex-col '>
				<PageHeader
					className={clsx('w-full', 'pt-14', 'md:pt-18', headerClassName)}
					text={headerText}
					description={headerDescription}
				/>

				<div className='flex flex-col gap-[64px] bg-mainBg w-full'>{children}</div>
			</div>
		</div>
	);
};

export default RootPage;
