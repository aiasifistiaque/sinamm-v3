import React from 'react'
import { TabsContent } from '../Tabs'

const TabContentTwo = ({formattedStrings}:any) => {
  return (
   	<TabsContent value='features'>
					<h2 className='text-2xl font-bold mb-6'>Key Features</h2>
					<ul className='grid grid-cols-1 md:grid-cols-2 gap-4'>
						{formattedStrings?.map((feature: any, index: number) => (
							<li
								key={index}
								className='flex items-start space-x-2 text-blue-500'
							>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='24'
									height='24'
									viewBox='0 0 24 24'
									fill='none'
									stroke='currentColor'
									strokeWidth='2'
									strokeLinecap='round'
									strokeLinejoin='round'
									className='h-5 w-5 text-primary mt-0.5'
								>
									<polyline points='9 11 12 14 22 4'></polyline>
									<path d='M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11'></path>
								</svg>
								<span className='text-gray-700'>{feature}</span>
							</li>
						))}
					</ul>
				</TabsContent>
  )
}

export default TabContentTwo
