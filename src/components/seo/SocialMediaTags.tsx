'use client';

import Head from 'next/head';

const SocialMediaTags = () => {
	return (
		<Head>
			{/* Open Graph Meta Tags */}
			<meta
				property='og:title'
				content='SINAMM ENGINEERING LIMITED'
			/>
			<meta
				property='og:description'
				content="Founded in 2008, SINAMM ENGINEERING LIMITED has grown to become one of Bangladesh's most trusted names in construction and engineering."
			/>
			<meta
				property='og:image'
				content='https://sinamm.mintapp.store/social-share.jpg'
			/>
			<meta
				property='og:image:width'
				content='1200'
			/>
			<meta
				property='og:image:height'
				content='900'
			/>
			<meta
				property='og:image:type'
				content='image/jpeg'
			/>
			<meta
				property='og:url'
				content='https://sinamm.mintapp.store'
			/>
			<meta
				property='og:type'
				content='website'
			/>
			<meta
				property='og:site_name'
				content='SINAMM Engineering Limited'
			/>
			<meta
				property='og:locale'
				content='en_US'
			/>

			{/* Twitter Card Meta Tags */}
			<meta
				name='twitter:card'
				content='summary_large_image'
			/>
			<meta
				name='twitter:title'
				content='SINAMM ENGINEERING LIMITED'
			/>
			<meta
				name='twitter:description'
				content="Founded in 2008, SINAMM ENGINEERING LIMITED has grown to become one of Bangladesh's most trusted names in construction and engineering."
			/>
			<meta
				name='twitter:image'
				content='https://sinamm.mintapp.store/social-share.jpg'
			/>
			<meta
				name='twitter:creator'
				content='@sinammengineering'
			/>

			{/* Additional Meta Tags for Better SEO */}
			<meta
				name='description'
				content="Founded in 2008, SINAMM ENGINEERING LIMITED has grown to become one of Bangladesh's most trusted names in construction and engineering."
			/>
			<meta
				name='keywords'
				content='construction, engineering, Bangladesh, infrastructure, building, Dhaka'
			/>
			<meta
				name='author'
				content='SINAMM Engineering Limited'
			/>
			<link
				rel='canonical'
				href='https://sinamm.mintapp.store'
			/>
		</Head>
	);
};

export default SocialMediaTags;
