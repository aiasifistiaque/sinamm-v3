'use client'; // Ensure this is a Client Component in Next.js

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Column, Flex } from '@/components';
import { PiArrowCircleUpRightLight } from 'react-icons/pi';
import { useIsMobile } from '@/components/hooks/use-mobile';

// Define the ProjectFilter type
type ProjectFilter = 'all' | 'ongoing' | 'completed';

// Define the props interface
interface ProjectButtonProps {
	onFilterChange: (filter: ProjectFilter) => void;
	categories?: any;
	title?: string;
}

const ProjectButton: React.FC<ProjectButtonProps> = ({ onFilterChange, categories, title }) => {
	const router = useRouter();
	const searchParams = useSearchParams();
	const typeParam = searchParams.get('type');

	// Set initial activeFilter based on typeParam, default to 'all' if invalid
	const getInitialFilter = (): ProjectFilter => {
		const validFilters: ProjectFilter[] = ['all', 'ongoing', 'completed'];
		return validFilters.includes(typeParam as ProjectFilter) ? (typeParam as ProjectFilter) : 'all';
	};

	const [activeFilter, setActiveFilter] = useState<ProjectFilter>(getInitialFilter());
	const handleFilterClick = (filter: ProjectFilter) => {
		setActiveFilter(filter);
		onFilterChange(filter);
		router.push(`/projects?type=${filter}`);
	};

	// Sync activeFilter with URL changes
	useEffect(() => {
		const newFilter = getInitialFilter();
		if (newFilter !== activeFilter) {
			setActiveFilter(newFilter);
			onFilterChange(newFilter); // Notify parent of filter change
		}
	}, [typeParam, activeFilter, onFilterChange]);

	// Button configurations
	const filterButtons: { label: string; value: ProjectFilter }[] = [
		{ label: 'All', value: 'all' },
		{ label: 'Completed', value: 'completed' },
		{ label: 'Ongoing', value: 'ongoing' },
	];

	const buttonCss = cn(
		'uppercase',
		'font-light',
		'px-4',
		'md:px-2',
		'w-[45vw]',
		'md:w-auto',
		'rounded-none',
		'font-normal',
		'text-mainText',
		'border-b-2',
		'border-button-border',
		'italic',
		'border-textLight'
	);

	const isMobile = useIsMobile();
	const btnSize = isMobile ? 26 : 32;

	return (
		<Flex className='w-full flex-col md:flex-row gap-4 justify-between items-end border-b-[.5px] pb-6 border-mainText'>
			<Flex className='items-center self-start gap-2'>
				<PiArrowCircleUpRightLight size={btnSize} />
				<p className={cn('text-mainText', 'italic', 'text-[20px]', 'md:text-[34px]', 'uppercase')}>
					{title}
				</p>
			</Flex>

			<Flex className='gap-2 w-full md:w-auto justify-between md:justify-end'>
				{filterButtons.map(
					(button, index) =>
						activeFilter !== button?.value && (
							<Link
								key={index}
								href={`/projects?type=${button?.value}`}>
								<Button
									variant={activeFilter === button?.value ? 'default' : 'outline'}
									className={cn(buttonCss)}
									onClick={() => handleFilterClick(button?.value)}>
									{!isMobile && 'View '}
									<span className='font-semibold'>{button?.label}</span>Projects
								</Button>
							</Link>
						)
				)}
			</Flex>
		</Flex>
	);
};

export default ProjectButton;
