'use client';

import React, { useState } from 'react';
import { Button } from '../../ui/Button';
import Link from 'next/link';

// Define filter options as constants for better type safety
type ProjectFilter = 'all' | 'ongoing' | 'completed';

interface ProjectButtonProps {
	onFilterChange: (filter: ProjectFilter) => void;
}

const FilterButton: React.FC<ProjectButtonProps> = ({ onFilterChange }) => {
	// Set default filter to "all"
	const [activeFilter, setActiveFilter] = useState<ProjectFilter>('all');

	// Button configurations with labels and corresponding filter values
	const filterButtons = [
		{ label: 'All Projects', value: 'all' as ProjectFilter },
		{ label: 'Ongoing', value: 'ongoing' as ProjectFilter },
		{ label: 'Completed', value: 'completed' as ProjectFilter },
	];

	const handleFilterClick = (filter: ProjectFilter) => {
		setActiveFilter(filter);
		onFilterChange(filter);
	};

	return (
		<div className='flex flex-col px-4 gap-2 items-start mt-[-32px]'>
			<h4 className='text-lg text-black font-semibold'>Filter by Status</h4>
			<div className='flex gap-2'>
				{filterButtons?.map((button: any, index: number) => (
					<Link
						key={index}
						href={`/projects?type=${button?.value}`}>
						<Button
							variant={activeFilter === button?.value ? 'default' : 'outline'}
							className={
								activeFilter === button?.value
									? 'bg-primayBg font-light text-white border button-border rounded-full px-4 hover:bg-blue-700'
									: 'hover:bg-gray-200 font-light border px-4 button-border rounded-full '
							}
							key={button.value}
							onClick={() => handleFilterClick(button?.value)}>
							{button?.label}
						</Button>
					</Link>
				))}
			</div>
		</div>
	);
};

export default FilterButton;
