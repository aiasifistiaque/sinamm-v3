'use client';
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '../ui/badge';
const SisterHero = ({ sisterConcerns }: any) => {
	return (
		<div
			style={{
				backgroundImage: `url(${'/sister-cover.jpg'})`,
			}}
			className='w-full h-[65vh] bg-cover bg-center relative'
		>
			<div className='absolute inset-0 bg-gradient-to-r from-black/40 to-transparent' />
			<div className='w-full h-full flex items-end md:items-center'>
				<div className='line-badge py-4 z-20 w-full md:mr-[10vw] lg:mr-[20vw] xl:mr-0'>
					<div className='max-w-7xl mx-auto w-full h-full flex flex-col justify-center px-4 relative z-10'>
						<div className='w-full text-white h-full flex flex-col justify-end md:justify-center'>
							<div className=''>
								<div className='flex items-center mb-0 sm:mb-4'>
									<Link
										href='/projects'
										className='text-white/80 hover:text-white flex items-center'
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
											className='h-4 w-4 mr-2'
										>
											<path d='m15 18-6-6 6-6'></path>
										</svg>
										Back to Projects
									</Link>
								</div>
								<div className='flex items-center gap-4'>
									<motion.h1
										className='text-2xl md:text-5xl font-bold mb-4 bg-[] p-2'
										initial={{ opacity: 0, y: -20 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ duration: 0.5 }}
									>
										{sisterConcerns?.name}
									</motion.h1>
								</div>
								<motion.div
									className='flex flex-wrap items-center gap-4 mb-6'
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{ duration: 0.5, delay: 0.2 }}
								>
									<Badge className='bg-[#e5ecf7] ml-2 sm:ml-0'>
										<span className='text-[#1447E6]'>
											{sisterConcerns?.description}
										</span>

										{/* {project?.projectStatus === 'completed' ? 'Completed' : 'Ongoing'} */}
									</Badge>
								</motion.div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SisterHero;
