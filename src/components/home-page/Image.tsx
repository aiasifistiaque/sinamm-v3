import React, { ImgHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface ImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'width' | 'height'> {
	src: string;
	alt: string;
	className?: string;
	objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
	w?: string | number;
	h?: string | number;
}

const getObjectFitClass = (fit?: string) => {
	switch (fit) {
		case 'cover':
			return 'object-cover';
		case 'contain':
			return 'object-contain';
		case 'fill':
			return 'object-fill';
		case 'none':
			return 'object-none';
		case 'scale-down':
			return 'object-scale-down';
		default:
			return '';
	}
};

const getSize = (value?: string | number) => {
	if (typeof value === 'number') return `${value}px`;
	return value;
};

const Image: React.FC<ImageProps> = ({ src, alt, className, objectFit, w, h, style, ...props }) => {
	const combinedStyle = {
		...style,
		...(w && { width: getSize(w) }),
		...(h && { height: getSize(h) }),
	};

	return (
		<img
			src={src}
			alt={alt}
			className={cn(getObjectFitClass(objectFit), className)}
			style={combinedStyle}
			{...props}
		/>
	);
};

export default Image;
