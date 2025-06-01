"use client"
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import SecondaryButton from '@/components/ui/SecondaryButton';
import AboutIntro from '@/components/home-page/About/AboutIntro';
import { Check } from 'lucide-react';
import ViewAllLink from '@/components/ui/ViewAllLink';

const Page = () => {
  const [isVisible, setIsVisible] = useState(false);
  const videoUrl = "https://statom.co.uk/assets/video/2024/Dec/homepage-6-v3-2.mp4";

  useEffect(() => {
    // Trigger animation on mount
    setIsVisible(true);
  }, []);

  const statsData = [
    {
      value: "15+",
      label: "Years Experience",
    },
    {
      value: "120+",
      label: "Projects Complete",
    },
    {
      value: "80+",
      label: "Expert Engineers",
    },
    {
      value: "25+",
      label: "Awards Won",
    }
  ];

  const features = [
		{
			title: 'Quality Assurance',
			description: 'Highest standards in every project',
		},
		{
			title: 'Expert Team',
			description: 'Skilled professionals and engineers',
		},
		{
			title: 'Modern Equipment',
			description: 'Latest technology and machinery',
		},
		{
			title: 'Safety First',
			description: 'Rigorous safety protocols',
		},
	];
  // const projectsData = await getHomeProject();

  return (
    <>
      <div className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">
        <div className='absolute inset-0 z-0'>
          {videoUrl && (
          <>
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover z-0"
            >
              <source src={videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 z-10 bg-black/30" />
            <div className="absolute inset-0 z-15 bg-gradient-to-r from-gray-800/90 via-transparent to-gray-800/50" />
            <div className="absolute inset-0 z-20 bg-gradient-to-b from-gray-800/90 via-transparent to-gray-800/50" />
          </>
        )}

        {/* Foreground content */}
        <div className='flex flex-col justify-between h-full w-full'>
            {/* Main Content */}
            <div className='container mx-auto z-20 text-white px-4'>
              <div className='mt-52 my-24 md:my-0 md:mt-[350px]'>
                <div className='space-y-5'>
                  <div>
                    <h1
                      className='text-[70px] md:text-[146px] leading-[0.7] font-bold font-primary'
                      style={{ 
                        WebkitTextStroke: '4px #074d87',
                        paintOrder: 'stroke fill'
                      }}
                    >
                      SINAMM
                    </h1>
                    <h2 className='text-[40px] md:text-[77px] font-bold'>Engineering LTD</h2>
                  </div>
                  <p className='text-lg md:text-lg text-white lg:w-1/3 w-full leading-relaxed'>
                    SINAMM ENGINEERING LIMITED named as SINAMM was conceived and formed in the year 2004 by a team of qualified Engineers and other professionals possessing long-standing experience
                  </p>
                  <SecondaryButton href='/projects' className='border-button-border rounded-full'>
                  Our Projects
                </SecondaryButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=' w-full mt-[65px] py-[64px]'>
        <div className='flex flex-col lg:flex-row container mx-auto gap-10 justify-center items-center'>
          <div className='lg:w-1/2 w-full px-4 pb-14'>
            <div className="relative">
        <div className="relative overflow-hidden shadow-xl ">
          <img
            src="/about.jpeg"
            alt="Sinamm Engineering Building"
            className="w-full md:h-auto rounded-card object-cover"
          />
        </div>

        {/* Floating Stats Box */}
        <div className="absolute rounded-card -bottom-9 md:right-3 lg:-right-5 right-8 text-white bg-blueBg md:p-6 p-2 shadow-lg md:max-w-full animate-scale-in">
          <div className="grid grid-cols-2 md:gap-4 gap-2">
            {statsData.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="md:text-3xl text-lg font-bold">{stat.value}</p>
                <p className="md:text-sm text-xs">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
          </div>
          <div className='lg:w-1/2 w-full px-4'>
            <div className='space-y-5 '>

              <div className={`mb-5 flex flex-col md:max-w-[50vw]`}>
      {/* <SectionHeader text={headerText || ""} /> */}
      <h2
        className="text-3xl md:text-[38px] md:text-left text-center uppercase font-bold font-primary text-mainText"
      >
        Building Tomorrow&#39;s Infrastructure with Excellence Today
      </h2>
      <p className="md:max-w-[40vw] text-paraText md:text-justify">
        Founded in 2008, Sinamm Engineering Limited has grown to become one of Bangladesh&#39;s most trusted names in construction and engineering. Our team of experienced professionals brings innovation, quality, and reliability to every project we undertake.
      </p>
    </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8'>
          {features.map((feature, index) => (
            <div key={index} className='flex items-start space-x-3'>
              <div className='bg-[#e5ecf7] p-2 rounded-full text-primary'>
                <Check className='h-5 w-5' />
              </div>
              <div>
                <h4 className='font-semibold text-mainText'>{feature?.title}</h4>
                <p className='text-sm text-paraText'>{feature?.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* <PrimaryButton href='/about' className='py-1 mt-2 md:px-5 px-3 text-md'>
          Learn More About Us
        </PrimaryButton> */}
        {/* <Link 
          href='/about' 
          className=' text-textBlue flex gap-1 items-center justify-end font-medium hover:text-textHover transition-colors'
        >
          Learn More About Us <HiArrowLongRight className='size-7' />
        </Link> */}
        <ViewAllLink href='/about' text='Learn More About Us' className='items-center text-blueBg pt-3 md:justify-center justify-start' />
      </div>
          </div>
        </div>
      </div>
      {/* <ProjectSection data={projectsData?.doc} /> */}
    </>
  );
};

export default Page;
