import React from 'react';

const V2 = () => {
	return (
		<div className='h-screen'>
			<div className='w-[880px] bg-amber-600 h-full'>
				<div className='parent-container relative'>
					<div className='parent-one flex w-full justify-center relative'>
						<span className='inline-block border-2 p-2 z-10 bg-white'>
							Board of Directors
						</span>

						{/* Horizontal line above first-level children */}
						<div className='absolute top-[72px] left-1/2 -translate-x-1/2 w-[1200px] h-1 bg-black z-0' />

						{/* Vertical lines to each first-level child */}
						<ul className='absolute top-[80px] grid gap-4 w-[1200px] bg-green-400 grid-cols-5 z-10'>
							{[
								'construction I',
								'construction II',
								'planning I',
								'logistics',
								'finance',
							].map((text, idx) => (
								<li
									key={idx}
									className={`inline-block border-2 px-8 py-1 max-w-max relative z-10 ${
										text === 'planning I'
											? 'bg-red-500 justify-self-center'
											: 'bg-white'
									}`}
								>
									{/* Vertical line from horizontal to this child */}
									<div className='absolute top-[-8px] left-1/2 -translate-x-1/2 w-1 h-8 bg-black z-0' />
									<span>{text === 'planning I' ? 'planning I' : text}</span>

									{/* Nested second-level children (only for planning I) */}
									{text === 'planning I' && (
										<>
											{/* Horizontal line above 13 children */}
											<div className='absolute top-[152px] left-1/2 -translate-x-1/2 w-[2600px] h-1 bg-black z-0' />

											<ul className='absolute top-[160px] grid grid-cols-13 gap-4 align-top justify-between w-[2600px] bg-green-400 left-1/2 -translate-x-1/2'>
												{[
													'ACCOUNTS',
													'STORE',
													'MATERIALS PROCUREMENT',
													'DESIGN & DRAWING',
													'EQUIPMENT MAINTAINANCE',
													'SAFETY & CONTROL',
													'QUALITY CONTROL',
													'BILLING',
													'ESTIMATING',
													'SCHEDULING & REPORTING',
													'GENERAL ADMINISTRATION',
													'TENDERING & COST ANALYSIS',
													'PLANNING',
												].map((title, index) => (
													<li
														key={index}
														className='flex justify-center items-center h-full text-center border-2 px-8 py-1 rotate-90 w-[200px] bg-white relative z-10'
													>
														{/* Vertical line from horizontal to this child */}
														<div className='absolute top-[-8px] left-1/2 -translate-x-1/2 w-1 h-8 bg-black z-0' />
														{title}
													</li>
												))}
											</ul>
										</>
									)}
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default V2;
