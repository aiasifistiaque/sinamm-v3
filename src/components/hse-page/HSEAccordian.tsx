// HSEAccordion.jsx
import React from 'react';
import TextBreak from '../ui/TextBreak';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';
import Flex from '../home-page/Flex';
import { policyData } from '@/lib/constant';
import TeamPreview from '../home-page/PolicySection/TeamPreview';
import PolicySectionCardV2 from '../home-page/PolicySection/PolicySectionCardV2';
import BorderBottom from '../ui/BorderBottom';
const HSEAccordion = () => { // Fixed component name
  // Define the sections for "Our Commitment" in an array
  const commitmentData = [
    {
      title: "Health and Safety",
      content: (
        <>
          - We are dedicated to providing a safe and healthy working environment for all employees, contractors, and stakeholders.
          <br />
          - Preventing work-related injuries, illnesses, and accidents.
          <br />
          - Ensuring full compliance with all relevant health and safety regulations and industry standards.
        </>
      ),
    },
    {
      title: "Environmental Protection",
      content: (
        <>
          - We strive to minimize the environmental impact of our operations through sustainable practices.
          <br />
          - Reducing waste, conserving resources, and preventing pollution.
          <br />
          - Complying with all applicable environmental laws and regulations.
        </>
      ),
    },
    {
      title: "Continuous Improvement",
      content: (
        <>
          - We set clear and measurable Health, Safety, and Environmental (HSE) objectives and targets to guide our operations.
          <br />
          - Regularly reviewing and improving our HSE practices.
          <br />
          - Encouraging innovation and continuously adopting new methods to improve our HSE performance.
        </>
      ),
    },
    {
      title: "Employee Responsibilities",
      content: (
        <>
          - Every employee is responsible for understanding and adhering to our HSE policies and procedures.
          <br />
          - Reporting any unsafe conditions, near-misses, or incidents in a timely manner.
          <br />
          - Actively participating in HSE training and awareness programs to foster a culture of safety.
        </>
      ),
    },
    {
      title: "Management Responsibilities",
      content: (
        <>
          - Managers and supervisors are responsible for leading by example and promoting a strong safety culture.
          <br />
          - Providing the necessary resources to achieve HSE objectives and ensuring full compliance with our policies and regulations.
          <br />
          - Monitoring and improving the effectiveness of HSE practices throughout the company.
        </>
      ),
    },
    {
      title: "Implementation",
      content: (
        <>
          - To ensure the effective implementation of this policy, we:
          <br />
          - Develop and maintain a comprehensive HSE management system.
          <br />
          - Conduct regular audits, inspections, and assessments to ensure compliance with our HSE standards.
          <br />
          - Communicate HSE expectations clearly to all employees, vendors, and stakeholders.
        </>
      ),
    },
  ];

  return (
    <div className='space-y-10 md:space-y-20 '>
      <div>
        <h2 className="text-4xl md:text-8xl font-bold mb-6 leading-tight text-mainText">
          <TextBreak text='Types of PPE' />
        </h2>
        <div className='space-y-4'>
          <div className='overflow-x-scroll lg:overflow-x-hidden flex gap-4'>
            {policyData?.map((item: any, index: number) => (
              <PolicySectionCardV2
                key={index}
                item={item}
              />
            ))}
          </div>
          <TeamPreview />
        </div>
      </div>
        <BorderBottom />
      <div>
          <h2 className="text-4xl md:text-8xl font-bold mb-6 text-mainText">
            <TextBreak text='Our Commitment' />
          </h2> 
          <Accordion type="single" collapsible className="space-y-2">
            {commitmentData.map((item, index) => (
              <AccordionItem key={index} value={`item-${index + 1}`}>
                <AccordionTrigger className="text-2xl md:text-4xl font-medium">
                  {item.title}
                </AccordionTrigger>
                <AccordionContent className='destext'>
                  {item.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
      </div>
    </div>
    
  );
};

export default HSEAccordion; // Fixed export name