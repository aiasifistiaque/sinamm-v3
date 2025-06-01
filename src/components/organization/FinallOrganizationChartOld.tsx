import { useGetAllQuery } from '@/store/services/commonApi';
import React from 'react';
import SectionIntro from '../ui/SectionIntro';

const OrganizationChart = ({ data }: any) => {
	// console.log('all data:', data);
	const { parents, children, subchildren } = categorizeDepartments(data || []);

	return (
		<div className='w-full flex justify-center h-[48vh]'>
			<div className='w-[1044px]'>
				<div className='parent-container'>
					<div className='parent-one flex w-full justify-center relative'>
						<span className='inline-block border-2 p-2'>
							{parents[0]?.name}
						</span>
						<div className='absolute bottom-[-22px] left-[49.92%] -translate-x-1/2 w-[2px] h-[22px] bg-black z-0' />
						{/* Horizontal line above first-level children */}
						<div className='absolute top-[65px] left-1/2 -translate-x-1/2 w-[1200px] h-[2px] bg-black z-0' />
						<ul className='absolute top-[80px] grid gap-4 w-[1200px] grid-cols-5 z-10'>
							{children?.map((text: any, idx: number) => (
								<li
									key={idx}
									className={`inline-block border-2 px-8 py-1 max-w-max relative z-10 ${
										text?.name == 'PLANNING (I)'
											? 'justify-self-center'
											: 'bg-transparent'
									}`}
								>
									{/* Vertical line from horizontal to this child */}
									<div className='absolute top-[-16px] left-1/2 -translate-x-1/2 w-[2px] h-[15px] bg-black z-0' />

									<span>
										{text?.name == 'PLANNING (I)' ? 'PLANNING (I)' : text?.name}
									</span>

									{/* Nested second-level children (only for PLANNING (I)) */}
									{text?.name == 'PLANNING (I)' && (
										<>
											{/* Vertical line from "planning I" to its child horizontal line */}
											<div className='absolute top-[32px] left-1/2 -translate-x-1/2 w-[2px] h-[32px] bg-black z-0' />
											{/* Horizontal line above 13 children */}
											<div className='absolute top-[64px] left-1/2 -translate-x-[48%] w-[1300px] h-[2px] bg-black z-0' />

											<ul className='absolute top-[160px] grid grid-cols-13 gap-4 align-top justify-between w-[1200px] left-1/2 -translate-x-1/2'>
												{subchildren?.map((title: any, index: number) => (
													<li
														key={index}
														className='flex justify-center items-center h-full text-center border-2 px-8 py-1 rotate-90 w-[200px] bg-transparent relative z-10'
													>
														{/* Vertical line from horizontal to this child */}
														<div className='absolute top-[24px] left-[-14px] -translate-x-1/2 w-[27px] h-[2px] bg-black z-0' />
														{title?.name}
													</li>
												))}
											</ul>
										</>
									)}
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default OrganizationChart;

function categorizeDepartments(departments: any[]): any {
	const parents: any[] = [];
	const children: any[] = [];
	const subchildren: any[] = [];

	// Find the parent department (no parentDepartment)
	const parentDept = departments.find(dept => !dept.parentDepartment);

	if (parentDept) {
		parents.push(parentDept);
	}

	// Find children (direct children of the parent department)
	const childDepts = departments.filter(
		dept =>
			dept.parentDepartment && dept.parentDepartment._id === parentDept?._id
	);
	children.push(...childDepts);

	// Find subchildren (children of any child department)
	const subchildDepts = departments.filter(
		dept =>
			dept.parentDepartment &&
			childDepts.some(child => child._id === dept.parentDepartment?._id)
	);
	subchildren.push(...subchildDepts);

	return { parents, children, subchildren };
}
