import React from 'react';

interface SectionIntroProps {
	headerText?: string;
	headingText?: string;
	paragraphText?: string;
	className?: string;
	headingClassName?: string;
	paragraphClassName?: string;
}

const AboutIntro: React.FC<SectionIntroProps> = ({
	headerText,
	headingText,
	paragraphText,
	className = '',
	headingClassName = '',
	paragraphClassName = '',
}) => {
	return (
		<div
			className={`mb-5 flex flex-col flex-1 md:max-w-[50vw] uppercase ${className} text-mainText`}>
			<h2
				className={`text-3xl md:text-[54px] md:text-left uppercase trackint-[-1px] leading-[1] font-primary ${headingClassName}`}>
				{headingText || ''}
			</h2>
			<p className={`md:max-w-[40vw] leading-[1.2] ${paragraphClassName}`}>{paragraphText || ''}</p>
		</div>
	);
};

export default AboutIntro;
