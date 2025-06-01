'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { AlignJustify } from 'lucide-react';
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
			.then(data => setNavlinks(data?.navlinks || []));
	}, []);

	const handleClose = () => {
		setClosing(true);
		setTimeout(() => {
			setOpen(false);
			setClosing(false);
		}, 300);
	};

	return (
		<Sheet
			open={open}
			onOpenChange={v => (v ? setOpen(true) : handleClose())}>
			<SheetTrigger asChild>
				<AlignJustify
					strokeWidth='0.5px'
					className={`size-6 ${isScrolled ? 'text-[#f2f2f2]' : 'text-[#f2f2f2]'}`}
					onClick={() => setOpen(true)}
				/>
			</SheetTrigger>
			{open && (
				<SheetContent
					side='right'
					className={`w-[300px] bg-mainBg border-none px-5 py-5 flex flex-col gap-4 transition-all duration-300 ${
						closing ? 'animate-sheet-close' : 'animate-sheet-open'
					}`}>
					{navlinks?.map((link: any, index) => (
						<Link
							key={index}
							href={link?.href || '/'}
							className=' py-2 text-lg font-medium hover:underline text-mainText rounded-lg transition'
							onClick={handleClose}>
							{link?.name}
						</Link>
					))}
				</SheetContent>
			)}
		</Sheet>
	);
};

export default MobileNavbar;
