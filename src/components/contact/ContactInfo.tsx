'use client';
import React from 'react';
import { MapPin, Phone, Mail, Facebook } from 'lucide-react';
import { useGetAllQuery } from '@/store/services/commonApi';
import Link from 'next/link';
const ContactInfo = () => {
	const { data, isFetching } = useGetAllQuery({
		path: 'contacts',
	});
	const contact = data?.doc?.[0];
	return (
		<div className='space-y-6 py-[32px] uppercase'>
			{/* <h1 className='text-4xl font-bold'>Get In Touch</h1> */}
			<p className='text-xl leading-[1.3] uppercase text-mainText'>
				Whether you&#39;re interested in partnering with us, learning more about our services, or
				discussing a potential project, we&#39;d love to hear from you. Reach out using the contact
				information below or send us a message through the form.
			</p>

			{/* Address */}
			<div className='flex items-start space-x-4'>
				<MapPin className='text-blueBg w-6 h-6 mt-1' />
				<div>
					<h4 className='font-semibold text-mainText'>Address</h4>
					<p className='text-mainText'>{contact?.address}</p>
				</div>
			</div>

			{/* Phone */}
			<div className='flex items-start space-x-4'>
				<Phone className='text-blueBg w-6 h-6 mt-1' />
				<div>
					<h4 className='font-semibold text-mainText'>Phone</h4>
					<p className='text-mainText'>{contact?.phone}</p>
				</div>
			</div>

			{/* Email */}
			<div className='flex items-start space-x-4'>
				<Mail className='text-blue-500 w-6 h-6 mt-1' />
				<div>
					<h4 className='font-semibold text-mainText'>Email</h4>
					<p className='text-mainText'>{contact?.email}</p>
				</div>
			</div>

			{/* Social Media */}
			<div>
				<h4 className='font-semibold text-mainText mb-2'>Follow Us</h4>
				<div className='flex space-x-4'>
					{contact?.facebook && (
						<Link
							href={contact.facebook}
							target='_blank'
							rel='noopener noreferrer'>
							<Facebook className='w-5 h-5 text-mainText hover:text-blueBg' />
						</Link>
					)}
				</div>
			</div>
		</div>
	);
};

export default ContactInfo;
