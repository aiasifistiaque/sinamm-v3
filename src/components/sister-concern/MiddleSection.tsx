import React from 'react';
import TextBreak from '../ui/TextBreak';

const services = [
  {
    name: 'INNOVATION',
    description:
      'We provide building services to clients who value diligence, resourcefulness and creativity in a partner.',
  },
  {
    name: 'INTELLIGENCE',
    description:
      'Our team offers the expertise and foresight to assist on a project from inception to completion.',
  },
  {
    name: 'INTEGRITY',
    description:
      'We provide building services to clients who value diligence, resourcefulness and creativity in a partner.',
  },
];

const MiddleSection = () => {
  return (
    <div className=' space-y-5'>
      <h1 className='text-4xl md:text-8xl font-primary text-mainText'>
        <TextBreak text='About Circle Holdings' />
      </h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {services.map((service, index) => (
          <div
            key={index}
            className='bg-cardBg rounded-card p-6 flex flex-col justify-between space-y-4'
          >
            <div className='space-y-2'>
              <h1 className='text-5xl font-semibold text-mainText'>
                {(index + 1).toString().padStart(2, '0')}
              </h1>
              <h3 className='text-lg font-primary font-semibold text-mainText'>
                {service.name}
              </h3>
              <p className='text-base italic text-paraText'>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MiddleSection;
