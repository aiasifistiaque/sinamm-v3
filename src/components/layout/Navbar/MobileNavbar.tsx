'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
interface MobileNavbarProps {
	isScrolled: boolean;
}

const MobileNavbar: React.FC<MobileNavbarProps> = ({ isScrolled }: any) => {
	const [open, setOpen] = useState(false);
	const [navlinks, setNavlinks] = useState([]);
	const [closing, setClosing] = useState(false);

	useEffect(() => {
		fetch('/homeData.json')
			.then(response => response.json())
			.then(data => setNavlinks(data?.mobileLinks || []));
	}, []);

	const handleClose = () => {
		setClosing(true);
		setTimeout(() => {
			setOpen(false);
			setClosing(false);
		}, 300);
	};

	return (
		<>
			{/* Hamburger/Close Button - Aligned with logo */}
			<button
				className='mobile-nav-button fixed p-3 focus:outline-none z-[999999] bg-black/50 backdrop-blur-md rounded-lg transition-all duration-300 hover:bg-black/70 pointer-events-auto'
				onClick={() => (open ? handleClose() : setOpen(true))}
				style={{
					top: '10px', // Custom top positioning
					right: '3px', // Custom right padding
					zIndex: 999999,
					pointerEvents: 'auto',
					position: 'fixed',
					isolation: 'isolate',
				}}>
				<div className='w-8 h-8 flex items-center justify-center relative pointer-events-none'>
					{/* First line */}
					<div
						className={`absolute w-full h-0.5 bg-[#f2f2f2] transition-all duration-300 ${
							open ? 'rotate-45' : 'rotate-0 -translate-y-1'
						}`}></div>
					{/* Second line */}
					<div
						className={`absolute w-full h-0.5 bg-[#f2f2f2] transition-all duration-300 ${
							open ? '-rotate-45' : 'rotate-0 translate-y-1'
						}`}></div>
				</div>
			</button>

			<Sheet
				open={open}
				onOpenChange={() => {}} // Disable default close behavior
			>
				<SheetTrigger asChild>
					<div className='hidden'></div>
				</SheetTrigger>
				{open && (
					<SheetContent
						side='right'
						className={`w-full pt-16 pb-4 bg-blueBg border-none flex flex-col justify-between transition-all duration-300 ${
							closing ? 'animate-sheet-close' : 'animate-sheet-open'
						} [&>button]:hidden`} // Hide the default close button
					>
						<div className='flex flex-col gap-2'>
							{navlinks?.map((link: any, index) => (
								<Link
									key={index}
									href={link?.href || '/'}
									className=' py-3 uppercase tracking-[-.5px] font-medium px-4 border-b-1 border-[#777] last:border-none text-[26px] italic text-[#ebebeb]'
									onClick={handleClose}>
									{link?.name}
								</Link>
							))}
						</div>

						{/* Copyright Footer */}
						<div className='px-4 py-4 pb-0 border-t border-[#555] mt-auto'>
							<div className='flex items-center gap-2 text-sm text-[#f2f2f2]'>
								<span>©</span>
								<span>2025 SINAMM Engineering LTD</span>
							</div>
						</div>
					</SheetContent>
				)}
			</Sheet>
		</>
	);
};

export default MobileNavbar;
