import React from 'react';

const DetailsBanner = ({ data, children }: any) => {
	return (
		<div
			className='w-full h-[55vh] bg-cover bg-center relative'
			style={{
				backgroundImage: `url(${data?.image || '/fallback-image.jpg'})`,
			}}
		>
			{/* Gradient Overlay 	<div className='line-badge py-2'>*/}
			<div className='absolute inset-0 bg-gradient-to-r from-black/30 to-transparent' />
			<div className='w-full h-full flex items-end md:items-center'>
				{/* <div className='line-badge py-4 z-20 w-full md:mr-[10vw] lg:mr-[20vw] xl:mr-0'> */}
				<div className='container mx-auto'>
					<div className='w-full h-full flex flex-col justify-center px-4 relative z-10'>
						{children}
					</div>
				</div>
			</div>
		</div>
	);
};

export default DetailsBanner;
