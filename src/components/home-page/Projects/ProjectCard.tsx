/* eslint-disable @next/next/no-img-element */
'use client';

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { PiArrowCircleUpRightThin } from 'react-icons/pi';
import parser from 'html-react-parser';
import Column from '../Column';
import Flex from '../Flex';

type ProjectCardProps = {
	project: any;
	cols?: number;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project, cols }) => {
	const [isHovered, setIsHovered] = useState(false);
	const [showDetails, setShowDetails] = useState(false);
	const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
	const [isMouseOver, setIsMouseOver] = useState(false);

	// Animation controls
	const descriptionControls = useAnimation();
	const detailsControls = useAnimation();
	const additionalContentControls = useAnimation();
	const gridItemControls = useAnimation();

	const handleMouseEnter = async () => {
		setIsHovered(true);

		// Start exit animation for description
		await descriptionControls.start({
			opacity: 0,
			y: -15,
			transition: { duration: 0.2, ease: 'easeInOut' },
		});

		// Switch content and animate in details
		setShowDetails(true);

		// ...existing animation code...
	};

	const handleMouseMove = (e: React.MouseEvent) => {
		setCursorPosition({ x: e.clientX, y: e.clientY });
		setIsMouseOver(true);
	};

	const handleMouseLeave = async () => {
		setIsMouseOver(false);

		// Start exit animations for all hovered content
		await Promise.all([
			detailsControls.start({
				opacity: 0,
				y: -20,
				transition: { duration: 0.25, ease: 'easeInOut' },
			}),
			gridItemControls.start({
				opacity: 0,
				y: -10,
				transition: { duration: 0.2, ease: 'easeInOut' },
			}),
			additionalContentControls.start({
				opacity: 0,
				y: -20,
				transition: { duration: 0.25, ease: 'easeInOut' },
			}),
		]);

		// Switch content back and animate in description
		setShowDetails(false);
		setIsHovered(false);

		// ...existing animation code...
	};

	// Initialize animations
	useEffect(() => {
		if (!showDetails) {
			descriptionControls.set({ opacity: 1, y: 0 });
			detailsControls.set({ opacity: 0, y: 20 });
			gridItemControls.set({ opacity: 0, y: 10 });
			additionalContentControls.set({ opacity: 0, y: 20 });
		}
	}, [
		showDetails,
		descriptionControls,
		detailsControls,
		gridItemControls,
		additionalContentControls,
	]);

	return (
		<>
			{/* Custom cursor text */}
			{/* {!isHovered && isMouseOver && (
				<div
					className='fixed pointer-events-none z-[9999] transform -translate-x-1/2 -translate-y-full'
					style={{
						left: cursorPosition.x,
						top: cursorPosition.y - 10,
						transform: 'translate(-50%, -100%) rotate(20deg)',
					}}>
					<div className='bg-[white] text-gray-800 tracking-[1px] px-1 py-[1px] rounded border border-gray-300 text-[10px] font-medium whitespace-nowrap shadow-md'>
						Click to Expand
					</div>
				</div>
			)} */}

			{/* <div className='rounded-[12px] overflow-hidden relative h-[460px]'> */}
			<div className='rounded-card overflow-hidden relative h-[560px]'>
				{/* Image Section - Full container height, always visible behind */}
				{/* <div className='absolute inset-0 rounded-[12px] overflow-hidden'> */}
				{/* <div className='inset-0 rounded-[12px] overflow-hidden'> */}
				<div className='inset-0 bg-[#0d0d0d] rounded-card h-[350px] overflow-hidden'>
					<img
						src={project?.image ? project?.image : '/ruppur.jpeg'}
						alt={project?.name || 'Project image'}
						className='w-full object-cover h-full'
					/>
				</div>

				{/* Card Body - Drawer that swipes up from bottom overlaying the image */}
				<motion.div
					className='bg-cardBg backdrop-blur-sm absolute bottom-0 left-0 right-0 z-10 rounded-t-[8px]'
					onClick={handleMouseEnter}
					onMouseLeave={handleMouseLeave}
					onMouseMove={handleMouseMove}
					initial={false}
					animate={{
						height: isHovered ? '70%' : 'auto',
					}}
					transition={{
						duration: isHovered ? 0.5 : 0.8,
						ease: [0.23, 1, 0.32, 1],
						delay: isHovered ? 0 : 0.2,
					}}
					style={{
						overflow: 'hidden',
						cursor: isHovered && !showDetails ? 'none' : 'pointer',
					}}>
					{/* Content Container - Always maintains bottom alignment for View Details */}
					<Column className={`p-4 pt-2 pb-0 h-full flex flex-col`}>
						{/* Main Content - Takes available space */}
						<div className='flex-1 min-h-0'>
							{/* Header - Always Visible */}
							<motion.div
								className='mb-4'
								initial={false}
								animate={{ opacity: 1, y: 0 }}
								transition={{
									duration: 0.4,
									ease: 'easeOut',
								}}>
								<motion.div
									className='flex flex-wrap gap-2 mb-3'
									initial={{ opacity: 0, y: 10 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{
										delay: 0.25,
										duration: 0.25,
										ease: 'easeOut',
									}}></motion.div>
								{/* <h3 className='text-[22px] font-primary font-semibold leading-[1.2] text-mainText mb-2'> */}
								<h3 className='text-[24px] uppercase font-primary leading-[1.1] font-medium tracking-[-.4px] h-[52px] overflow-hidden text-mainText mb-2'>
									{project?.name}
								</h3>
								{/* <motion.p
									className='uppercase italic text-paraText text-xs mb-2'
									initial={false}
									style={{
										WebkitLineClamp: 1,
									}}
									animate={{ opacity: 1 }}
									transition={{
										delay: 0.1,
										duration: 0.3,
									}}>
									{project?.location}
								</motion.p> */}
								<motion.div
									className='space-x-1'
									animate={{ opacity: 1 }}
									transition={{
										delay: 0.1,
										duration: 0.3,
									}}>
									<span className='px-2 border-[.5px] border-b-[2px] border-mainText py-1 text-xs rounded-[2px] bg-[whitesmoke] uppercase font-medium text-mainText'>
										Work value: {project?.workValue}
									</span>
									<span className='px-2 border-[.5px] border-b-[2px] border-mainText py-1 text-xs rounded-[2px] bg-[whitesmoke] uppercase font-medium text-mainText'>
										{project?.projectStatus}
									</span>
								</motion.div>
							</motion.div>

							{/* Content Section - Shows different content based on hover state */}
							<motion.div
								className='mb-3'
								initial={false}
								animate={{ opacity: 1 }}
								transition={{
									duration: 0.3,
									delay: isHovered ? 0.15 : 0,
								}}>
								{/* Short Description - always rendered but controlled by animation */}
								{!showDetails && (
									<motion.p
										className='text-mainText text-sm uppercase leading-[1.3]'
										animate={descriptionControls}
										style={{
											display: '-webkit-box',
											WebkitLineClamp: 2,
											WebkitBoxOrient: 'vertical',
											overflow: 'hidden',
										}}>
										{parser(project?.shortDescription)}
									</motion.p>
								)}

								{/* Project Details Grid - always rendered but controlled by animation */}
								{showDetails && (
									<motion.div
										className='grid grid-cols-2 gap-4'
										animate={detailsControls}>
										{/* loaction */}
										{project?.location && (
											<motion.div
												className='space-y-1'
												custom={1}
												animate={gridItemControls}>
												<h4 className='text-xs font-semibold text-gray-500 uppercase tracking-wide'>
													Location
												</h4>
												<p className='text-sm text-mainText font-medium'>{project?.location}</p>
											</motion.div>
										)}

										{/* Client */}
										{project?.client && (
											<motion.div
												className='space-y-1'
												custom={1}
												animate={gridItemControls}>
												<h4 className='text-xs font-semibold text-gray-500 uppercase tracking-wide'>
													Client
												</h4>
												<p className='text-sm text-mainText font-medium'>{project?.client}</p>
											</motion.div>
										)}
										{/* Duration */}
										{project?.duration && (
											<motion.div
												className='space-y-1'
												custom={0}
												animate={gridItemControls}>
												<h4 className='text-xs font-semibold text-gray-500 uppercase tracking-wide'>
													Duration
												</h4>
												<p className='text-sm text-mainText font-medium'>{project?.duration}</p>
											</motion.div>
										)}

										{/* Work Value */}

										{project?.workValue && (
											<motion.div
												className='space-y-1'
												custom={2}
												animate={gridItemControls}>
												<h4 className='text-xs font-semibold text-gray-500 uppercase tracking-wide'>
													Work Value
												</h4>
												<p className='text-sm text-mainText font-medium'>{project?.workValue}</p>
											</motion.div>
										)}

										{/* Completion Date */}
										{project?.completionDate && (
											<motion.div
												className='space-y-1'
												custom={3}
												animate={gridItemControls}>
												<h4 className='text-xs font-semibold text-gray-500 uppercase tracking-wide'>
													Completed
												</h4>
												<p className='text-sm text-mainText font-medium'>
													{project?.completionDate}
												</p>
											</motion.div>
										)}
									</motion.div>
								)}
							</motion.div>

							{/* Additional Content - Only visible when hovered and scrollable */}
							{isHovered && (
								<motion.div
									animate={additionalContentControls}
									className='space-y-4 overflow-y-auto flex-1 pb-4'>
									{/* Project Status and Category */}
									{(project?.projectStatus || project?.category?.name) && (
										<motion.div
											className='flex flex-wrap gap-2 mb-3'
											initial={{ opacity: 0, y: 10 }}
											animate={{ opacity: 1, y: 0 }}
											transition={{
												delay: 0.25,
												duration: 0.25,
												ease: 'easeOut',
											}}>
											{project?.projectStatus && (
												<span
													className={`px-3 py-1 text-xs rounded-full font-medium ${
														project?.projectStatus === 'ongoing'
															? 'bg-blue-100 text-blue-900'
															: 'bg-green-100 text-green-800'
													}`}>
													{project?.projectStatus === 'ongoing' ? 'Ongoing' : 'Completed'}
												</span>
											)}
											{/* {project?.category?.name && (
												<span className='px-3 py-1 text-xs rounded-full bg-gray-100 text-gray-800 font-medium'>
													{project?.category?.name}
												</span>
											)} */}
										</motion.div>
									)}

									{/* Full Description if different from short description */}
									{project?.description && project?.description !== project?.shortDescription && (
										<motion.div
											initial={{ opacity: 0, y: 10 }}
											animate={{ opacity: 1, y: 0 }}
											transition={{
												delay: 0.3,
												duration: 0.25,
												ease: 'easeOut',
											}}>
											<h4 className='font-semibold text-sm text-mainText mb-2'>Full Description</h4>
											<p className='text-mainText text-sm leading-relaxed'>
												{parser(project?.description)}
											</p>
										</motion.div>
									)}

									{/* Additional project details */}
									{project?.duration && (
										<motion.div
											initial={{ opacity: 0, y: 10 }}
											animate={{ opacity: 1, y: 0 }}
											transition={{
												delay: 0.35,
												duration: 0.25,
												ease: 'easeOut',
											}}>
											<span className='font-semibold text-sm text-mainText'>Duration: </span>
											<span className='text-sm text-gray-600'>{project?.duration}</span>
										</motion.div>
									)}
								</motion.div>
							)}
						</div>

						<Link href={`/projects/${project._id}`}>
							{/* Call to Action - Always fixed at bottom */}
							<motion.div
								className={`mt-auto pt-4 pb-4 ${isHovered ? 'border-t border-gray-200' : ''}`}
								initial={false}
								animate={{ opacity: 1 }}
								transition={{
									duration: 0.3,
									delay: isHovered ? 0.2 : 0,
								}}>
								<Flex className='flex justify-between text-blue-900 font-medium text-sm hover:underline transition-colors items-center w-full relative'>
									<span>View Details & Gallery</span>
									<PiArrowCircleUpRightThin
										size={26}
										className='text-blue-900 ml-2'
									/>
								</Flex>
							</motion.div>
						</Link>
					</Column>
				</motion.div>
			</div>
		</>
	);
};

export default ProjectCard;
