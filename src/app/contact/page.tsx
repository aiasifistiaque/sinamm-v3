/* eslint-disable @next/next/no-img-element */
'use client';

import RootPage from '@/components/root/RootPage';
import { useGetAllQuery } from '@/store/services/commonApi';
import React from 'react';

import ContactForm from '@/components/contact/form';
import ContactInfo from '@/components/contact/ContactInfo';
import RootLayout from '@/components/layout/RootLayout/RootLayout';
import { ScrollContainer } from '@/components/smooth-scroll';
import { Container, PageTitle } from '@/components';

const ContactPage = () => {
	const { data, isLoading } = useGetAllQuery({
		path: 'contacts',
	});
	// const isLoading = isFetching
	// const locationUrl = data?.doc?.[0]?.location || '';

	// console.log('contact', data);
	return (
		<ScrollContainer>
			<RootLayout isLoading={isLoading}>
				<Container>
					<RootPage
						headerText='Get in Touch with Sinamm Engineering Limited'
						headerDescription='Have questions or need more information? Our team is here to help. Get in touch with us today.'
					>
						<div className='space-y-5'>
							<div className='grid grid-cols-1 lg:grid-cols-2 gap-16'>
								<div className='max-w-3xl mx-auto text-left '>
									<ContactInfo />
								</div>
								<div className='max-w-3xl h-[500px] flex justify-center items-center'>
									{/* <ContactForm /> */}
									<img
										src='/contactpage.jpg'
										alt='contact'
										className='w-full object-cover h-full items-start m-auto'
									/>
								</div>
							</div>
							<div className='mt-12'>
								<PageTitle>Where to find us</PageTitle>
								<div className='h-[80vh] mt-8 w-full rounded-card overflow-hidden shadow-sm'>
									<iframe
										src='https://maps.google.com/maps?q=23.752066142181185,90.37103030679033&z=16&output=embed'
										width='100%'
										height='100%'
										style={{ border: 0 }}
										allowFullScreen
										loading='lazy'
										referrerPolicy='no-referrer-when-downgrade'
										title='Sinamm Engineering Location'
									></iframe>
								</div>
							</div>
						</div>
					</RootPage>
				</Container>
			</RootLayout>
		</ScrollContainer>
	);
};

export default ContactPage;
