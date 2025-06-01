import React from 'react';

type BorderBottomProps = {
	className?: string;
	colorClass?: string; // Optional color prop, not used in this component
};
const BorderBottom: React.FC<BorderBottomProps> = ({ className = '', colorClass }) => {
	return (
		<div className={`${className}`}>
			<hr className={`text-white ${colorClass}`} />
		</div>
	);
};

export default BorderBottom;
