import React from 'react'

const DetailsBanner = ({ data, children }: any) => {
  return (
    <div
			className='w-full h-[85vh] bg-cover bg-top relative'
			style={{
				backgroundImage: `url(${data?.coverImage || '/fallback-image.jpg'})`,
				
			}}
		>
			{/* Gradient Overlay */}
			<div className='absolute inset-0 bg-gradient-to-r from-black/30 to-transparent' />
			<div className='max-w-7xl mx-auto w-full h-full flex flex-col justify-center px-4 relative z-10'>
				{children}
			</div>
		</div>
  )
}

export default DetailsBanner