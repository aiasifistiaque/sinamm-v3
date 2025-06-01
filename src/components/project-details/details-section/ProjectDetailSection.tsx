import React from 'react';

const ProjectDetailSection = ({ children }: { children: React.ReactNode }) => {
	return (
		<section className='my-[40px]'>
			<div className='container mx-auto px-4'>
				<div className='grid grid-cols-1 lg:grid-cols-3 gap-16'>
					{/* tabls left and right column are children */}
					{children}
				</div>
			</div>
		</section>
	);
};

export default ProjectDetailSection;
