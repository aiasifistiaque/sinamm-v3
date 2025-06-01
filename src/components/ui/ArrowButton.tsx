import React from 'react';
import Link from 'next/link';
import { Button as BaseButton } from './Button';

interface PrimaryButtonProps {
	href?: string;
	onClick?: () => void;
	children: React.ReactNode;
	className?: string;
}

const ArrowButton: React.FC<PrimaryButtonProps> = ({ href, onClick, children, className = '' }) => {
	const buttonClasses = `bg-transparent border-2 rounded border-white text-white hover:bg-white/10 h-[44px] w-48 transition-colors text-lg ${className}`;

	if (href) {
		return (
			<BaseButton
				asChild
				className={buttonClasses}>
				<Link href={href || '/'}>{children}</Link>
			</BaseButton>
		);
	}

	return (
		<BaseButton
			onClick={onClick}
			className={buttonClasses}>
			{children}
		</BaseButton>
	);
};

export default ArrowButton;
