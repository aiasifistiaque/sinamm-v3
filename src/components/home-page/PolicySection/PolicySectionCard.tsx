/* eslint-disable @next/next/no-img-element */
const PolicySectionCard = ({ item }: any) => {
	return (
		// <div className='rounded-[6px] p-4 flex-shrink-0 grow flex flex-col gap-8 bg-cardBg w-[150px]'>
		<div className='w-full rounded-[6px] p-2 md:p-4 lg:p-6 xl:p-10 flex justify-between'>
			{/* Image */}
			<div className='w-full flex justify-center'>
				<div className='w-16 h-16'>
					<img
						src={item?.icon}
						alt={item?.title}
						className='w-full h-full object-cover'
					/>
				</div>
			</div>

			{/* Title - Subtitle */}
			{/* <div>
				<p className='text-[12px]'>{item?.subTitle}</p>
				<p className='text-[24px] font-medium'>{item?.title}</p>
			</div> */}
		</div>
	);
};
export default PolicySectionCard;
