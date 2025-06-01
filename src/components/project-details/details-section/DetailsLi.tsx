import React from 'react';

const DetailsLi = ({ label, value }: any) => {
	return (
		<>
			{/* <li className='grid grid-cols-6 gap-[12px] border-b items-center border-gray-300 first:border-t py-4'> */}
			<li className='grid grid-cols-6 gap-[12px] border-b items-center border-gray-300 first:border-t py-4'>
				<span className='text-mainText col-span-2 uppercase text-[16px] md:text-[24px] font-medium'>
					{label}:
				</span>
				<span className='text-sm col-span-4 font-normal text-[18px] text-paraText'>
					{value ? value : '--'}
				</span>
			</li>
		</>
	);
};

export default DetailsLi;
