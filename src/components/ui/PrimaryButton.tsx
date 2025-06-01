import React from 'react';
import Link from 'next/link';
import { Button as BaseButton } from './Button';

interface PrimaryButtonProps {
	href?: string;
	onClick?: () => void;
	children: React.ReactNode;
	className?: string;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
	href,
	onClick,
	children,
	className = '',
}) => {
	const buttonClasses = `bg-blue-900 rounded z-10 hover:bg-blue-700 text-white h-[44px] w-48 text-lg ${className}`;

	if (href) {
		return (
			<BaseButton asChild className={buttonClasses}>
				<Link href={href || '/'}>{children}</Link>
			</BaseButton>
		);
	}

	return (
		<BaseButton onClick={onClick} className={buttonClasses}>
			{children}
		</BaseButton>
	);
};

export default PrimaryButton;
