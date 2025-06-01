import React from 'react'

const PolicySectionCardV2 = ({ item }: any) => {
  return (
    // <div className='rounded-[6px] p-4 flex-shrink-0 grow flex flex-col gap-8 bg-cardBg w-[150px]'>
		<div className='rounded-[6px] p-4 flex-shrink-0 grow flex flex-col gap-8 bg-cardBg w-[150px]'>
			{/* Image */}
			<div className='w-full flex justify-end'>
				<div className='w-16 h-16'>
					<img
						src={item?.icon}
						alt={item?.title}
						className='w-full h-full object-cover'
					/>
				</div>
			</div>

			{/* Title - Subtitle */}
			<div>
				<p className='text-lg text-mainText'>{item?.subTitle}</p>
				<p className='text-lg font-medium text-mainText'>{item?.title}</p>
			</div>
		</div>
  )
}

export default PolicySectionCardV2