import React from 'react'
import RootLayout from '../layout/RootLayout/RootLayout'
import RootPage from '../root/RootPage'
import Image from 'next/image'
import TextBreak from '../ui/TextBreak';
import Container from '../home-page/Container';

const privacyText = `
At SINAMM ENGINEERING LTD, we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you interact with our website or services. We may collect your name, email, phone number, and information about how you use our site to help improve our services and respond to your inquiries. We do not sell or rent your data, but may share it with trusted partners or legal authorities when necessary.

We take appropriate security measures to protect your information, though no system is entirely secure. Depending on applicable laws, you may have rights to access, update, or delete your data by contacting us directly. Our website may include links to external sites that are not covered by this policy. Our services are not intended for children under 13, and we do not knowingly collect data from them. This policy may be updated occasionally, so please review it periodically to stay informed.
`;



const Privacy = () => {
  return (
    <RootLayout>
      <Container>
        <RootPage
        headerText='Privacy Policy'
        headerDescription='Learn how we collect, use, and protect your personal information when you interact with our services.'
      >
        {/* Left Side - Privacy Text */}
        <div className='flex flex-col lg:flex-row gap-10'>
          <div className='lg:w-1/2 w-full'>
            <h1 className='text-5xl md:text-8xl font-primary font-bold text-mainText mb-8'>
              <TextBreak text='Our Privacy' />
            </h1>
            <div className='text-paraText  space-y-6'>
              {privacyText.split('\n\n').map((paragraph, index) => (
                <p key={index} className='text-md leading-relaxed'>
                  {paragraph.trim()}
                </p>
              ))}
            </div>
          </div>
          {/* <div className='lg:w-1/2 w-full grid grid-cols-2 grid-rows-2 gap-2 h-auto'>
              <div className='overflow-hidden rounded-card'>
                <img
                  src='/ruppur.jpeg'
                  alt='Privacy and Security Illustration'
                  className='w-full h-full object-cover'
                />   
              </div>
              <div className='overflow-hidden rounded-card row-span-2'>
                <img
                  src='/seo-image.jpg'
                  alt='Privacy and Security Illustration'
                  className='w-full h-full object-cover'
                />   
              </div>
              <div className='overflow-hidden rounded-card'>
                <img
                  src='/about.jpeg'
                  alt='Privacy and Security Illustration'
                  className='w-full h-full object-cover'
                />   
              </div>
          </div>           */}
        </div>         
      </RootPage>
      </Container>
      
    </RootLayout>
  )
}

export default Privacy


{/* <div className='grid grid-cols-2 gap-2 animate-slide-in-right'>
            {ourCompany && ourCompany?.images && (
              <>
                <div className='overflow-hidden rounded-card'>
                  <img
                    src={ourCompany?.images[0]?.url}
                    alt={
                      ourCompany?.images[0]?.alt ||
                      'Sinamm Engineering Office'
                    }
                    className='w-full h-full object-cover'
                  />
                </div>
                <div className='overflow-hidden rounded-card row-span-2'>
                  <img
                    src={ourCompany?.images[1]?.url}
                    alt={ourCompany?.images[1]?.alt}
                    className='w-full h-full object-cover'
                  />
                </div>
                {ourCompany.images[2] && (
                  <div className='overflow-hidden rounded-lg'>
                    <img
                      src={ourCompany?.images[2].url}
                      alt={ourCompany?.images[2].alt}
                      className='w-full h-full object-cover'
                    />
                  </div>
                )}
              </>
            )}
          </div> */}