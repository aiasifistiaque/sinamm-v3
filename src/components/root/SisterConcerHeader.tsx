import React from 'react';
import TextBreak from '../ui/TextBreak';
import Container from '../home-page/Container';

interface SectionHeaderProps {
	text?: string;
	description?: string;
	className?: string;
	textClassName?: string;
	descriptionClassName?: string;
}

const SisterConcerHeader: React.FC<SectionHeaderProps> = ({
	text,
	description,
	className = '',
	textClassName = '',
	descriptionClassName = '',
}) => {
	return (
		<div className={`relative py-4 md:py-8 lg:py-12 ${className}`}>
			<Container className='text-left '>
				<p
					className={`text-4xl font-primary md:text-8xl w-3/4 mb-6 text-mainText ${textClassName}`}
				>
					<TextBreak text={text} />
				</p>
				<p
					className={`text-[15px] uppercase text-paraText mb-8 lg:w-1/2 stagger-1 ${descriptionClassName}`}
				>
					{description || ''}
				</p>
			</Container>
		</div>
	);
};

export default SisterConcerHeader;
