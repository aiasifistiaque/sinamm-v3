import React, { useState } from 'react';
import { Button } from '../ui/Button';
import { useGetAllQuery } from '@/store/services/commonApi';
import { useRouter } from 'next/navigation';

type MachinaryFilter = 'all';

interface MachinaryButtonProps {
	onFilterChange?: (filter: MachinaryFilter) => void;
	categories?: any;
}

const MachinaryBtn: React.FC<MachinaryButtonProps> = ({
	onFilterChange,
	categories,
}) => {
	const router = useRouter();
	const [activeFilter, setActiveFilter] = useState<MachinaryFilter>('all');
	const handleFilterClick = (filter: any) => {
		const filterVal = filter?.name ? filter?.name : 'all';
		setActiveFilter(filterVal);
		router.push(`/machinery?type=${filter?._id ? filter?._id : 'all'}`);
		// onFilterChange(filter)
	};
	// const {data, isFetching} = useGetAllQuery({
	//   path: "machinery-categories",
	//   sort: "asc"
	// })
	// console.log("machinary", data)
	return (
		<div className='flex flex-wrap gap-2 justify-center '>
			<Button
				variant={activeFilter === 'all' ? 'default' : 'outline'}
				className={
					activeFilter === 'all'
						? 'bg-primayBg font-light text-white border border-button-border rounded-full px-4 '
						: 'hover:bg-buttonHover font-light border border-button-border rounded-full px-4'
				}
				onClick={() => handleFilterClick('all')}
			>
				All Equipments
			</Button>
			{categories?.map((item: any, i: number) => (
				<Button
					variant={activeFilter === item?.name ? 'default' : 'outline'}
					className={
						activeFilter === item?.name
							? 'bg-primayBg font-light text-white border border-button-border rounded-full px-4 '
							: 'border-gray-300 hover:bg-buttonHover rounded-full px-4'
					}
					key={i}
					onClick={() => handleFilterClick(item)}
				>
					{item?.name}
				</Button>
			))}
		</div>
	);
};

export default MachinaryBtn;
