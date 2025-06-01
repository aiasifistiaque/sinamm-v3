import React from 'react';

const BgPattern = ({ color, size }: { color?: string; size?: string }) => {
	color = color || 'white';
	const patternWidth = size || '50';
	return (
		<div className='absolute inset-0 opacity-10'>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width='100%'
				height='100%'>
				<defs>
					<pattern
						id='grid'
						width={patternWidth}
						height={patternWidth}
						patternUnits='userSpaceOnUse'>
						<path
							d={`M ${patternWidth} 0 L 0 0 0 ${patternWidth}`}
							fill='none'
							stroke={color}
							strokeWidth='1'
						/>
					</pattern>
				</defs>
				<rect
					width='100%'
					height='100%'
					fill='url(#grid)'
				/>
			</svg>
		</div>
	);
};

export default BgPattern;
