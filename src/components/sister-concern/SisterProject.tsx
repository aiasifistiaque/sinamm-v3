'use client';

import React from 'react';
import TextBreak from '../ui/TextBreak';
import { useGetAllQuery } from '@/store/services/commonApi';
import { ProjectCard } from '../home-page';


const SisterProject = () => {
  const {
    data,
    isLoading: departmentCatLoading,
    error,
  } = useGetAllQuery({
    path: 'projects',
    filters: {
      isSisterConcern: true,
    },
  });

  // if (departmentCatLoading) {
  //   return <p className='text-center py-10'>Loading sister projects...</p>;
  // }

  // if (error || !data?.doc?.length) {
  //   return <p className='text-center py-10'>No sister projects found.</p>;
  // }

  return (
    <div className='space-y-5'>
      <h1 className='text-4xl md:text-8xl font-primary text-mainText'>
        <TextBreak text='Explore Projects' />
      </h1>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {data?.doc?.map((project: any) => (
          <ProjectCard
            key={project?._id}
            project={{
              _id: project?._id,
              name: project?.name,
              image: project?.image,
              location: project?.location,
              shortDescription: project?.shortDescription,
              description: project?.overview,
              duration: project?.duration,
              client: project?.client,
              workValue: project?.workValue,
              completionDate: project?.projectCompletionDate,
              projectStatus: project?.projectStatus,
              category: project?.category,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default SisterProject;
