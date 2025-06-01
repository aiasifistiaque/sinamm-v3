import React from 'react';

const MediaDetailSection = ({ children }: { children: React.ReactNode }) => {
	return (
		<section className='pt-16'>
			<div className=''>
				<div className='grid grid-cols-1 lg:grid-cols-3 gap-8 uppercase text-mainText'>
					{/* tabls left and right column are children */}
					{children}
				</div>
			</div>
		</section>
	);
};

export default MediaDetailSection;
