'use client';

import { useEffect, useState } from 'react';
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import Link from 'next/link';
import { MapPin, Phone, Mail } from 'lucide-react';
import { useGetAllQuery } from '@/store/services/commonApi';

type FootLink = {
	name: string;
	href: string;
};

type CompanyInfo = {
	name: string;
	description: string;
};

const FooterLeft = () => {
	const [footLinks, setFootLinks] = useState<FootLink[]>([]);
	const [companyInfo, setCompanyInfo] = useState<CompanyInfo>({
		name: '',
		description: '',
	});

	useEffect(() => {
		const fetchLinks = async () => {
			try {
				const res = await fetch('/homeData.json');
				const data = await res.json();
				setFootLinks(data?.footlinks || []);
				setCompanyInfo(data?.companyInfo);
			} catch (error) {
				console.error('Failed to load nav links:', error);
			}
		};

		fetchLinks();
	}, []);
	const columns = [footLinks?.slice(0, 6), footLinks?.slice(6, 12)];

	const { data, isFetching } = useGetAllQuery({
		path: 'contacts',
	});
	const contact = data?.doc?.[0];

	return (
		<div className='uppercase space-y-10 flex flex-col mx-auto lg:flex-row justify-between gap-12'>
			{/* Company Info */}
			<div className='space-y-4 max-w-md'>
				<h3 className='text-5xl font-light font-primary text-white tracking-[-2px]'>
					SINAMM ENGINEERING LTD
				</h3>
				<p className='text-gray-400 leading-[1.2]'>{companyInfo.description}</p>
				<div className='flex space-x-4 pt-2'>
					<a
						href='#'
						className='text-gray-400 hover:text-white transition-colors'>
						<Facebook className='h-5 w-5' />
					</a>
				</div>
			</div>

			{/* Quick Links */}
			<div>
				<h4 className='text-lg font-semibold text-white font-primary mb-4'>QUICK LINKS</h4>
				<div className='grid grid-cols-2 gap-8'>
					{columns?.map((column, index) => (
						<ul
							key={index}
							className='space-y-6'>
							{column?.map((link: any) => (
								<li key={link.href}>
									<Link
										href={link?.href || '/'}
										className='hover:text-white uppercase text-[14px] font-light text-gray-300 transition-colors'>
										{link?.name}
									</Link>
								</li>
							))}
						</ul>
					))}
				</div>
			</div>

			<div>
				<h4 className='text-lg  text-white font-primary mb-4 '>CONTACT INFO</h4>
				<address className='not-italic text-[14px] font-light  space-y-3'>
					<p className='flex items-start space-x-3'>
						<MapPin className='h-5 w-5 mt-0.5 shrink-0' />
						<span>{contact?.address}</span>
					</p>
					<p className='flex items-start space-x-3'>
						<Phone className='h-5 w-5 mt-0.5 shrink-0' />
						<span>{contact?.phone}</span>
					</p>
					<p className='flex items-start space-x-3'>
						<Mail className='h-5 w-5 mt-0.5 shrink-0' />
						<span>{contact?.email}</span>
					</p>
				</address>
			</div>
		</div>
	);
};

export default FooterLeft;
