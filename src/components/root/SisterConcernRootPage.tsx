import React from 'react';
import clsx from 'clsx';
import Container from '../home-page/Container';
import AboutPageHeader from './AboutPageHeader';

interface PageProps {
	children: React.ReactNode;
	className?: string;
	headerText?: string;
	headerDescription?: string;
	headerClassName?: string;
}

const SisterConcerRootPage: React.FC<PageProps> = ({
	children,
	className,
	headerText,
	headerDescription,
	headerClassName,
}) => {
	return (
		<div className={clsx(className)}>
			<div className='w-full flex flex-col '>
				<AboutPageHeader
					className={clsx('w-full', headerClassName)}
					text={headerText}
					description={headerDescription}
				/>

				<Container className='flex flex-col gap-[44px] md:gap-[64px] bg-mainBg w-full'>
					{children}
				</Container>
			</div>
		</div>
	);
};

export default SisterConcerRootPage;
