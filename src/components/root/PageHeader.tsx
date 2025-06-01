import React from 'react';
import BorderBottom from '../ui/BorderBottom';
import TextBreak from '../ui/TextBreak';

import { Subtitle, Container, PageTitle } from '@/components';

interface SectionHeaderProps {
	text?: string;
	description?: string;
	className?: string;
	textClassName?: string;
	descriptionClassName?: string;
}

const PageHeader: React.FC<SectionHeaderProps> = ({
	text,
	description,
	className = '',
	textClassName = '',
	descriptionClassName = '',
}) => {
	return (
		<div className={`relative ${className}`}>
			<div>
				<PageTitle className={`mb-4 ${textClassName}`}>{text}</PageTitle>

				{description && (
					<Subtitle className={`mb-8 lg:w-2/3 stagger-1 ${descriptionClassName}`}>
						{description || ''}
					</Subtitle>
				)}
				{/* <hr className='text-buttonBorder' /> */}
				<BorderBottom />
			</div>
		</div>
	);
};

export default PageHeader;
