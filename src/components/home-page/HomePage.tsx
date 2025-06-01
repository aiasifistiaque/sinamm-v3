'use client';
import React from 'react';
import { ScrollContainer } from '../smooth-scroll';
// import Project from './Projects/Project'

type HomepageProps = {
	children: React.ReactNode;
};

const HomePage = ({ children }: HomepageProps) => {
	// const { isLoading } = useGetAllQuery({ path: 'banners' });
	return <ScrollContainer>{children}</ScrollContainer>;
};

export default HomePage;
