"use client";

import React, { useState, useEffect } from 'react';
import ProjectHeader from './ProjectHeader';
import ProjectButton from './ProjectButton';
import ProjectBody from './ProjectBody';

type Project = {
  id: string;
  title: string;
  image: string;
  category: string;
  location: string;
  status: 'ongoing' | 'completed';
  description: string;
};

type HomeData = {
  projects: Project[];
};

const Project: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch('/homeData.json')
      .then(res => res.json())
      .then((data: HomeData) => {
        setProjects(data.projects || []);
        setFilteredProjects(data.projects || []);
      })
      .catch(error => {
        console.error('Error loading projects:', error);
      });
  }, []);

  const handleFilterChange = (filter: 'all' | 'ongoing' | 'completed') => {
    if (filter === 'all') {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter(project => project.status === filter);
      setFilteredProjects(filtered);
    }
  };

  return (
    <div className="flex flex-col max-w-7xl mx-auto my-9">
      <div className="flex flex-col md:flex-row flex-wrap w-full">
        <div className='md:w-1/2 w-full px-4'>
          <ProjectHeader />
        </div>
        <div className='flex md:w-1/2 w-full justify-start md:justify-end'>
          
          <ProjectButton onFilterChange={handleFilterChange} />
        </div>
      </div>
      <div>
        <ProjectBody projects={filteredProjects} mode="home" />
      </div>
    </div>
  );
};

export default Project;
