import React from 'react'
import parse from 'html-react-parser';

const LeftCol = ({ data: news }: any) => {
  // console.log("today", news)
  return (
		<div className='lg:col-span-2'>
			<p className='text-paraText'>{news && parse(news?.longDescription)}</p>

			<p className='pt-5 capitalize'>
				<span className='font-bold'>Tags: </span>
				<span className='px-2 py-1 mx-2 text-xs rounded-full bg-blue-300 text-gray-800'>
					{news?.tags}
				</span>
			</p>
		</div>
	);
}

export default LeftCol
