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

const AboutRootPage: React.FC<PageProps> = ({
	children,
	className,
	headerText,
	headerDescription,
	headerClassName,
}) => {
	return (
		<div className={clsx(className)}>
			<div className='w-full flex flex-col pt-16 md:pt-24'>
				<div className='flex flex-col gap-[16px] bg-mainBg w-full'>{children}</div>
			</div>
		</div>
	);
};

export default AboutRootPage;
