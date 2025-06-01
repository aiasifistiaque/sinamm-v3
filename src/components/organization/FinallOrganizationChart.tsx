// import React from 'react';

// const OrganizationChart = ({ data }: any) => {
// 	// console.log('all data:', data);
// 	const { parents, children, subchildren } = categorizeDepartments(data || []);

// 	return (
// 		<div className='w-full flex justify-center h-[48vh]'>
// 			<div className='max-w-[1044px]'>
// 				<div className='parent-one flex w-full justify-center relative'>
// 					<span className='inline-block border-2 p-2'>{parents[0]?.name}</span>
// 					<div className='absolute bottom-[-22px] left-[49.92%] -translate-x-1/2 w-[2px] h-[22px] bg-black z-0' />
// 					{/* Horizontal line above first-level children */}
// 					{/* Horizontal line above first-level children */}
// 					<div className='absolute top-[65px] left-1/2 -translate-x-1/2 w-[calc(8*76%)] h-[2px] bg-black z-0' />
// 					<ul className='absolute top-[80px] grid gap-4 w-[max-content] grid-cols-5 z-10'>
// 						{children?.map((text: any, idx: number) => (
// 							<li
// 								key={idx}
// 								className={`inline-block border-2 px-8 py-1 w-full relative z-10 ${
// 									text?.name == 'PLANNING (I)'
// 										? 'justify-self-center'
// 										: 'bg-transparent'
// 								}`}
// 							>
// 								{/* Vertical line from horizontal to this child */}
// 								<div className='absolute top-[-16px] left-1/2 -translate-x-1/2 w-[2px] h-[15px] bg-black z-0' />

// 								<span>
// 									{text?.name == 'PLANNING (I)' ? 'PLANNING (I)' : text?.name}
// 								</span>

// 								{/* Nested second-level children (only for PLANNING (I)) */}
// 								{text?.name == 'PLANNING (I)' && (
// 									<>
// 										{/* Vertical line from "planning I" to its child horizontal line */}
// 										<div className='absolute top-[32px] left-1/2 -translate-x-1/2 w-[2px] h-[32px] bg-black z-0' />
// 										{/* Horizontal line above 13 children */}
// 										<div className='absolute top-[64px] left-1/2 -translate-x-[48%] w-[calc(8*60%)] h-[2px] bg-black z-0' />

// 										<ul className='absolute top-[160px] grid grid-cols-13 gap-4 align-top justify-between w-[calc(13*32%)] left-1/2 -translate-x-1/2'>
// 											{subchildren?.map((title: any, index: number) => (
// 												<li
// 													key={index}
// 													className='flex justify-center items-center h-full text-center border-2 px-8 py-1 rotate-90 w-[200px] bg-transparent relative z-10'
// 												>
// 													{/* Vertical line from horizontal to this child */}
// 													<div className='absolute top-[24px] left-[-14px] -translate-x-1/2 w-[27px] h-[2px] bg-black z-0' />
// 													{title?.name}
// 												</li>
// 											))}
// 										</ul>
// 									</>
// 								)}
// 							</li>
// 						))}
// 					</ul>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default OrganizationChart;

// function categorizeDepartments(departments: any[]): any {
// 	const parents: any[] = [];
// 	const children: any[] = [];
// 	const subchildren: any[] = [];

// 	// Find the parent department (no parentDepartment)
// 	const parentDept = departments.find(dept => !dept.parentDepartment);

// 	if (parentDept) {
// 		parents.push(parentDept);
// 	}

// 	// Find children (direct children of the parent department)
// 	const childDepts = departments.filter(
// 		dept =>
// 			dept.parentDepartment && dept.parentDepartment._id === parentDept?._id
// 	);
// 	children.push(...childDepts);

// 	// Find subchildren (children of any child department)
// 	const subchildDepts = departments.filter(
// 		dept =>
// 			dept.parentDepartment &&
// 			childDepts.some(child => child._id === dept.parentDepartment?._id)
// 	);
// 	subchildren.push(...subchildDepts);

// 	return { parents, children, subchildren };
// }

import React from 'react';

const OrganizationChart = ({ data }: any) => {
	const { parents, children, subchildren } = categorizeDepartments(data || []);

	return (
		// <div className='w-full md:overflow-x-auto md:h-[48vh] '>
		<div className='w-full overflow-x-auto h-[54vh] mt-12 uppercase'>
			<div className='min-w-[1200px] flex justify-center '>
				<div className=''>
					<div className='parent-one flex w-full justify-center relative'>
						<span className='inline-block border-2 p-2'>{parents[0]?.name}</span>
						<div className='absolute bottom-[-22px] left-[50%] -translate-x-1/2 w-[2px] h-[22px] bg-mainText z-0' />
						{/* Horizontal line above first-level children */}
						<div className='absolute top-[65px] left-1/2 -translate-x-1/2 w-[calc(8*76%)] h-[2px] bg-mainText z-0' />
						<ul className='absolute top-[80px] grid gap-4 w-[max-content] grid-cols-5 z-10'>
							{children?.map((text: any, idx: number) => (
								<li
									key={idx}
									className={`inline-block border-2 px-8 py-1 w-full relative z-10 ${
										text?.name == 'PLANNING (I)' ? 'justify-self-center' : 'bg-transparent'
									}`}>
									{/* Vertical line from horizontal to this child */}
									<div className='absolute top-[-16px] left-1/2 -translate-x-1/2 w-[2px] h-[15px] bg-mainText z-0' />

									<span>{text?.name == 'PLANNING (I)' ? 'PLANNING (I)' : text?.name}</span>

									{/* Nested second-level children (only for PLANNING (I)) */}
									{text?.name == 'PLANNING (I)' && (
										<>
											{/* Vertical line from "planning I" to its child horizontal line */}
											<div className='absolute top-[32px] left-1/2 -translate-x-1/2 w-[2px] h-[32px] bg-mainText z-0' />

											{/* Horizontal line above 13 children */}
											<div className='absolute top-[64px] left-1/2 -translate-x-[50%] w-[calc(8*60%)] h-[2px] bg-mainText z-0' />

											<ul className='absolute top-[160px] grid grid-cols-13 gap-4 align-top justify-between w-[calc(13*32%)] left-[12%] -translate-x-1/2'>
												{subchildren?.map((title: any, index: number) => (
													<li
														key={index}
														className='flex justify-center items-center h-full text-center border-2 px-8 py-1 rotate-90 w-[200px] bg-transparent relative z-10'>
														{/* Vertical line from horizontal to this child */}
														<div className='absolute top-[23.5px] left-[-14px] -translate-x-1/2 w-[27px] h-[2px] bg-mainText z-0' />
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
			{/* Mobile-specific layout for smaller screens */}
			{/* <div className='block md:hidden'>
				<div className='space-y-6 px-4'>
					<div className='text-center'>
						<div className='border-2 rounded-[12px] border-gray-800 bg-white px-4 py-3 font-semibold inline-block'>
							{parents[0]?.name}
						</div>
					</div>

					<div className='space-y-4'>
						{children?.map((child: any, idx: number) => (
							<div key={idx} className='text-center'>
								<div className='border-2 rounded-[12px] border-gray-800 bg-white px-4 py-2 font-medium inline-block mb-4'>
									{child?.name}
								</div>

								{child?.name === 'PLANNING (I)' && subchildren && (
									<div className='grid grid-cols-2 gap-2 mt-4'>
										{subchildren.map((subchild: any, index: number) => (
											<div
												key={index}
												className='border rounded-[12px] border-gray-600 bg-gray-50 px-2 py-1 text-xs text-center flex items-center justify-center'
											>
												{subchild?.name}
											</div>
										))}
									</div>
								)}
							</div>
						))}
					</div>
				</div>
			</div> */}
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
		dept => dept.parentDepartment && dept.parentDepartment._id === parentDept?._id
	);
	children.push(...childDepts);

	// Find subchildren (children of any child department)
	const subchildDepts = departments.filter(
		dept =>
			dept.parentDepartment && childDepts.some(child => child._id === dept.parentDepartment?._id)
	);
	subchildren.push(...subchildDepts);

	return { parents, children, subchildren };
}
